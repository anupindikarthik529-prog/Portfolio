import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import path from 'node:path';
const browserExecutable = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell';
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const composition = await selectComposition({serveUrl, id: 'Untangle', browserExecutable});
const stills = (process.env.STILLS || '').split(',').filter(Boolean);
for (const s of stills) {
  await renderStill({composition, serveUrl, frame: Number(s), output: path.resolve(`out/frame-${s}.png`), browserExecutable});
}
if (!process.env.STILLS_ONLY) {
  console.log('rendering mp4');
  const r = await renderMedia({composition, serveUrl, codec: 'h264', outputLocation: path.resolve('out/untangle.mp4'), browserExecutable, crf: 18, onProgress: ({progress}) => { if (Math.round(progress*100)%25===0) console.log('mp4', Math.round(progress*100)); }});
  await renderMedia({composition, serveUrl, codec: 'gif', outputLocation: path.resolve('out/untangle.gif'), browserExecutable, scale: 0.5, everyNthFrame: 2});
}
console.log('done');
