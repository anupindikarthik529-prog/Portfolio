import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import logo from './assets/logo.webp'
import photo from './assets/photo.webp'
import { EMAIL, LINKEDIN, RESUME, principles, projects, results, teams } from './data'
import {
  BlurFade,
  DotPattern,
  Marquee,
  NumberTicker,
  ScrollTextReveal,
  ShimmerButton,
  SpotlightCard,
  Tilt,
  WordsReveal,
} from './components/fx'

const Arrow = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={`size-4 ${className}`} aria-hidden>
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Kicker({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
      {children}
    </span>
  )
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <BlurFade className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="font-serif text-[34px] leading-[1.15] font-semibold tracking-[-0.01em] text-balance sm:text-[44px]">{title}</h2>
      {desc && <p className="text-lg leading-relaxed text-pretty text-slate">{desc}</p>}
    </BlurFade>
  )
}

function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[calc(1rem+env(safe-area-inset-top,0px))]">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? 'max-w-3xl border-line/80 bg-white/75 shadow-[0_8px_30px_-12px_rgba(18,18,24,0.18)] backdrop-blur-xl'
            : 'max-w-6xl border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1 text-[15px] font-semibold">
          <img src={logo} alt="" className="size-7 rounded-lg" />
          <span className="hidden sm:inline">Karthik Anupindi</span>
        </a>
        <div className="flex items-center gap-1 text-[15px] text-slate">
          {[['Work', '#work'], ['About', '#about'], ['Resume', RESUME]].map(([l, h]) => (
            <a key={l} href={h} className="hidden rounded-full px-3.5 py-2 transition-colors hover:bg-chip hover:text-ink sm:block">
              {l}
            </a>
          ))}
          <a href="#contact" className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            Let’s talk <Arrow />
          </a>
        </div>
      </motion.nav>
    </header>
  )
}

function Hero() {
  const stats = [
    { n: 7, s: '+', l: 'Years in UX' },
    { n: 50, s: 'K+', l: 'Users reached' },
    { n: 4, s: '', l: 'Enterprise platforms' },
  ]
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-28 pb-16 sm:pt-32">
      <DotPattern />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.16),transparent)] blur-2xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <BlurFade>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pr-4 pl-3 text-sm font-medium backdrop-blur">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to Contract (C2C)
            </span>
          </BlurFade>
          <h1 className="mt-6 font-serif text-[52px] leading-[1.02] font-medium tracking-[-0.02em] sm:text-[76px]">
            <WordsReveal text="Enterprise UX," delay={0.1} />
            <br />
            <WordsReveal text="made clear." delay={0.35} className="text-muted" />
          </h1>
          <BlurFade delay={0.55}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate">
              UX/UI designer with 7+ years in regulated, high-stakes platforms across healthcare, logistics and financial
              services. I make dense workflows simple and hand off developer-ready specs.
            </p>
          </BlurFade>
          <BlurFade delay={0.7} className="mt-8 flex flex-wrap items-center gap-3">
            <ShimmerButton href="#work">
              View selected work <Arrow />
            </ShimmerButton>
            <a
              href={RESUME}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:border-ink/20"
            >
              Download resume
            </a>
          </BlurFade>
          <BlurFade delay={0.85} className="mt-12 flex gap-10 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl font-medium">
                  <NumberTicker value={s.n} />
                  {s.s}
                </div>
                <div className="mt-1 text-sm text-muted">{s.l}</div>
              </div>
            ))}
          </BlurFade>
        </div>

        <BlurFade delay={0.3} y={30}>
          <Tilt className="mx-auto w-full max-w-[460px]">
            <div className="relative rounded-[32px] border border-line bg-white p-3 shadow-[0_30px_80px_-30px_rgba(18,18,24,0.35)]">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[24px] bg-chip">
                <img src={photo} alt="Portrait of Karthik Anupindi" className="size-full object-cover object-top" />
              </div>
              <motion.div
                style={{ transform: 'translateZ(40px)' }}
                className="absolute right-6 bottom-6 left-6 flex items-center justify-between rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-xl"
              >
                <div>
                  <div className="text-xs font-medium text-muted">Currently</div>
                  <div className="text-[15px] font-semibold">UX/UI Designer, ProTrans</div>
                </div>
                <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white">Indianapolis</span>
              </motion.div>
            </div>
          </Tilt>
        </BlurFade>
      </div>

      <BlurFade delay={1} className="relative mx-auto mt-20 max-w-6xl">
        <p className="mb-6 text-center text-sm font-medium text-muted">Teams I’ve shipped with</p>
        <Marquee duration={36}>
          {teams.map((t) => (
            <span key={t} className="font-serif text-2xl font-medium whitespace-nowrap text-ink/45 transition-colors hover:text-ink">
              {t}
            </span>
          ))}
        </Marquee>
      </BlurFade>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="px-4 py-24">
      <SectionHeader
        kicker="Selected work"
        title="Four problems, four decisions"
        desc="Client work, design challenges and research. Each one is labeled, so you know what you’re looking at."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <BlurFade key={p.title} delay={(i % 2) * 0.12}>
            <a href={p.href} className="block h-full">
              <SpotlightCard className="h-full">
                <div className="p-3">
                  <div className="relative aspect-[560/424] overflow-hidden rounded-[14px] bg-chip">
                    <img
                      src={p.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
                      {p.context}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6 px-3 pt-5 pb-3">
                    <div>
                      <h3 className="text-xl leading-snug font-semibold text-balance">{p.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full bg-chip px-2.5 py-1 text-xs text-slate">{t}</span>
                        ))}
                      </div>
                    </div>
                    <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

