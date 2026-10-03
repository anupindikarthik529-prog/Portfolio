// Motion primitives in the spirit of Magic UI / 21st.dev components,
// written for this page: blur-fade reveals, number tickers, marquee,
// shimmer button, cursor spotlight, 3D tilt and scroll-linked text reveal.
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { useEffect, useRef, type ReactNode, type MouseEvent } from 'react'

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

/** Fades content in from a blur + small rise the first time it enters the viewport. */
export function BlurFade({
  children,
  delay = 0,
  y = 16,
  className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.25, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Splits a line into words that blur-fade in one after another. */
export function WordsReveal({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: '0.35em', filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {w + (i < text.split(' ').length - 1 ? ' ' : '')}
        </motion.span>
      ))}
    </span>
  )
}

/** Counts up from 0 to `value` when scrolled into view. */
export function NumberTicker({ value, decimals = 0, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const format = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce) { el.textContent = format(value); return }
    if (!inView) { el.textContent = format(0); return }
    // Write straight to the DOM and always land on the exact value, even if a run is interrupted.
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = format(v) },
      onComplete: () => { el.textContent = format(value) },
    })
    return () => { controls.stop(); el.textContent = format(value) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce, decimals])
  return <span ref={ref} className={cx('tabular-nums', className)}>{format(0)}</span>
}

/** Infinite horizontal scroller with faded edges; pauses on hover. */
export function Marquee({ children, duration = 40 }: { children: ReactNode; duration?: number }) {
  return (
    <div
      className="group relative flex overflow-hidden [--gap:3.5rem] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      style={{ ['--duration' as string]: `${duration}s` }}
    >
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className="flex shrink-0 animate-marquee items-center gap-[var(--gap)] pr-[var(--gap)] group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  )
}

/** Dark pill button with a light sweep passing across it. */
export function ShimmerButton({ children, href, className }: { children: ReactNode; href: string; className?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cx(
        'relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(18,18,24,0.6)]',
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  )
}

/** Card whose border and surface light up under the cursor. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(47,107,255,0.10), transparent 70%)`
  const ring = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(47,107,255,0.55), transparent 70%)`
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(-400); y.set(-400) }}
      className={cx('group relative rounded-[20px] bg-line p-px', className)}
    >
      <motion.div className="pointer-events-none absolute inset-0 rounded-[20px]" style={{ background: ring }} />
      <div className="relative h-full overflow-hidden rounded-[19px] bg-white">
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: bg }} />
        {children}
      </div>
    </div>
  )
}

/** Gentle 3D tilt toward the cursor. */
export function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
        }}
        onMouseLeave={() => { px.set(0.5); py.set(0.5) }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

function RevealWord({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.22, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  )
}

/** Paragraph whose words light up one by one as the section scrolls past. */
export function ScrollTextReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <RevealWord key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  )
}

/** Faint dot grid, masked to fade out toward the edges. */
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cx(
        'pointer-events-none absolute inset-0 [background-image:radial-gradient(#121218_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]',
        className,
      )}
    />
  )
}
