import React, { useMemo } from 'react'

// Lightweight particles using absolute spans and CSS animations
function Particles({ count = 30 }) {
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 8,
    opacity: 0.2 + Math.random() * 0.5,
  })), [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cyan-400/70 shadow-[0_0_12px_2px_rgba(34,211,238,0.35)] animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Particles
