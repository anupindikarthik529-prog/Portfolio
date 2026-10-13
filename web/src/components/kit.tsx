import React from 'react'
export { Untangle } from './Untangle'
export { Testimonials } from './Testimonials'
export { ScreenStory } from './ScreenStory'
export { AgentBeat } from './AgentBeat'

export const RESUME = 'https://drive.google.com/file/u/1/d/1Lm0M9iSy5uVdAX4AAY7Vsvn622sBeMZx/view?usp=drive_link'
export const LINKEDIN = 'https://www.linkedin.com/in/karthikanupindi/'
export const EMAIL = 'karthikanupindi98@gmail.com'
export const MAILTO =
  'mailto:karthikanupindi98@gmail.com?subject=Hello%20Karthik%2C%20saw%20your%20portfolio&body=Hi%20Karthik%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20talk%20about%20a%20UX%20role%20%2F%20project%3A%0A%0A%5BA%20line%20about%20the%20role%2C%20team%20or%20problem%5D%0A%0ABest%2C%0A%5BYour%20name%5D'

export const shot = (id: string) => `${import.meta.env.BASE_URL}shots/${id}.webp`

/** Smooth-scroll to the Selected work section (home), or go home and then scroll. */
export function scrollToWork(e?: React.MouseEvent) {
  const el = document.getElementById('work')
  if (el) {
    e?.preventDefault()
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    if (location.hash !== '#/work') history.replaceState(null, '', '#/work')
  }
}

/** A hand-drawn underline. Draws left → right on hover / focus of its parent link (350 ms), retracts in 200 ms. */
export function PenUnderline({ color = '#A64B3C', className = '' }: { color?: string; className?: string }) {
  return (
    <svg className={`pen-under ${className}`} viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
      <path
        pathLength={1}
        d="M1 3.6C9 3.1 18 3.9 27 3.4C38 2.8 47 3.7 58 3.3C69 2.9 79 3.5 89 3.0C93 2.9 96 3.1 99 2.8"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function NavLink({ href, children, onClick, newTab }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent) => void; newTab?: boolean }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="nav-link relative block font-['Inter'] text-[15px] leading-[normal] text-[#6d6a63] hover:text-[#20201e] focus-visible:text-[#20201e] transition-colors duration-200 outline-none"
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      <PenUnderline />
    </a>
  )
}

/** The site nav. It stays fixed at the top: transparent and full height over the hero as
 *  designed, then a compact paper bar with a hairline once the page scrolls. */
export function Nav() {
  const [compact, setCompact] = React.useState(false)
  React.useEffect(() => {
    const on = () => setCompact(window.scrollY > 40)
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  const work = (e: React.MouseEvent) => {
    if (document.getElementById('work')) scrollToWork(e)
  }
  return (
    <>
      <div className="absolute h-[96px] left-0 top-0 w-[1440px]" aria-hidden="true" />
      <nav aria-label="Main" className={`site-nav ${compact ? 'compact' : ''}`}>
        <a href="#/" className="nav-name font-['Newsreader_Variable'] font-medium text-[20px] leading-[normal] text-[#20201e]">
          Karthik Anupindi
        </a>
        <div className="nav-links flex gap-[40px] items-start">
          <NavLink href="#/work" onClick={work}>Work</NavLink>
          <NavLink href="#/about">About</NavLink>
          <NavLink href={RESUME} newTab>Resume</NavLink>
          <NavLink href={MAILTO}>Contact</NavLink>
        </div>
      </nav>
    </>
  )
}

/** Back to top: appears after the first screen, bottom right, on every page. */
export function ScrollTop() {
  const [show, setShow] = React.useState(false)
  const [lift, setLift] = React.useState(false)
  React.useEffect(() => {
    const on = () => {
      setShow(window.scrollY > window.innerHeight * 0.9)
      // near the end, rise above the footer links so it never covers them
      setLift(window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 140)
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  const top = () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    ;(document.querySelector('.nav-name') as HTMLElement | null)?.focus({ preventScroll: true })
  }
  return (
    <button type="button" className={`to-top ${show ? 'on' : ''} ${lift ? 'lift' : ''}`} onClick={top} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <path className="ring" pathLength={1} d="M28 4.5C41 4.2 51.6 14.6 51.5 28.2C51.4 41.4 41.2 51.8 27.6 51.6C14.4 51.4 4.4 40.9 4.6 27.7C4.8 15.2 14.6 5.2 26.8 4.2" />
        <path className="arrow" d="M28.2 38.6C28.6 32 27.6 25 28 17.6M21.4 23.8L28 17.2L34.6 23.6" />
      </svg>
    </button>
  )
}

/** Hand-drawn frame that draws around a home-page project preview on hover. */
export function Frame() {
  return (
    <svg className="row-frame" viewBox="0 0 420 322" preserveAspectRatio="none" aria-hidden="true">
      <path
        pathLength={1}
        d="M6 9C80 7 170 10 252 8C318 6 372 9 413 7M410 3C412 70 409 150 411 222C412 262 410 296 412 318M416 313C330 315 240 312 160 314C100 315 48 313 8 315M11 319C9 250 12 170 10 102C9 62 11 30 9 4"
        fill="none"
        stroke="#A64B3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FooterLinks() {
  return (
    <>
      <a className="foot-link" href={MAILTO}>{EMAIL}</a>
      {'   ·   '}
      <a className="foot-link" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
      {'   ·   '}
      <a className="foot-link" href={RESUME} target="_blank" rel="noreferrer">Resume</a>
    </>
  )
}
