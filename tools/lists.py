import re, json
from jsxparse import load
from classify import classify
base='/root/.claude/projects/-home-user-Portfolio/635bf448-beb1-53ff-ab26-8284a7dbe289/tool-results/'
F={'adidas':'mcp-Figma-get_design_context-1791895066314.txt','indycar':'mcp-Figma-get_design_context-1791895081600.txt','ai':'mcp-Figma-get_design_context-1791895088636.txt','vybe':'mcp-Figma-get_design_context-1791895088390.txt','home':'mcp-Figma-get_design_context-1791895086853.txt'}
def size(n):
    c=n.attrs.get('className','')
    w=re.search(r'(?<![\w-])w-\[([\d.]+)px\]',c); h=re.search(r'(?<![\w-])h-\[([\d.]+)px\]',c)
    return (float(w.group(1)) if w else None, float(h.group(1)) if h else None)
out={'raster':[], 'pens':[]}
for k,f in F.items():
    root,consts=load(base+f)
    for s in root.children:
        if k=='home' and s.name.startswith('Hero'): continue
        r,p=classify(s,consts)
        for n in r: out['raster'].append([k,n.nid,n.name,*size(n)])
        for n in p:
            if n.name=='Draw mask': continue
            out['pens'].append([k,n.nid,n.name])
json.dump(out,open('lists.json','w'),indent=0)
print(len(out['raster']),len(out['pens']))
print([x for x in out['raster'] if x[3] is None][:10])
