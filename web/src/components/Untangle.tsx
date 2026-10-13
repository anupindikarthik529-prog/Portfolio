// "The Untangle": the home hero animation, ported from motion/src/Untangle.tsx (Remotion) to a
// requestAnimationFrame clock. Same timeline (frames @ 30 fps) and geometry; the headline is real
// HTML underneath, this SVG only draws on top of it (aria-hidden).
import React from 'react'
import { type Pt, PORTRAIT_ORIGIN, coilPts, N_COIL, tailCollapsed, tailGrab, taut, releaseCurve, signature } from '../lib/untangleGeometry'
import { bezier, interpolate, spring, linear, inOutQuad } from '../lib/tween'

const INK = '#20201E'
const BRICK = '#A64B3C'
const PAPER = '#F3EDE1'

const T = {
  enter: [10, 46],
  tangle: [48, 72],
  armReach: [72, 78],
  grab: [74, 90],
  armPull: [90, 96],
  unravel: [92, 116],
  marks: [98, 112],
  swing: [116, 134],
  circle: [120, 142],
  armOpen: [134, 138],
  release: [136, 152],
  arrow: [148, 154],
  armCross: [144, 156],
  smile: [140, 148],
} as const
const REST = 170
const REPLAY_FROM = T.tangle[0]

const ease = bezier(0.33, 0, 0.2, 1)
const prog = (f: number, [a, b]: readonly [number, number], e: (t: number) => number = ease) => interpolate(f, [a, b], [0, 1], e)
const lerpPts = (A: Pt[], B: Pt[], p: (i: number) => number): Pt[] =>
  A.map((a, i) => {
    const t = p(i)
    return [a[0] + (B[i][0] - a[0]) * t, a[1] + (B[i][1] - a[1]) * t]
  })
