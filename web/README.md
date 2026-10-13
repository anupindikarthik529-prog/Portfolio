# Portfolio site (built from the Figma file)

The full portfolio as a React site: Home, About and the four case studies (INDYCAR, AI agent,
adidas, VYBE), with hand-drawn animations throughout. Layout and copy come straight from the
Figma file `1PD7zKot98QgHWacUtWDLm`.

```bash
npm install
npm run dev       # local dev server
npm run build     # static build in dist/ (deploy to Vercel, Netlify or GitHub Pages)
npm run preview   # serve dist/ on :4173
```

Routes (hash router, so any static host works): `#/`, `#/work` (scrolls to Selected work),
`#/about`, `#/work/indycar`, `#/work/ai-agent`, `#/work/adidas`, `#/work/vybe`.

## How it is built

- `src/pages/gen/*.tsx` are **generated** by `../tools/gen.py` from Figma `get_design_context`
  output. Edit the generator, not these files. Each page keeps the Figma 1440 layout; `App.tsx`
  scales it to the window with CSS `zoom`.
- `public/shots/<node-id>.webp` are Figma screenshots of the raster areas (screens, mockups,
  photos), copied in by `../tools/collect_shots.py`.
- Pen lines (arrows, circles, underlines, ticks) are inlined SVGs so they can draw on.

## Animations

| Where | What |
| --- | --- |
| Home hero | "The Untangle" (`src/components/Untangle.tsx`): ported from the Remotion version in `../motion`. Plays once ~300 ms after load, blinks every 5–6 s, replays when the pointer enters the portrait (at most once per 4 s). Phones and reduced motion show the final frame. |
| Nav | Brick hand-drawn underline draws on hover / focus (350 ms), retracts in 200 ms. |
| Home rows | Hovering a project draws a brick pen frame around its preview and turns the title brick. |
| Every page | Headlines rise word by word, text fades up, rules draw across, pen arrows and circles draw on, Caveat notes write on left → right, images settle in, big numbers count up. |
| INDYCAR, VYBE phones | Each phone scrolls inside itself; auto-scrolls once at ~60 px/s when 40% visible. Hover pauses, wheel / touch / keys take over. |
| Page changes | A brick pen stroke sweeps across a paper wash. |

All of it is off under the OS "reduce motion" setting (content shows immediately).

## Known gaps

- Phones get the desktop layout scaled down. The mobile home frame (`123:1245`) is not wired up yet.
- VYBE "10 · Prototype" shows the poster still; the real prototype video is still needed.
- AI agent page: the three planned interactions (show-changes toggle, phase details on hover,
  embedded prototype) are not built; their annotations are dropped.
- INDYCAR Flags, Road and street, and Championship screens are still the short exports.
