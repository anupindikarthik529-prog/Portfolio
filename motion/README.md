# Hero animation — "The Untangle" (Remotion)

A code-built version of the home hero animation, matching storyboard v2 in Figma
(page "03 — Homepage", frame "Hero animation — storyboard v2 · The Untangle").

```bash
npm install
npm run studio                 # scrub the timeline in Remotion Studio
npm run render                 # out/untangle.mp4 (1440×760, 30 fps) + out/untangle.gif (half size)
STILLS=40,104,190 STILLS_ONLY=1 npm run render   # single frames for review
```

- `src/geometry.ts` holds the string geometry: the coil through "complicated systems", the grab tail,
  the taut line, the release curve and the final signature curve. All of them have the same point count,
  so the string morphs point by point; that's what makes it unravel left to right.
- `src/Untangle.tsx` holds the timeline (`T`), the portrait (same paths as the Figma hero) and the arm poses.
- Beats (frames @30fps): enter 10–46, tangle 48–72, grab 74–90, pull and unravel 92–116,
  swing 116–134, circle 120–142, release 136–152, settle and hold; blink at 178.
- Rendering uses the pre-installed Chromium headless shell (see `render.mjs`).

For the live site, the same timeline can drive an SVG component (Framer Motion) or be rebuilt in Rive.
Play it once on load, replay on portrait hover, and show the final frame for reduced motion.