const toPath = (pts: Pt[]) => (pts.length < 2 ? '' : 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L'))
const clamp01 = (x: number) => Math.min(1, Math.max(0, x))

const S = { fill: 'none', stroke: INK, strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
const Brick = { ...S, stroke: BRICK }
const Body = () => (
  <>
    <path {...S} d="M97 116 C95 140 100 160 112 172 M185 112 C188 138 182 158 170 172" />
    <path fill={INK} d="M96 118 C92 100 95 82 104 68 C113 54 130 45 150 45 C171 45 186 56 189 74 C191 86 190 100 188 114 C186 103 183 94 179 88 C172 82 164 78 156 77 C142 80 128 86 118 94 C110 100 101 108 96 118 Z" />
    <path fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" d="M117 53 C113 63 111 73 111 85 M122 61 C138 53 158 51 176 59 M124 74 C140 67 158 65 175 71" />
    <path {...S} d="M97 114 C88 111 86 129 98 134" />
    <path {...S} d="M186 112 C195 109 196 128 185 133" />
    <path {...Brick} d="M106 120 C106 110 114 104 122 105 C131 106 137 113 136 122 C135 131 128 136 120 135 C112 134 106 128 106 120" />
    <path {...Brick} d="M146 121 C146 111 153 105 161 105 C170 105 177 112 176 121 C175 130 168 136 160 135 C152 134 146 129 146 121" />
    <path {...Brick} d="M136 118 C139 115 143 115 146 118 M106 117 L97 114 M176 117 L186 113" />
    <path {...S} d="M141 123 C138 135 135 141 139 144 C142 146 146 145 148 142" />
    <path fill={INK} d="M106 146 C104 170 116 196 140 200 C164 198 178 172 176 146 C170 158 162 160 156 158 C150 153 132 153 126 158 C120 160 112 158 106 146 Z" />
    <path {...S} d="M113 192 C125 204 157 204 169 191 M110 215 C126 227 157 227 173 213 M113 192 C111 199 110 207 110 215 M169 191 C171 198 172 206 173 213" />
    <path {...S} d="M110 215 C80 222 54 234 42 257 C33 277 30 306 28 338 L26 440" />
    <path {...S} d="M173 213 C203 220 229 232 241 255 C251 276 254 306 255 338 L256 440" />
    <path {...S} d="M141 231 C140 245 139 256 141 266" />
  </>
)
const ArmsCrossed = () => (
  <>
    <path {...S} d="M246 296 C210 300 170 302 128 300 M84 296 C76 292 70 286 72 280 C74 274 82 274 88 279" />
    <path {...S} d="M36 302 C84 290 146 286 206 288 M40 328 C90 318 148 313 210 314" />
    <path {...S} d="M206 288 C219 288 226 297 222 306 C219 312 214 314 210 314 M212 296 C216 297 218 300 217 303" />
  </>
)
const ArmReach = () => (
  <>
    <path {...S} d="M42 258 C22 236 6 196 4 156 M34 292 C30 250 26 206 26 164" />
    <path {...S} fill={PAPER} d="M2 152 C-4 140 2 126 14 126 C26 126 32 136 30 150 C29 160 22 166 14 165 C8 164 4 159 2 152" />
    <path {...S} d="M8 138 C14 136 20 138 26 142" />
  </>
)
const ArmPull = () => (
  <>
    <path {...S} d="M44 300 C40 270 34 248 30 232 M70 296 C64 270 58 250 56 234" />
    <path {...S} fill={PAPER} d="M26 228 C22 214 30 204 42 204 C54 204 60 214 58 226 C57 236 50 240 42 240 C34 240 28 236 26 228" />
    <path {...S} d="M32 214 C38 212 46 213 52 216" />
  </>
)
const ArmOpen = () => (
  <>
    <path {...S} d="M44 300 C40 270 34 248 30 232 M70 296 C64 270 58 250 56 234" />
    <path {...S} d="M30 232 C24 222 22 212 26 204 M36 230 C32 216 32 206 36 198 M44 230 C42 216 44 206 48 200 M52 232 C52 220 56 212 60 208 M56 234 C60 230 64 228 66 222" />
  </>
)
const Fade = ({ o, children }: { o: number; children: React.ReactNode }) => (o <= 0.001 ? null : <g opacity={o}>{children}</g>)

const CIRCLE =
  'M26.2446 73.5157C23.7898 71.7531 15.3096 66.5691 11.2926 63.1476C7.16408 59.6224 2.92396 56.0973 1.91972 52.5721C0.915483 49.047 3.37029 45.4181 5.26718 41.7893C7.27566 38.1605 7.0525 34.2206 13.6358 30.6954C20.3308 27.2739 31.489 23.7488 45.3251 21.0531C59.1613 18.2537 80.1387 16.6985 96.5413 14.4175C112.944 12.2402 127.115 9.85553 143.74 7.67823C160.366 5.6046 176.992 2.70153 196.296 1.76841C215.488 0.835276 238.697 2.18313 259.228 2.07945C279.647 1.97577 298.84 1.25 318.924 1.25C339.121 1.35368 361.102 1.14632 380.183 2.18313C399.152 3.32362 416.893 5.6046 433.184 7.67823C449.475 9.75185 460.968 12.6549 477.929 14.7285C495.001 16.8022 523.008 17.4242 535.059 20.2236C547.11 22.9193 543.093 27.7923 550.234 31.2138C557.375 34.739 570.988 37.5384 578.018 40.9598C584.936 44.2776 593.974 48.2175 591.966 51.7427C589.957 55.2678 571.546 58.5856 565.967 62.1108C560.499 65.6359 565.967 69.5758 558.937 72.7899C551.796 76.1077 534.836 78.5961 523.231 81.6028C511.738 84.5059 503.481 88.031 489.422 90.6231C475.362 93.1114 457.063 95.185 438.875 96.7402C420.687 98.1918 399.375 98.2955 380.406 99.5396C361.325 100.887 344.253 103.48 324.503 104.413C304.865 105.346 282.883 105.346 262.129 105.138C241.375 105.035 219.393 104.62 199.866 103.376C180.339 102.132 162.486 99.8507 145.079 97.8807C127.784 95.8071 109.485 93.9409 95.7602 91.2452C82.0356 88.6531 73.8901 85.128 62.7319 82.1212C51.5737 79.1145 38.0723 76.4188 29.0342 73.3083C19.996 70.1979 12.9663 66.6727 8.72623 63.2513C4.48611 59.7261 5.04402 56.201 3.81662 52.5721C2.47763 48.9433 1.58498 43.4482 1.25023 41.6856'

function Scene({ f, blink }: { f: number; blink: boolean }) {
  const enterS = spring(f - T.enter[0], 30, { damping: 17, stiffness: 85, mass: 0.9 })
  const enterY = 470 * (1 - enterS)
  const enterTilt = -4 * (1 - enterS)

  const reach = prog(f, T.armReach) * (1 - prog(f, T.armPull))
  const pull = prog(f, T.armPull) * (1 - prog(f, T.armOpen))
  const open = prog(f, T.armOpen) * (1 - prog(f, T.armCross))
  const crossed = Math.max(0, 1 - reach - pull - open)
  const lean = interpolate(f, [T.armPull[0], T.unravel[0] + 8, T.swing[1]], [0, -3.5, 0])

  const focus = prog(f, [T.enter[1] - 4, T.enter[1] + 2]) * (1 - prog(f, T.smile))
  const look = interpolate(f, [T.tangle[0], T.tangle[0] + 6, T.grab[1], T.unravel[1], T.circle[0]], [0, -4, -4, -2, -4])

  let pts: Pt[] = []
  const nTangle = Math.round(prog(f, T.tangle, inOutQuad) * N_COIL)
  if (f < T.grab[0]) {
    pts = coilPts.slice(0, Math.max(0, nTangle))
  } else {
    const g = prog(f, T.grab)
    let s: Pt[] = [...coilPts, ...lerpPts(tailCollapsed, tailGrab, (i) => clamp01(g * 1.3 - (i / tailGrab.length) * 0.3))]
    if (f >= T.unravel[0]) {
      const u = prog(f, T.unravel, linear)
      s = lerpPts(s, taut, (i) => ease(clamp01((u - (0.55 * i) / s.length) / 0.45)))
    }
    if (f >= T.swing[0]) {
      const w = prog(f, T.swing, linear)
      s = lerpPts(s, releaseCurve, (i) => ease(clamp01((w - (0.3 * i) / s.length) / 0.7)))
    }
    if (f >= T.release[0]) {
      const r = prog(f, T.release, bezier(0.3, 0, 0.1, 1))
      s = lerpPts(s, signature, () => r)
    }
    pts = s
  }

  const circleLen = 1550
  const circleDraw = prog(f, T.circle, bezier(0.5, 0, 0.2, 1))
  const arrow = prog(f, T.arrow)
  const marks = interpolate(f, [T.marks[0], T.marks[0] + 3, T.marks[1] - 3, T.marks[1]], [0, 1, 1, 0])
  const [px, py] = PORTRAIT_ORIGIN

  return (
    <>
      <g transform="translate(199 322)">
        <path d={CIRCLE} fill="none" stroke={BRICK} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={circleLen} strokeDashoffset={circleLen * (1 - circleDraw)} opacity={circleDraw > 0 ? 1 : 0} />
      </g>
      <path d={toPath(pts)} fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      <g opacity={arrow}>
        <path d="M1142.7 398.1 L1147 410.4 L1134.1 409" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g opacity={marks} fill="none" stroke={BRICK} strokeWidth={1.8} strokeLinecap="round">
        <path d="M1090 514 C1084 522 1082 532 1084 542" />
        <path d="M1078 506 C1070 518 1068 532 1071 546" />
      </g>
      <g transform={`translate(${px} ${py + enterY}) rotate(${enterTilt + lean} 140 340)`}>
        <Body />
        {blink ? (
          <path {...S} d="M115 121 L127 121 M155 121 L167 121" />
        ) : (
          <>
            <g opacity={1 - focus}><path {...S} d="M116 121 C119 119 123 119 126 121 M156 121 C159 119 163 119 166 121" /></g>
            <g opacity={focus}>
              <circle cx={121 + look} cy={121} r={3.2} fill={INK} />
              <circle cx={161 + look} cy={121} r={3.2} fill={INK} />
            </g>
          </>
        )}
        <g opacity={1 - focus}><path fill="none" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" d="M130 168 C136 173 146 173 152 168" /></g>
        <g opacity={focus}><path fill="none" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" d="M134 169 L148 169" /></g>
        <Fade o={crossed}><ArmsCrossed /></Fade>
        <Fade o={reach}><ArmReach /></Fade>
        <Fade o={pull}><ArmPull /></Fade>
        <Fade o={open}><ArmOpen /></Fade>
      </g>
    </>
  )
}

export function Untangle() {
  const reduced = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const small = typeof innerWidth !== 'undefined' && innerWidth < 700
  const [f, setF] = React.useState(reduced || small ? REST : 0)
  const [blink, setBlink] = React.useState(false)
  const clock = React.useRef<{ start: number; from: number; raf: number; last: number } | null>(null)

  const play = React.useCallback((from: number) => {
    const c = clock.current
    if (c) cancelAnimationFrame(c.raf)
    const state = { start: performance.now(), from, raf: 0, last: performance.now() }
    clock.current = state
    const tick = (now: number) => {
      const fr = state.from + ((now - state.start) / 1000) * 30
      setF(Math.min(REST, fr))
      if (fr < REST) state.raf = requestAnimationFrame(tick)
    }
    state.raf = requestAnimationFrame(tick)
  }, [])

  React.useEffect(() => {
    if (reduced || small) return
    let cancelled = false
    const t = setTimeout(() => {
      document.fonts.ready.then(() => !cancelled && play(4))
    }, 300)
    return () => {
      cancelled = true
      clearTimeout(t)
      if (clock.current) cancelAnimationFrame(clock.current.raf)
    }
  }, [play, reduced, small])

  // idle blink, every ~5–6 s, 120 ms
  React.useEffect(() => {
    if (reduced) return
    let to: ReturnType<typeof setTimeout>
    const loop = () => {
      to = setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 120)
        loop()
      }, 5000 + Math.random() * 1000)
    }
    loop()
    return () => clearTimeout(to)
  }, [reduced])

  const lastReplay = React.useRef(0)
  const onEnter = () => {
    if (reduced || small) return
    const now = performance.now()
    if (f < REST || now - lastReplay.current < 4000) return
    lastReplay.current = now
    play(REPLAY_FROM)
  }

  return (
    <svg className="absolute inset-0 pointer-events-none z-10" width={1440} height={760} viewBox="0 0 1440 760" aria-hidden="true">
      <Scene f={f} blink={blink && f >= REST} />
      <rect x={1060} y={340} width={320} height={420} fill="transparent" style={{ pointerEvents: 'all', cursor: 'default' }} onPointerEnter={onEnter} />
    </svg>
  )
}
