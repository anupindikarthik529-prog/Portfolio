"""Tiny parser for the JSX emitted by Figma get_design_context (enough for its subset)."""
import re, json

TAG = re.compile(r'<(/?)([a-zA-Z][\w.]*)((?:\s+[\w:-]+(?:=(?:"[^"]*"|\{\{[^}]*\}\}|\{[^}]*\}))?)*)\s*(/?)>', re.S)
ATTR = re.compile(r'([\w:-]+)(?:=("([^"]*)"|\{(\{[^}]*\}|[^}]*)\}))?', re.S)

class Node:
    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.children, self.parent = tag, attrs, [], None
    @property
    def nid(self): return self.attrs.get('data-node-id')
    @property
    def name(self): return self.attrs.get('data-name', '')
    def walk(self):
        yield self
        for c in self.children:
            if isinstance(c, Node): yield from c.walk()

def parse(code):
    consts = dict(re.findall(r'const (\w+) = "([^"]+)";', code))
    body = code[code.index('return (') + len('return ('):]
    body = re.sub(r'\sstyle=\{\{.*?\}\}', '', body, flags=re.S)
    root = Node('#root', {}); stack = [root]; pos = 0
    for m in TAG.finditer(body):
        text = body[pos:m.start()]
        if text.strip():
            t = text.strip()
            if t.startswith('{`') and t.endswith('`}'): t = t[2:-2]
            stack[-1].children.append(t)
        pos = m.end()
        close, tag, attrs, selfclose = m.groups()
        if close:
            if len(stack) > 1: stack.pop()
            continue
        a = {}
        for am in ATTR.finditer(attrs):
            k = am.group(1)
            if am.group(3) is not None: a[k] = am.group(3)
            elif am.group(4) is not None: a[k] = '{' + am.group(4) + '}'
            else: a[k] = True
        n = Node(tag, a); n.parent = stack[-1]; stack[-1].children.append(n)
        if not selfclose: stack.append(n)
    return root.children[0], consts

def load(path):
    d = json.load(open(path)); return parse(d[0]['text'])
