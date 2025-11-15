import { useEffect, useRef } from 'react'

export default function AnimatedOutline({ children, color = '#F5F5F5', duration = 4200, className = '' }) {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.querySelector('rect')
    if (!rect) return

    const length = rect.getTotalLength()
    rect.style.strokeDasharray = `${length}`
    rect.style.strokeDashoffset = `${length}`

    let raf
    const start = performance.now()

    const animate = (t) => {
      const elapsed = (t - start) % duration
      const progress = elapsed / duration
      rect.style.strokeDashoffset = `${length * (1 - progress)}`
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [duration])

  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
      <svg
        ref={svgRef}
        className="absolute inset-0 z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke={color} strokeWidth="1.5" opacity="0.85" />
      </svg>
    </div>
  )
}
