// Small stand-ins for Remotion's interpolate / Easing / spring, so the hero runs on a rAF clock.
export const linear = (t: number) => t
export const inOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

/** CSS-style cubic-bezier easing. */
export function bezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const sx = (t: number) => ((ax * t + bx) * t + cx) * t
  const sy = (t: number) => ((ay * t + by) * t + cy) * t
  const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx
  return (x: number) => {
    if (x <= 0) return 0
    if (x >= 1) return 1
    let t = x
    for (let i = 0; i < 8; i++) {
      const e = sx(t) - x
      const d = dx(t)
      if (Math.abs(e) < 1e-5 || Math.abs(d) < 1e-6) break
      t -= e / d
    }
    return sy(Math.min(1, Math.max(0, t)))
  }
}

/** Piecewise-linear map of f over the input stops, clamped, with optional easing per segment. */
export function interpolate(f: number, input: readonly number[], output: readonly number[], easing: (t: number) => number = linear) {
  if (f <= input[0]) return output[0]
  const n = input.length - 1
  if (f >= input[n]) return output[n]
  let i = 0
  while (f > input[i + 1]) i++
  const t = easing((f - input[i]) / (input[i + 1] - input[i]))
  return output[i] + (output[i + 1] - output[i]) * t
}

const springCache = new Map<string, number[]>()
/** Damped spring 0 → 1 sampled per frame (same parameters as Remotion's spring()). */
export function spring(frame: number, fps: number, { damping = 10, stiffness = 100, mass = 1 } = {}) {
  if (frame <= 0) return 0
  const key = `${fps}|${damping}|${stiffness}|${mass}`
  let table = springCache.get(key)
  if (!table) {
    table = [0]
    let x = 0, v = 0
    const steps = 20, dt = 1 / fps / steps
    for (let fr = 1; fr <= fps * 6; fr++) {
      for (let s = 0; s < steps; s++) {
        const a = (-stiffness * (x - 1) - damping * v) / mass
        v += a * dt
        x += v * dt
      }
      table.push(x)
    }
    springCache.set(key, table)
  }
  const i = Math.floor(frame)
  if (i >= table.length - 1) return 1
  return table[i] + (table[i + 1] - table[i]) * (frame - i)
}
