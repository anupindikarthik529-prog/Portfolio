import React from 'react'

type Item = { quote: string; name: string; role: string }
// Long quotes stay up longer: about 130 ms a word, never under 6 s.
const dwell = (q: string) => Math.max(6000, q.split(/\s+/).length * 130)

/** One testimonial at a time. A brick pen stroke draws under the current one as its timer;
 *  when it finishes the next quote rises in. Hover or focus pauses; reduced motion never auto-plays. */
export function Testimonials({ label, items }: { label: string; items: Item[] }) {
  const [i, setI] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const reduced = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const n = items.length
  const go = (k: number) => setI(((k % n) + n) % n)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = !reduced && !paused && visible
  return (
    <div
      ref={ref}
      className="absolute inset-0 testi"
      role="region"
      aria-roledescription="carousel"
      aria-label="What colleagues say"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p className="absolute left-[80px] top-[96px] font-['Inter'] font-medium text-[12px] tracking-[1.68px] text-[#6d6a63]" data-a="rise">
        {label}
      </p>

      <div className="absolute left-[80px] top-[150px] w-[940px] grid" aria-live={running ? 'off' : 'polite'}>
        {items.map((t, k) => (
          <figure key={t.name} className={`testi-slide ${k === i ? 'on' : ''}`} aria-hidden={k !== i} style={{ gridArea: '1 / 1' }}>
            <blockquote className="font-['Newsreader_Variable'] italic text-[28px] leading-[40px] text-[#20201e] [text-wrap:pretty]">{t.quote}</blockquote>
            <figcaption className="mt-[28px]">
              <span className="block font-['Inter'] font-medium text-[15px] text-[#20201e]">{t.name}</span>
              <span className="block mt-[4px] font-['Inter'] text-[13px] text-[#6d6a63]">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="absolute left-[1120px] top-[150px] w-[240px]">
        <p className="font-['Newsreader_Variable'] font-light text-[22px] text-[#6d6a63] tabular-nums">
          <span className="text-[#20201e]">{String(i + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
        </p>
        <div className="mt-[18px] flex gap-[10px]">
          <button type="button" className="testi-btn" aria-label="Previous testimonial" onClick={() => go(i - 1)}>
            <svg viewBox="0 0 28 14" aria-hidden="true"><path d="M26 7.4C19 6.6 11 7.6 3 7M8 1.6L2.4 7.1L8.2 12.4" /></svg>
          </button>
          <button type="button" className="testi-btn" aria-label="Next testimonial" onClick={() => go(i + 1)}>
            <svg viewBox="0 0 28 14" aria-hidden="true"><path d="M2 6.6C9 7.4 17 6.4 25 7M20 1.6L25.6 7.1L19.8 12.4" /></svg>
          </button>
        </div>
        <div className="mt-[28px] flex gap-[8px]" aria-hidden="true">
          {items.map((t, k) => (
            <button key={t.name} type="button" tabIndex={-1} className="testi-dot" onClick={() => go(k)} aria-label={`Show ${t.name}`}>
              <svg viewBox="0 0 64 6" preserveAspectRatio="none">
                <path className="base" d="M1 3.4C14 2.6 26 3.8 40 3.1C49 2.7 56 3.3 63 2.9" />
                {k < i && <path className="done" pathLength={1} d="M1 3.4C14 2.6 26 3.8 40 3.1C49 2.7 56 3.3 63 2.9" />}
                {k === i && (
                  <path
                    key={i}
                    className={`timer ${running ? '' : 'hold'} ${reduced ? 'still' : ''}`}
                    pathLength={1}
                    style={{ animationDuration: `${dwell(items[i].quote)}ms` }}
                    onAnimationEnd={() => go(i + 1)}
                    d="M1 3.4C14 2.6 26 3.8 40 3.1C49 2.7 56 3.3 63 2.9"
                  />
                )}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
