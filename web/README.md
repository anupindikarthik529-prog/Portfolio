# Portfolio home page (animated prototype)

React + Tailwind + Motion build of the redesigned home page, with Magic UI / 21st.dev-style
effects implemented in `src/components/fx.tsx` (blur-fade reveals, number tickers, marquee,
shimmer button, cursor spotlight cards, 3D tilt, scroll-linked text reveal).

```bash
npm install
npm run dev                                   # local dev server
npm run build                                 # static build in dist/
SINGLE=1 npx vite build --outDir dist-single  # one self-contained HTML file
```

Copy and project data live in `src/data.ts`. `RESUME` is a placeholder until the PDF is hosted.
Animations respect the OS "reduce motion" setting.
