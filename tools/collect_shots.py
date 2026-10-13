"""Map get_screenshot results in the session transcript to node ids and copy them into web assets."""
import json, re, sys, os
from PIL import Image
T='/root/.claude/projects/-home-user-Portfolio/635bf448-beb1-53ff-ab26-8284a7dbe289.jsonl'
CLONES={"356:1197":"241:1454","356:1198":"241:1458","356:1199":"241:1462","356:1200":"241:1466","356:1201":"241:1475","356:1202":"241:1477","356:1203":"241:1479","356:1204":"241:1481","356:1205":"274:1201","356:1278":"274:1743"}
CROP_W={'274:1201':340,'274:1743':340}
since=float(sys.argv[1]) if len(sys.argv)>1 else 0
uses={}; shots={}
for line in open(T):
    d=json.loads(line); c=d.get('message',{}).get('content')
    if not isinstance(c,list): continue
    for x in c:
        if x.get('type')=='tool_use' and x['name'].endswith('get_screenshot'):
            uses[x['id']]=x['input']['nodeId']
        elif x.get('type')=='tool_result' and x.get('tool_use_id') in uses:
            s=json.dumps(x['content'])
            m=re.search(r'(mcp-Figma-blob-(\d+)-\w+\.png)',s)
            if m and int(m.group(2))>=since: shots[uses[x['tool_use_id']]]=m.group(1)
out='web/public/shots'; os.makedirs(out,exist_ok=True)
D='/root/.claude/projects/-home-user-Portfolio/635bf448-beb1-53ff-ab26-8284a7dbe289/tool-results/'
meta={}
for nid,f in shots.items():
    nid=CLONES.get(nid,nid)
    im=Image.open(D+f); im.load()
    name=nid.replace(':','-')
    rgb=im.convert('RGB')
    if nid in CROP_W:  # the VYBE clones rendered 4px of white past the screen edge
        rgb=rgb.crop((0,0,CROP_W[nid],rgb.height))
    rgb.save(f'{out}/{name}.webp','WEBP',quality=88,method=6)
    meta[nid]=[rgb.width,rgb.height,im.mode]
# the second Rules status bar uses the same image as the first
meta['258:1199']=meta.get('258:1197')
if meta['258:1199']:
    Image.open(f'{out}/258-1197.webp').save(f'{out}/258-1199.webp','WEBP',quality=88)
json.dump(meta,open('tools/shots.json','w'),indent=0)
print(len(meta))
