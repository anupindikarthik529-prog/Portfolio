import re
from jsxparse import Node
VIS = re.compile(r'crop|screen|phone|final|visual|iteration|illustration|portrait|surface|mockup|wireframe|matrix|resolved|journey|orchestr|layout|sitemap|old app|research —|synthesis —|concept|sketches|lo-fi|poster|prototype video|hero|workspace|tandem|timeline|stride|swatch|palette|type|chart|image|photo|competitor|logo|frame 1|frame 2', re.I)
def info(n):
    imgs=[x for x in n.walk() if x.tag=='img']; ps=[x for x in n.walk() if x.tag=='p']; cnt=sum(1 for _ in n.walk())
    return imgs,ps,cnt
def classify(section, consts):
    raster=[]; pens=[]
    def rec(n):
        imgs,ps,cnt=info(n)
        if not imgs: return
        direct_img = [c for c in n.children if isinstance(c,Node) and c.tag=='img']
        if not ps and cnt<=4:
            src=imgs[0].attrs.get('src','{}')[1:-1]
            url=consts.get(src,'')
            (pens if url.endswith('.svg') else raster).append(n); return
        if n is not section and (VIS.search(n.name or '') or (cnt>40 and n.nid)) and n.nid:
            raster.append(n); return
        for c in n.children:
            if isinstance(c,Node): rec(c)
    rec(section)
    return raster, pens
