import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function FogLayer({ speed = 0.1, opacity = 0.15, className = '' }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -80 * speed])

  return (
    <motion.div
      style={{ y, opacity }}
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#112426]/40 via-transparent to-[#000000]/60 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_20%_at_50%_10%,rgba(255,255,255,0.04),transparent_60%)]" />
    </motion.div>
  )
}

export default function Atmosphere() {
  const grainRef = useRef(null)

  useEffect(() => {
    let raf
    const el = grainRef.current
    if (!el) return
    const animate = () => {
      el.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Film grain */}
      <div
        ref={grainRef}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
          filter: 'contrast(120%)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_40%,transparent,rgba(0,0,0,0.5),#000_80%)]" />

      {/* Floating particles (dust/moisture) */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#F5F5F5]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `drift ${6 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Fog layers with parallax */}
      <FogLayer speed={0.08} opacity={0.18} />
      <FogLayer speed={0.16} opacity={0.12} className="blur-[2px]" />
      <FogLayer speed={0.24} opacity={0.09} className="blur-[4px]" />
    </div>
  )
}
