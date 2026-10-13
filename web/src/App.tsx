import React from 'react'
import { useAnimations } from './lib/animate'

const Home = React.lazy(() => import('./pages/gen/Home'))
const About = React.lazy(() => import('./pages/gen/About'))
const Adidas = React.lazy(() => import('./pages/gen/Adidas'))
const Indycar = React.lazy(() => import('./pages/gen/Indycar'))
const Ai = React.lazy(() => import('./pages/gen/Ai'))
const Vybe = React.lazy(() => import('./pages/gen/Vybe'))

type Route = { page: string; scroll?: string }
const ROUTES: Record<string, { C: React.ComponentType; title: string }> = {
  home: { C: Home, title: 'Karthik Anupindi · UX/UI designer' },
  about: { C: About, title: 'About · Karthik Anupindi' },
  adidas: { C: Adidas, title: 'Sales dashboard challenge · Karthik Anupindi' },
  indycar: { C: Indycar, title: 'NTT INDYCAR · Karthik Anupindi' },
  'ai-agent': { C: Ai, title: 'AI agent workflow · Karthik Anupindi' },
  vybe: { C: Vybe, title: 'VYBE · Karthik Anupindi' },
}

function parse(hash: string): Route {
  const h = hash.replace(/^#\/?/, '')
  if (h === 'work') return { page: 'home', scroll: 'work' }
  if (h === 'about') return { page: 'about' }
  const m = h.match(/^work\/([\w-]+)/)
  if (m && ROUTES[m[1]]) return { page: m[1] }
  return { page: 'home' }
}

/** Fit the 1440-wide Figma layout to the window. */
function useZoom() {
  const get = () => Math.min(1.4, Math.max(0.2, window.innerWidth / 1440))
  const [z, setZ] = React.useState(get)
  React.useEffect(() => {
    const on = () => setZ(get())
    addEventListener('resize', on)
    return () => removeEventListener('resize', on)
  }, [])
  return z
}

function useViewportHeight() {
  const [h, setH] = React.useState(() => window.innerHeight)
  React.useEffect(() => {
    const on = () => setH(window.innerHeight)
    addEventListener('resize', on)
    return () => removeEventListener('resize', on)
  }, [])
  return h
}

/** Paper wash with a brick pen stroke that sweeps across between pages. */
function PenWipe({ phase }: { phase: 'idle' | 'in' | 'out' }) {
  return (
    <div className={`pen-wipe ${phase}`} aria-hidden="true">
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path
          pathLength={1}
          d="M-40 230C90 180 160 270 300 214C420 166 470 268 610 222C760 172 820 262 960 210C1080 166 1150 262 1290 206C1360 180 1420 214 1480 196"
          fill="none"
          stroke="#A64B3C"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function Page({ route }: { route: Route }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { C } = ROUTES[route.page]
  return (
    <div ref={ref}>
      <React.Suspense fallback={<div className="h-screen" />}>
        <Mounted root={ref} k={route.page} scroll={route.scroll}>
          <C />
        </Mounted>
      </React.Suspense>
    </div>
  )
}

function Mounted({ root, k, scroll, children }: { root: React.RefObject<HTMLDivElement | null>; k: string; scroll?: string; children: React.ReactNode }) {
  useAnimations(root, k)
  React.useLayoutEffect(() => {
    if (scroll) document.getElementById(scroll)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [k, scroll])
  return <>{children}</>
}

export default function App() {
  const zoom = useZoom()
  const vh = useViewportHeight()
  const [route, setRoute] = React.useState<Route>(() => parse(location.hash))
  const [phase, setPhase] = React.useState<'idle' | 'in' | 'out'>('idle')

  const current = React.useRef(route)
  React.useEffect(() => {
    current.current = route
  }, [route])
  React.useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = []
    const onHash = () => {
      const next = parse(location.hash)
      timers.forEach(clearTimeout)
      timers = []
      if (current.current.page === next.page) {
        if (next.scroll) document.getElementById(next.scroll)?.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setRoute(next)
      setPhase('in')
      timers.push(setTimeout(() => { setRoute(next); setPhase('out') }, 420))
      timers.push(setTimeout(() => setPhase('idle'), 1100))
    }
    addEventListener('hashchange', onHash)
    return () => removeEventListener('hashchange', onHash)
  }, [])

  React.useEffect(() => {
    document.title = ROUTES[route.page].title
  }, [route.page])

  return (
    <>
      <main className="stage" style={{ zoom, ['--vh-stage' as string]: `${vh / 100 / zoom}px` }}>
        <Page key={route.page} route={route} />
      </main>
      <PenWipe phase={phase} />
    </>
  )
}
