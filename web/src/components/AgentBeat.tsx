// "Agents propose, people decide": five stage banners on a rising conveyor, redrawn so every
// label fits its box. Positions match the Figma beat (156:1841); the person, arrow and ground stay.
const STAGES = ['Idea', 'Requirements', 'Spec', 'Prototype', 'Delivery']
const W = 176
const H = 50

// small seeded jitter so the brush edges look hand-made but never change between renders
function rand(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function brush(cx: number, cy: number, seed: number) {
  const r = rand(seed)
  const x0 = cx - W / 2, x1 = cx + W / 2, y0 = cy - H / 2, y1 = cy + H / 2
  const pts: string[] = []
  for (let x = x0; x <= x1; x += 8) pts.push(`${x.toFixed(1)} ${(y0 + r() * 4 - 1).toFixed(1)}`)
  for (let y = y0; y <= y1; y += 7) pts.push(`${(x1 + (r() - 0.3) * 7).toFixed(1)} ${y.toFixed(1)}`)
  for (let x = x1; x >= x0; x -= 8) pts.push(`${x.toFixed(1)} ${(y1 - r() * 4 + 1).toFixed(1)}`)
  for (let y = y1; y >= y0; y -= 7) pts.push(`${(x0 - (r() - 0.3) * 7).toFixed(1)} ${y.toFixed(1)}`)
  return 'M' + pts.join(' L') + ' Z'
}

function speed(cx: number, cy: number, seed: number) {
  const r = rand(seed + 99)
  return [-16, -6, 5, 15].map((dy) => {
    const len = 26 + r() * 30
    const x1 = cx - W / 2 - 2
    return `M${(x1 - len).toFixed(1)} ${(cy + dy).toFixed(1)} L${x1.toFixed(1)} ${(cy + dy + (r() - 0.5)).toFixed(1)}`
  })
}

export function AgentBeat() {
  const boxes = STAGES.map((label, k) => ({ label, cx: 215 + k * 200, cy: 275 - k * 12 }))
  return (
    <div className="absolute inset-0 agent-beat" data-a="beat" aria-label="Five stages: Idea, Requirements, Spec, Prototype and Delivery. Agents propose each one; a person decides." role="img">
      <svg className="absolute inset-0" width="1440" height="520" viewBox="0 0 1440 520" aria-hidden="true">
        {boxes.slice(0, -1).map((b, k) => {
          const n = boxes[k + 1]
          const x1 = b.cx + W / 2 - 4, x2 = n.cx - W / 2 + 4
          return (
            <path
              key={'l' + k}
              className="beat-link"
              style={{ ['--i' as string]: k }}
              pathLength={1}
              d={`M${x1} ${b.cy + 2}C${x1 + 10} ${b.cy - 1} ${x2 - 12} ${n.cy + 4} ${x2} ${n.cy + 1}`}
            />
          )
        })}
        {boxes.map((b, k) => (
          <g key={b.label} className="beat-box" style={{ ['--i' as string]: k }}>
            {speed(b.cx, b.cy, k + 3).map((d, j) => (
              <path key={j} d={d} className="beat-speed" />
            ))}
            <path d={brush(b.cx, b.cy, k + 7)} fill="#20201E" />
            <text x={b.cx} y={b.cy + 6} textAnchor="middle" className="beat-label">
              {b.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