function Thread() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <BlurFade>
          <Kicker>The common thread</Kicker>
        </BlurFade>
        <ScrollTextReveal
          className="mt-8 font-serif text-[28px] leading-[1.35] font-medium tracking-[-0.01em] sm:text-[40px]"
          text="An enterprise sales dashboard. An AI agent workflow. A motorsport fan app with a real client on the other side. A teen wellbeing app from grad school. Different origins, same pattern: ambiguous problems, real constraints, and a deadline that wasn’t moving. I turn a messy, high-stakes situation into a shippable decision."
        />
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="px-4 py-24">
      <SectionHeader kicker="Results" title="Outcomes from shipped work" desc="Measured on live products for real teams." />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r, i) => (
          <BlurFade key={r.org} delay={i * 0.08} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex h-full flex-col rounded-[20px] border border-line bg-white p-7"
            >
              <div className="font-serif text-[56px] leading-none font-medium tracking-[-0.02em]">
                {r.prefix}
                <NumberTicker value={r.value} decimals={r.decimals ?? 0} />
                {r.suffix}
              </div>
              <div className="mt-3 text-lg font-semibold">{r.label}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{r.note}</p>
              <div className="mt-auto pt-6 text-sm font-medium text-muted">{r.org}</div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

function HowIDesign() {
  return (
    <section className="px-4 py-24">
      <SectionHeader kicker="How I design" title="Four principles behind every decision" />
      <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <BlurFade key={p} delay={i * 0.08} className="h-full">
            <div className="group relative flex h-full min-h-44 flex-col justify-between overflow-hidden bg-white p-7">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full" />
              <span className="relative font-serif text-lg text-muted transition-colors duration-500 group-hover:text-white/60">
                0{i + 1}
              </span>
              <span className="relative font-serif text-3xl font-medium transition-colors duration-500 group-hover:text-white">{p}</span>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard can be refused; select the visible address so it can be copied by hand.
      const el = document.getElementById('contact-email')
      const sel = window.getSelection()
      if (el && sel) { const r = document.createRange(); r.selectNodeContents(el); sel.removeAllRanges(); sel.addRange(r) }
    }
  }
  return (
    <footer id="contact" className="px-4 pt-16 pb-6">
      <BlurFade className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-night px-6 py-20 text-center text-white sm:px-16">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.35),transparent)] blur-2xl"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80">
            <span className="size-2 rounded-full bg-emerald-400" /> Available for contract roles
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-[40px] leading-[1.1] font-medium text-balance sm:text-[60px]">
            Open to your next contract
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Let’s talk <Arrow />
            </a>
            <button
              onClick={copy}
              className="relative inline-flex min-w-56 items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'done' : 'idle'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {copied ? 'Email copied ✓' : 'Copy email address'}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
          <p id="contact-email" className="mt-6 text-[15px] text-white/60 select-all">{EMAIL}</p>
        </div>
      </BlurFade>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 px-2 text-sm text-muted sm:flex-row">
        <span>© 2026 Karthik Anupindi</span>
        <div className="flex gap-6">
          <a href={LINKEDIN} className="hover:text-ink">LinkedIn</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-ink">Email</a>
          <a href={RESUME} className="hover:text-ink">Resume</a>
        </div>
      </div>
      <div
        aria-hidden
        className="mx-auto mt-6 max-w-6xl overflow-hidden text-center font-serif text-[18vw] leading-[0.8] font-semibold tracking-[-0.04em] select-none lg:text-[220px]"
      >
        <motion.span
          className="block bg-gradient-to-b from-ink/15 to-transparent bg-clip-text text-transparent"
          initial={{ y: '40%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          ANUPINDI
        </motion.span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Thread />
        <Results />
        <HowIDesign />
      </main>
      <Contact />
    </>
  )
}
