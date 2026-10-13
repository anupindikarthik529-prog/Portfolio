import re, json
from jsxparse import load
from classify import classify
base='data/'
F={'adidas':'adidas_ctx.json','indycar':'indycar_ctx.json','ai':'ai_ctx.json','vybe':'vybe_ctx.json','home':'home_ctx.json'}
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
