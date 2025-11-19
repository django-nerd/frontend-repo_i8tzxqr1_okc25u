import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Particles from './Particles'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  // Parallax mouse tilt
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springX = useSpring(tiltX, { stiffness: 120, damping: 20 })
  const springY = useSpring(tiltY, { stiffness: 120, damping: 20 })

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 10
      const y = (e.clientY / innerHeight - 0.5) * 10
      tiltX.set(x)
      tiltY.set(y)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [tiltX, tiltY])

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* Parallax gradient background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_top_right,rgba(244,63,94,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_bottom_left,rgba(190,18,60,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,7,10,0)_0%,rgba(18,7,10,0.3)_40%,rgba(18,7,10,1)_100%)]" />
        <Particles count={40} />
      </motion.div>

      {/* Glowing grid */}
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="[background-image:radial-gradient(rgba(248,113,113,0.08)_1px,transparent_1px)] [background-size:20px_20px] w-full h-full" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex items-center">
        <div>
          <motion.h1 style={{ opacity }} className="text-4xl sm:text-6xl font-black tracking-tight leading-tight glow-text">
            Local Elevate Solutions
          </motion.h1>
          <motion.p style={{ opacity }} className="mt-5 text-lg sm:text-xl text-rose-200/90 max-w-2xl">
            We build high‑converting local business websites and keep your Google Business Profile optimized so you rank and get more calls.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-xl px-5 py-3 font-medium text-rose-900 bg-rose-300 hover:bg-rose-200 transition transform hover:scale-[1.02] neon-cyan">See Pricing</a>
            <a href="#contact" className="rounded-xl px-5 py-3 font-medium text-white/90 border border-white/15 hover:bg-white/10 transition gradient-ring">Request a Callback</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-rose-200/80">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-300"/> 3‑day delivery</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-300"/> SEO‑ready</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-300"/> Mobile‑first</div>
          </div>
        </div>

        {/* 3D-ish preview */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          style={{ rotateX: springY, rotateY: springX }}
          className="hidden lg:block ml-auto"
        >
          <div className="relative w-[520px] aspect-[4/3] rounded-2xl glass overflow-hidden neon-blue">
            <img src="https://images.unsplash.com/photo-1642132652860-471b4228023e?auto=format&fit=crop&q=80&w=1400" alt="Preview" className="h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-rose-700/10 mix-blend-screen" />
            <div className="absolute -inset-10 pointer-events-none blur-3xl opacity-20 bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.rose.400),theme(colors.rose.700),transparent_70%)]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-200/80 text-xs">
        <div className="w-5 h-8 rounded-full border border-rose-200/40 mx-auto relative overflow-hidden">
          <motion.span animate={{ y: [2, 12, 2] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute left-1/2 -translate-x-1/2 top-2 w-1 h-2 rounded-full bg-rose-200/70" />
        </div>
        <div className="mt-2">Scroll</div>
      </div>
    </section>
  )
}

export default Hero
