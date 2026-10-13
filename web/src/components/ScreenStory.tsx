import React from 'react'
import { shot } from './kit'

type Item = { num: string; title: string; desc: string; src: string; w: number; h: number; alt: string }

/** Final screens, one at a time. The list of screens stays on the left; as the page scrolls the
 *  big screen on the right steps through them, then the page moves on to the next section. */
export function ScreenStory({ items }: { items: Item[] }) {
  const outer = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const n = items.length

  React.useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = outer.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const travel = r.height - innerHeight
      const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0
      setProgress(p)
      setActive(Math.min(n - 1, Math.floor(p * n * 0.999)))
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', on, { passive: true })
    addEventListener('resize', on)
    return () => {
      removeEventListener('scroll', on)
      removeEventListener('resize', on)
      cancelAnimationFrame(raf)
    }
  }, [n])

  const jump = (k: number) => {
    const el = outer.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const travel = r.height - innerHeight
    const y = scrollY + r.top + travel * ((k + 0.5) / n)
    scrollTo({ top: y, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  // Each screen gets about 80% of a viewport of scrolling.
  return (
    <div ref={outer} className="story relative w-[1440px]" style={{ height: `calc(${n * 80 + 100} * var(--vh-stage))` }}>
      <div className="story-pin sticky top-0 w-[1440px] flex items-center" style={{ height: 'calc(100 * var(--vh-stage))' }}>
        <ol className="story-list absolute left-[80px] w-[320px] flex flex-col gap-[6px]">
          <svg className="story-rail" viewBox="0 0 6 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M3 0C2.4 22 3.6 48 2.8 70C2.5 84 3.3 93 3 100" className="base" />
            <path d="M3 0C2.4 22 3.6 48 2.8 70C2.5 84 3.3 93 3 100" className="fill" pathLength={1} style={{ strokeDashoffset: 1 - progress }} />
          </svg>
          {items.map((it, k) => (
            <li key={it.src} className={`story-item ${k === active ? 'on' : ''} ${k < active ? 'past' : ''}`}>
              <button type="button" onClick={() => jump(k)} aria-current={k === active ? 'step' : undefined}>
                <span className="num">{it.num}</span>
                <span className="title">
                  {it.title}
                  <svg className="tick" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
                    <path pathLength={1} d="M1 3.6C12 3.1 24 3.9 36 3.4C50 2.8 63 3.7 76 3.2C86 2.9 93 3.1 99 2.8" />
                  </svg>
                </span>
              </button>
              <p className="desc">{it.desc}</p>
            </li>
          ))}
        </ol>

        <div className="story-stage absolute left-[440px] w-[920px]">
          {items.map((it, k) => (
            <figure key={it.src} className={`story-shot ${k === active ? 'on' : k < active ? 'past' : ''}`} aria-hidden={k !== active}>
              <img
                src={shot(it.src)}
                alt={it.alt}
                loading={k < 2 ? 'eager' : 'lazy'}
                decoding="async"
                style={{ aspectRatio: `${it.w} / ${it.h}` }}
              />
            </figure>
          ))}
          <p className={`story-hint ${active < n - 1 ? '' : 'gone'}`} aria-hidden="true">scroll for the next screen ↓</p>
        </div>
      </div>
    </div>
  )
}
