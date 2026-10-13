// Scroll-triggered, hand-drawn animations for the generated pages.
// Elements carry data-a="…" (written by tools/gen.py):
//   rise   text fades up            words  headline rises word by word
//   write  Caveat note writes on     draw   pen SVG strokes draw on (pathLength = 1)
//   wipe   dashed / filled pen wipes in left → right
//   line   rule draws left → right  under  link underline draws on, redraws on hover
//   img    image settles in         count  number counts up to data-to
// Phones (data-phone) auto-scroll once at ~60 px/s when 40% visible; hover pauses, input cancels.
import React from 'react'

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

function splitWords(el: HTMLElement) {
  if (el.dataset.split) return
  el.dataset.split = '1'
  let i = 0
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/)
        const frag = document.createDocumentFragment()
        for (const p of parts) {
          if (!p) continue
          if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p))
          else {
            const s = document.createElement('span')
            s.className = 'w'
            s.style.setProperty('--i', String(i++))
            s.textContent = p
            frag.appendChild(s)
          }
        }
        child.replaceWith(frag)
      } else if (child.nodeType === Node.ELEMENT_NODE) walk(child)
    }
  }
  walk(el)
}

function countUp(el: HTMLElement) {
  const to = el.dataset.to || el.textContent || ''
  const m = to.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!m || reduced()) return
  const [, pre, num, post] = m
  const target = parseFloat(num)
  const dec = (num.split('.')[1] || '').length
  const t0 = performance.now()
  const dur = 1100
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / dur)
    const e = 1 - Math.pow(1 - p, 3)
    el.textContent = pre + (target * e).toFixed(dec) + post
    if (p < 1) requestAnimationFrame(tick)
    else el.textContent = to
  }
  requestAnimationFrame(tick)
}

function autoScroll(el: HTMLElement) {
  if (el.dataset.scrolled || reduced()) return
  el.dataset.scrolled = '1'
  const max = el.scrollHeight - el.clientHeight
  if (max < 8) return
  let hovered = false
  let stopped = false
  let last = performance.now()
  let pos = el.scrollTop
  const stop = () => { stopped = true }
  el.addEventListener('mouseenter', () => { hovered = true })
  el.addEventListener('mouseleave', () => { hovered = false; last = performance.now() })
  for (const ev of ['wheel', 'touchstart', 'keydown', 'pointerdown']) el.addEventListener(ev, stop, { once: true, passive: true })
  const tick = (now: number) => {
    if (stopped) return
    const dt = (now - last) / 1000
    last = now
    if (!hovered) {
      pos = Math.min(max, pos + 60 * dt)
      el.scrollTop = pos
    }
    if (pos < max) requestAnimationFrame(tick)
  }
  setTimeout(() => { last = performance.now(); requestAnimationFrame(tick) }, 500)
}

export function useAnimations(root: React.RefObject<HTMLElement | null>, key: string) {
  React.useEffect(() => {
    const el = root.current
    if (!el) return
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-a]'))
    items.filter((x) => x.dataset.a === 'words').forEach(splitWords)

    if (reduced()) {
      items.forEach((x) => x.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const t = e.target as HTMLElement
          t.classList.add('in')
          if (t.dataset.a === 'count') countUp(t)
          io.unobserve(t)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.12 },
    )
    items.forEach((x) => io.observe(x))

    const phones = Array.from(el.querySelectorAll<HTMLElement>('[data-phone]'))
    const pio = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { autoScroll(e.target as HTMLElement); pio.unobserve(e.target) }
      },
      { threshold: 0.4 },
    )
    phones.forEach((p) => pio.observe(p))

    // home rows: hovering the text draws the frame around its preview too
    const rows = Array.from(el.querySelectorAll<HTMLElement>('[data-row]'))
    const on = (r: string, v: boolean) => rows.filter((x) => x.dataset.row === r).forEach((x) => x.classList.toggle('hot', v))
    const handlers = rows.map((x) => {
      const enter = () => on(x.dataset.row!, true)
      const leave = () => on(x.dataset.row!, false)
      x.addEventListener('mouseenter', enter)
      x.addEventListener('mouseleave', leave)
      x.addEventListener('focusin', enter)
      x.addEventListener('focusout', leave)
      return () => {
        x.removeEventListener('mouseenter', enter)
        x.removeEventListener('mouseleave', leave)
        x.removeEventListener('focusin', enter)
        x.removeEventListener('focusout', leave)
      }
    })
    return () => {
      io.disconnect()
      pio.disconnect()
      handlers.forEach((h) => h())
    }
  }, [root, key])
}
