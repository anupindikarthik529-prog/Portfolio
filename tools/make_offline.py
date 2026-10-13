"""Build web/ as one self-contained HTML file (JS, CSS, fonts and images inlined).

    python3 tools/make_offline.py [out.html]

Runs `SINGLE=1 vite build`, then injects every web/public/shots/*.webp as a data URI
in window.__SHOTS, which shot() in web/src/components/kit.tsx reads first.
"""
import base64, json, os, subprocess, sys, tempfile

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(root, 'Karthik-Anupindi-Portfolio.html'))
with tempfile.TemporaryDirectory() as tmp:
    subprocess.run(['npx', 'vite', 'build', '--base=./', '--outDir', tmp], cwd=os.path.join(root, 'web'),
                   env={**os.environ, 'SINGLE': '1'}, check=True)
    html = open(os.path.join(tmp, 'index.html')).read()
shots_dir = os.path.join(root, 'web', 'public', 'shots')
shots = {f[:-5]: 'data:image/webp;base64,' + base64.b64encode(open(os.path.join(shots_dir, f), 'rb').read()).decode()
         for f in sorted(os.listdir(shots_dir)) if f.endswith('.webp')}
html = html.replace('<script', '<script>window.__SHOTS=' + json.dumps(shots, separators=(',', ':')) + '</script><script', 1)
open(out, 'w').write(html)
print(f'{out}: {len(shots)} images, {os.path.getsize(out) // 1024} KB')
