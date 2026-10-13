// Shared geometry for "The Untangle" (hero coordinates, 1440 × 760).
export type Pt = [number, number];

export const PORTRAIT_ORIGIN: Pt = [1080, 330];

const cubic = (a: Pt, b: Pt, c: Pt, d: Pt, t: number): Pt => {
  const u = 1 - t;
  return [
    u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
    u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
  ];
};
export const cubicPts = (a: Pt, b: Pt, c: Pt, d: Pt, n: number): Pt[] =>
  Array.from({length: n}, (_, i) => cubic(a, b, c, d, i / (n - 1)));
export const linePts = (a: Pt, b: Pt, n: number): Pt[] =>
  Array.from({length: n}, (_, i) => [a[0] + ((b[0] - a[0]) * i) / (n - 1), a[1] + ((b[1] - a[1]) * i) / (n - 1)]);

// Coil scribble through "complicated systems"
export const N_COIL = 200;
export const N_TAIL = 60;
export const coilPts: Pt[] = (() => {
  const x0 = 300, x1 = 1040, yc = 262, r = 13, a = 30, T = (x1 - x0) / r;
  return Array.from({length: N_COIL}, (_, i) => {
    const t = (T * i) / (N_COIL - 1);
    const wob = Math.sin(t * 0.7) * 6 + Math.sin(t * 1.9) * 3;
    return [x0 + r * t - a * Math.sin(t), yc - a * Math.cos(t) * 0.9 + wob] as Pt;
  });
})();
export const COIL_END = coilPts[N_COIL - 1];

// Hand positions (hero coords)
export const FIST_REACH: Pt = [1094, 456];
export const FIST_PULL: Pt = [1112, 534];

export const tailCollapsed: Pt[] = Array.from({length: N_TAIL}, () => COIL_END);
export const tailGrab: Pt[] = cubicPts(COIL_END, [1072, 300], [1092, 380], FIST_REACH, N_TAIL);

const NT = N_COIL + N_TAIL;
export const taut: Pt[] = linePts([300, 262], FIST_PULL, NT);
export const releaseCurve: Pt[] = cubicPts([793, 340], [900, 326], [1030, 410], FIST_PULL, NT);
export const signature: Pt[] = cubicPts([793, 340.4], [906, 308.4], [1051, 334.4], [1147, 410.4], NT);
