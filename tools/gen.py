"""Convert Figma get_design_context JSX (one 1440-wide page) into a TSX page for web/.

Every node keeps its Figma layout classes. On top of that the generator:
  - swaps raster areas for local screenshots (web/public/shots/<id>.webp),
  - inlines hand-drawn pen SVGs so they can draw on,
  - tags text, lines, images and phones with data-a="…" animation hooks (see web/src/lib/animate.ts),
  - replaces the Nav instance with <Nav/>, maps prototype links to routes, drops annotations.
"""
import html, json, re, sys
from jsxparse import load, Node

BASE = '/root/.claude/projects/-home-user-Portfolio/635bf448-beb1-53ff-ab26-8284a7dbe289/tool-results/'
PAGES = {
    'Home': (BASE + 'mcp-Figma-get_design_context-1791895086853.txt', 'home'),
    'About': ('data/about_ctx.json', 'about'),
    'Adidas': (BASE + 'mcp-Figma-get_design_context-1791895066314.txt', 'adidas'),
    'Indycar': (BASE + 'mcp-Figma-get_design_context-1791895081600.txt', 'indycar'),
    'Ai': (BASE + 'mcp-Figma-get_design_context-1791895088636.txt', 'ai-agent'),
    'Vybe': (BASE + 'mcp-Figma-get_design_context-1791895088390.txt', 'vybe'),
}
SHOTS = json.load(open('shots.json'))
PENS = {}
for f in ('data/pens1.tsv', 'data/pens2.tsv', 'data/pens3.tsv', 'data/pens4.tsv'):
    try:
        for line in open(f):
            if '\t' in line:
                k, v = line.rstrip('\n').split('\t', 1)
                PENS[k] = v
    except FileNotFoundError:
        pass

# Nodes the site draws itself (hero animation) or that are design notes.
SKIP = {'327:1227', '121:1211', '350:1228', '121:1297'}
# Home rows / visuals → case study routes
ROW_ROUTE = {'121:1232': 'indycar', '121:1243': 'indycar', '121:1248': 'ai-agent', '121:1259': 'ai-agent',
             '121:1264': 'adidas', '121:1275': 'adidas', '121:1280': 'vybe', '121:1291': 'vybe'}
TITLE_ROUTE = [('INDYCAR', 'indycar'), ('AI Agent', 'ai-agent'), ('Scattered Sales', 'adidas'), ('VYBE', 'vybe')]
PROTO_ROUTE = {'121-1198': '#/', '290-1198': '#/about', '124-1219': '#/work/adidas', '238-1383': '#/work/indycar',
               '156-1268': '#/work/ai-agent', '269-1422': '#/work/vybe'}

OLD_RESUME = 'https://drive.google.com/file/d/1EbvfEBWWpgXVhEKMM-i15NeitrJVQAJg/view'
NEW_RESUME = 'https://drive.google.com/file/u/1/d/1Lm0M9iSy5uVdAX4AAY7Vsvn622sBeMZx/view?usp=drive_link'
# Copy changed after the design-context export (also changed in Figma)
TEXT_OVERRIDE = {'I158:1580;124:1199': 'A complete agent workflow in one day, with a person signing off at every stage'}
# Next-project cards reuse the home-page preview of the project they point to
HOME_VISUAL = {'indycar': '121-1243', 'ai-agent': '121-1259', 'adidas': '121-1275', 'vybe': '121-1291'}
# Final-design grids that become a scroll-through story: section → (story starts, tail starts)
STORY = {'126:1292': (363, 2600), '158:1343': (400, 1200)}
# AI "Agents propose, people decide" beat: the banners, labels and links are redrawn by <AgentBeat/>
BEAT = '156:1841'
BEAT_KEEP = {'156:1842', '156:1912', '156:1915', '156:1916', '156:1917'}
TESTIMONIALS = '298:2335'

missing_pens, missing_imgs = [], []


def px(cls, key):
    m = re.search(r'(?<![\w-])' + key + r'-\[(-?[\d.]+)px\]', cls)
    return float(m.group(1)) if m else None


def fix_classes(cls):
    cls = re.sub(r"font-\['([^:']+):[^']*'\]", lambda m: "font-['" + m.group(1) + "']", cls)
    cls = cls.replace("font-['Newsreader']", "font-['Newsreader_Variable']")
    cls = re.sub(r'var\(--[^,()]*,([^()]+?)\)', r'\1', cls)
    return cls


def strip_deco(cls):
    keep = []
    for c in cls.split():
        if re.match(r'(bg-|border|shadow-|overflow-)', c):
            continue
        keep.append(c)
    return ' '.join(keep)


