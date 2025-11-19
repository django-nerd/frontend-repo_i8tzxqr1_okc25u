import React from 'react'
import { motion } from 'framer-motion'

const Item = ({ title, description, i }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay: i * 0.05, type: 'spring', stiffness: 160, damping: 18 }}
    className="rounded-xl glass p-6 hover:scale-[1.015] transition will-change-transform"
  >
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

function Features() {
  const features = [
    { title: 'One‑time build', description: 'A complete, custom landing page built for your business.' },
    { title: 'Fast & Mobile‑friendly', description: 'Optimized for speed and conversions on any device.' },
    { title: 'Google Business Profile', description: 'Ongoing optimization so you show up where it matters.' },
    { title: 'SEO‑ready', description: 'On‑page SEO best practices baked in from day one.' },
    { title: 'Analytics setup', description: 'Track calls, clicks, and forms to measure results.' },
    { title: 'Support', description: 'Friendly support to update copy, images, and offers.' },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight glow-text">Everything you need</h2>
          <p className="mt-2 text-blue-200/80">We handle the tech so you can run your business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <Item key={f.title} title={f.title} description={f.description} i={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
