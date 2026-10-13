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

export function Nav() {
  const work = (e: React.MouseEvent) => {
    if (document.getElementById('work')) scrollToWork(e)
  }
  return (
    <nav aria-label="Main" className="absolute h-[96px] left-0 top-0 w-[1440px] z-20">
      <a href="#/" className="absolute left-[80px] top-[36px] font-['Newsreader_Variable'] font-medium text-[20px] leading-[normal] text-[#20201e] nav-name">
        Karthik Anupindi
      </a>
      <div className="absolute flex gap-[40px] items-start left-[1045px] top-[38px]">
        <NavLink href="#/work" onClick={work}>Work</NavLink>
        <NavLink href="#/about">About</NavLink>
        <NavLink href={RESUME} newTab>Resume</NavLink>
        <NavLink href={MAILTO}>Contact</NavLink>
      </div>
    </nav>
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