def esc_attr(v):
    return v.replace('"', '&quot;')


def text_of(n):
    return ''.join(c if isinstance(c, str) else text_of(c) for c in n.children)


def svg_jsx(svg, cls):
    s = svg
    s = re.sub(r'\s([a-z]+)-([a-z]+)(?:-([a-z]+))?=', lambda m: ' ' + m.group(1) + m.group(2).capitalize() + ((m.group(3) or '').capitalize()) + '=', s)
    s = s.replace('<svg ', f'<svg className="{cls}" preserveAspectRatio="none" aria-hidden="true" ', 1)
    s = re.sub(r'\swidth="[\d.]+" height="[\d.]+"', '', s, count=1)
    dashed = 'strokeDasharray' in s
    s = re.sub(r'<path ', '<path pathLength={1} ' if not dashed else '<path ', s)
    s = s.replace('/>', ' />')
    return s, dashed


class Gen:
    def __init__(self, page, route):
        self.page, self.route = page, route
        self.idx = 0

    # ------------------------------------------------------------------
    def attrs(self, n, cls, extra=''):
        out = f' className="{esc_attr(cls)}"' if cls else ''
        return out + extra

    def anim_delay(self, cls):
        left = px(cls, 'left') or 0
        return f' style={{{{"--d": "{int(min(320, max(0, left - 80) / 4))}ms"}} as React.CSSProperties}}'

    def emit(self, n, depth=0, ctx=None):
        ctx = ctx or {}
        if isinstance(n, str):
            t = html.unescape(n)
            return '{' + json.dumps(t, ensure_ascii=False) + '}'
        nid, name = n.nid, n.name or ''
        cls = fix_classes(n.attrs.get('className', ''))
        if nid in SKIP or '(hide before export)' in name:
            return ''
        if name == 'Nav' and n.tag == 'div':
            return '<Nav />'
        # home rows become links
        if nid in ROW_ROUTE and self.page == 'Home':
            r = ROW_ROUTE[nid]
            if 'Visual' in name:
                img = self.raster(n, cls).replace(' data-a="img"', '', 1)
                img = re.sub(r'^<div className="[^"]*"', '<div className="absolute inset-0 overflow-hidden rounded-[8px]"', img)
                return (f'<a href="#/work/{r}" data-row="{r}" data-a="img" className="{esc_attr(cls)} block row-visual" aria-label="Read the case study">'
                        f'{img}<Frame /></a>')
            inner = ''.join(self.emit(c, depth + 1) for c in n.children)
            return f'<a href="#/work/{r}" data-row="{r}" className="{esc_attr(cls)} row-link">{inner}</a>'

        if self.page != 'Home' and ctx.get('next') and name == 'Next project visual':
            src = HOME_VISUAL[ctx['next']]
            return (f'<a href="#/work/{ctx["next"]}" data-row="next" data-a="img" className="{esc_attr(cls)} block row-visual" aria-label="Read the next case study">'
                    f'<div className="absolute inset-0 overflow-hidden rounded-[8px]"><img src={{shot("{src}")}} alt="" loading="lazy" decoding="async" '
                    f'className="absolute inset-0 size-full max-w-none pointer-events-none object-cover" /></div><Frame /></a>')
        # raster area
        if nid in SHOTS and not ctx.get('in_raster'):
            return self.raster(n, cls)
        if nid in PENS:
            return self.pen(n, cls)
        if n.tag == 'img':
            a = n.parent
            while a is not None and not a.nid:
                a = a.parent
            missing_imgs.append((self.page, a.nid if a else None, a.name if a else None, n.attrs.get('src')))
            return ''
        # phones: scroll containers
        if 'overflow-y-auto' in cls:
            return self.phone(n, cls, depth)

        tag = n.tag
        extra = ''
        if tag == 'button':
            tag = 'div'
            cls = cls.replace('cursor-pointer', '')
        if tag == 'a':
            href = n.attrs.get('href', '')
            m = re.search(r'node-id=(\d+-\d+)', href)
            if 'figma.com/proto/1PD7zKot98QgHWacUtWDLm' in href and m:
                href = PROTO_ROUTE.get(m.group(1), '#/')
                extra = f' href="{href}"'
            else:
                href = href.replace(OLD_RESUME, NEW_RESUME)
                extra = f' href="{esc_attr(href)}"' + ('' if href.startswith('mailto:') else ' target="_blank" rel="noreferrer"')
        if tag == 'p':
            t = text_of(n).strip()
            extra += self.text_anim(n, cls, t)
            if nid in TEXT_OVERRIDE:
                return f'<p{self.attrs(n, cls, extra)}>{{{json.dumps(TEXT_OVERRIDE[nid], ensure_ascii=False)}}}</p>'
        elif name == 'Rectangle' and re.search(r'(?<![\w-])h-px', cls) and 'bg-' in cls:
            extra += ' data-a="line"' + self.anim_delay(cls)
        elif name in ('Rule',):
            extra += ' data-a="line"' + self.anim_delay(cls)

        # hero links
        if self.page == 'Home' and nid in ('121:1215', '121:1216'):
            inner = ''.join(self.emit(c, depth + 1) for c in n.children)
            return f'<a href="#/work" onClick={{scrollToWork}} className="{esc_attr(cls)} hero-cta">{inner}</a>'
        if self.page == 'Home' and nid == '121:1217':
            inner = ''.join(self.emit(c, depth + 1) for c in n.children)
            return f'<a href="#/about" className="{esc_attr(cls)} cursor-pointer">{inner}</a>'
        if name == 'Link underline':
            extra += ' data-a="under"'
            if ctx.get('next'):
                extra += ' data-row="next"'
        if self.page == 'Home' and name == 'Read link':
            inner = ''.join(self.emit(c, depth + 1, ctx) for c in n.children)
            return f'<div className="{esc_attr(cls)} read-link">{inner}<PenUnderline /></div>'

        # next project block
        if self.page != 'Home' and ctx.get('next') and tag == 'p':
            t = text_of(n)
            if '@gmail.com' in t:
                return f'<p className="{esc_attr(cls)}"><FooterLinks /></p>'
            if t.strip().startswith('Read it') or any(k in t for k, _ in TITLE_ROUTE) and len(t) > 30:
                inner = ''.join(self.emit(c, depth + 1) for c in n.children)
                return f'<a href="#/work/{ctx["next"]}" data-row="next" className="{esc_attr(cls)} next-link"{extra}>{inner}</a>'

        if depth == 1 and nid in STORY:
            return self.story(n, cls, name)
        if depth == 1 and nid == TESTIMONIALS:
            return self.testimonials(n, cls, name)
        if depth == 1 and nid == BEAT:
            kids = ''.join(self.emit(c, depth + 1, ctx) for c in n.children if isinstance(c, Node) and c.nid in BEAT_KEEP)
            return f'<div className="{esc_attr(cls)}" data-section="{esc_attr(name)}"><AgentBeat />{kids}</div>'
        if depth == 1:
            extra += f' data-section="{esc_attr(name)}"'
            if self.page == 'Home' and nid == '121:1229':
                extra += ' id="work"'
            if name == 'Next project':
                t = text_of(n)
                nxt = next((r for k, r in TITLE_ROUTE if k in t), None)
                ctx = dict(ctx, next=nxt)
        if self.page == 'Home' and nid == '121:1199':
            ctx = dict(ctx, hero=True)
        inner = ''.join(self.emit(c, depth + 1, ctx) for c in n.children)
        if self.page == 'Home' and nid == '121:1199':
            inner += '<Untangle />'
        if depth == 0:
            cls = cls.replace('size-full', 'w-[1440px]')
        return f'<{tag}{self.attrs(n, cls, extra)}>{inner}</{tag}>'

    # ------------------------------------------------------------------
    def story(self, n, cls, name):
        y0, y1 = STORY[n.nid]
        H = px(cls, 'h')
        kids = [c for c in n.children if isinstance(c, Node)]
        top = lambda c: px(c.attrs.get('className', ''), 'top') or 0
        screens = [c for c in kids if re.match(r'(Walkthrough|Final) — ', c.name or '') and 'Timeline' not in c.name and y0 <= top(c) < y1]
        items = []
        for sc in screens:
            sl, st = px(sc.attrs['className'], 'left'), top(sc)
            caps = sorted([c for c in kids if c.tag == 'p' and px(c.attrs.get('className', ''), 'left') == sl and st < top(c) < y1 and top(c) - st < 1100], key=top)
            caps = [c for c in caps if top(c) < min([top(o) for o in screens if top(o) > st] + [y1])]
            title = re.sub(r'\s+', ' ', text_of(caps[0]).strip())
            num, _, ttl = title.partition(' ')
            nid = sc.nid.replace(':', '-')
            src = f'{nid}-2x' if nid != '226-2682' else nid
            w, h = (1280, 910) if nid == '226-2682' else ((1040, 693) if nid.startswith('165') else (1240, 882))
            items.append({'num': num, 'title': ttl.strip(), 'desc': text_of(caps[1]).strip(), 'src': src, 'w': w, 'h': h, 'alt': (sc.name or '').split('— ', 1)[-1]})
        used = set(id(c) for c in screens)
        for sc in screens:
            sl, st = px(sc.attrs['className'], 'left'), top(sc)
        head = ''.join(self.emit(c, 2) for c in kids if top(c) < y0)
        tail_kids = [c for c in kids if top(c) >= y1]
        tail = ''
        for c in tail_kids:
            c2 = Node(c.tag, dict(c.attrs)); c2.children = c.children; c2.parent = c.parent
            c2.attrs['className'] = re.sub(r'(?<![\w-])top-\[(-?[\d.]+)px\]', lambda m: f'top-[{float(m.group(1)) - y1:g}px]', c.attrs['className'])
            tail += self.emit(c2, 2)
        js = json.dumps(items, ensure_ascii=False)
        return (f'<div className="relative shrink-0 w-[1440px]" data-section="{esc_attr(name)}">'
                f'<div className="relative w-[1440px]" style={{{{height: {y0}}}}}>{head}</div>'
                f'<ScreenStory items={{{js}}} />'
                f'<div className="relative w-[1440px]" style={{{{height: {H - y1:g}}}}}>{tail}</div></div>')

    def testimonials(self, n, cls, name):
        cols = {}
        label = ''
        for c in n.walk():
            if c.tag != 'p':
                continue
            cc = c.attrs.get('className', '')
            t = re.sub(r'\s+', ' ', text_of(c)).strip()
            if t.isupper():
                label = t
                continue
            cols.setdefault(px(cc, 'left'), []).append((px(cc, 'top') or 0, bool(re.search(r'(?<![\w-])italic', cc)), t))
        items = []
        for left in sorted(k for k in cols if k is not None):
            ps = sorted(cols[left])
            quote = next(t for _, it, t in ps if it)
            rest = [t for _, it, t in ps if not it]
            items.append({'quote': quote, 'name': rest[0], 'role': rest[1]})
        js = json.dumps(items, ensure_ascii=False)
        return (f'<div className="{esc_attr(fix_classes(cls))}" data-section="{esc_attr(name)}">'
                f'<Testimonials label={{{json.dumps(label, ensure_ascii=False)}}} items={{{js}}} /></div>')

    def text_anim(self, n, cls, t):
        size = px(cls, 'text')
        if not size:
            # size may sit on the parent (multi-line headings)
            size = px(fix_classes(n.parent.attrs.get('className', '')), 'text') if n.parent else None
        pcls = fix_classes(n.parent.attrs.get('className', '')) if n.parent else ''
        if "Caveat" in cls or "Caveat" in pcls or "Gochi" in cls:
            return ' data-a="write"' + self.anim_delay(cls)
        if re.fullmatch(r'[+−-]?\$?\d+(\.\d+)?\s?(%|×|x|s|M|K|h)?', t) and (size or 0) >= 36:
            return f' data-a="count" data-to="{esc_attr(t)}"' + self.anim_delay(cls)
        if (size or 0) >= 38:
            return ' data-a="words"' + self.anim_delay(cls)
        return ' data-a="rise"' + self.anim_delay(cls if px(cls, 'left') is not None else pcls)

    def raster(self, n, cls):
        nid = n.nid
        w, h, _ = SHOTS[nid]
        nw, nh = px(cls, 'w'), px(cls, 'h')
        src = nid.replace(':', '-')
        alt = esc_attr(re.sub(r'\s+', ' ', n.name or ''))
        if alt.startswith('Visual — ') or re.search(r'\.(jpg|png)$', alt):
            alt = ''
        sh = re.search(r'shadow-\[(-?\d+)px_(-?\d+)px_(\d+)px', cls)
        if nw and nh and (w > nw + 2 or h > nh + 2):
            padx = (w - nw) / 2
            yoff = int(sh.group(2)) if sh else 0
            pady = max(0, min(h - nh, padx - yoff if sh else (h - nh) / 2))
            c = strip_deco(cls).replace('rounded-', 'xrounded-')
            c = re.sub(r'xrounded-\S+', '', c)
            return (f'<div className="{esc_attr(c)}" data-a="img"><img src={{shot("{src}")}} alt="{alt}" loading="lazy" decoding="async" '
                    f'className="absolute max-w-none pointer-events-none" style={{{{left: {-padx:.1f}, top: {-pady:.1f}, width: {w}, height: {h}}}}} /></div>')
        c = strip_deco(cls) + ' overflow-hidden'
        if nh is None and px(cls, 'top') is not None and re.search(r'(?<![\w-])bottom-\[', cls):
            # height came from a bottom offset (e.g. a screen taller than its phone): use the shot's
            c = re.sub(r'(?<![\w-])bottom-\[[^\]]+\]', '', c) + f' h-[{h}px]'
            nh = h
        if nh is None and not re.search(r'inset-|size-full|(?<![\w-])h-full|bottom-\[', cls):
            c += f' h-[{h}px]'  # hug-height auto-layout frame
            nh = h
        if nw is None and not re.search(r'inset-|size-full|(?<![\w-])w-full|right-\[', cls):
            c += f' w-[{w}px]'
            nw = w
        fit ='object-cover' if not (nw and nh) else 'object-fill'
        return (f'<div className="{esc_attr(c)}" data-a="img"><img src={{shot("{src}")}} alt="{alt}" loading="lazy" decoding="async" '
                f'className="absolute inset-0 size-full max-w-none pointer-events-none {fit}" /></div>')

    def pen(self, n, cls):
        svg = PENS[n.nid]
        s, dashed = svg_jsx(svg, 'absolute block inset-0 size-full overflow-visible')
        # keep the Figma wrapper (it carries the stroke inset), swap the img
        def walk(m):
            if isinstance(m, str):
                return ''
            if m.tag == 'img':
                return s
            mc = fix_classes(m.attrs.get('className', ''))
            return f'<div className="{esc_attr(mc)}">' + ''.join(walk(c) for c in m.children) + '</div>'
        anim = 'wipe' if dashed or 'fill="#' in svg and 'stroke' not in svg else 'draw'
        if n.name == 'Link underline':
            anim = 'under'
        inner = ''.join(walk(c) for c in n.children)
        if not inner:
            inner = s
        return f'<div className="{esc_attr(cls)}" data-a="{anim}"{self.anim_delay(cls)}>{inner}</div>'

    def phone(self, n, cls, depth):
        fixed = [c for c in n.children if isinstance(c, Node) and re.match(r'(TabBar|Status bar|StatusBar)', c.name or '')]
        scroll = [c for c in n.children if c not in fixed]
        label = esc_attr(n.name or 'Phone screen')
        outer = cls.replace('overflow-y-auto', '').replace('overflow-x-clip', '')
        outer = re.sub(r'(?<![\w-])bg-\S+', '', outer)
        rounded = ' '.join(re.findall(r'rounded-\S+', cls))
        bg = ' '.join(re.findall(r'(?<![\w-])bg-\S+', cls))
        inner = ''.join(self.emit(c, depth + 1, {'in_phone': True}) for c in scroll)
        fx = ''.join(self.emit(c, depth + 1, {'in_phone': True}) for c in fixed)
        return (f'<div className="{esc_attr(outer)} overflow-hidden" data-a="img">'
                f'<div className="absolute inset-0 overflow-y-auto overflow-x-hidden phone-scroll {bg} {rounded}" data-phone tabIndex={{0}} role="region" aria-label="{label}">'
                f'<div className="relative" style={{{{height: {self.phone_height(scroll)}}}}}>{inner}</div></div>{fx}</div>')

    def phone_height(self, kids):
        hmax = 0
        for c in kids:
            if not isinstance(c, Node):
                continue
            cls = c.attrs.get('className', '')
            top = px(cls, 'top') or 0
            hh = px(cls, 'h')
            if hh is None and c.nid in SHOTS:
                hh = SHOTS[c.nid][1]
            if hh is None:
                b = px(cls, 'bottom')
                hh = (SHOTS.get(c.nid, [0, 0])[1]) if b is not None else 0
            hmax = max(hmax, top + (hh or 0))
        return int(hmax)


HEADER = '''// Generated by tools/gen.py from the Figma file — edit the generator, not this file.
import React from 'react'
import { Nav, Frame, FooterLinks, PenUnderline, shot, scrollToWork, Untangle, Testimonials, ScreenStory, AgentBeat } from '../../components/kit'
void React; void Frame; void FooterLinks; void PenUnderline; void scrollToWork; void Untangle; void Testimonials; void ScreenStory; void AgentBeat

export default function Page() {
  return (
'''


def main(only=None):
    for comp, (path, route) in PAGES.items():
        if only and comp not in only:
            continue
        root, consts = load(path)
        g = Gen(comp, route)
        body = g.emit(root)
        out = HEADER + '    ' + body + '\n  )\n}\n'
        open(f'../web/src/pages/gen/{comp}.tsx', 'w').write(out)
        print(comp, len(out))
    if missing_imgs:
        print('MISSING IMG', len(missing_imgs))
        for x in missing_imgs[:60]:
            print('  ', x)


if __name__ == '__main__':
    main(sys.argv[1:] or None)
