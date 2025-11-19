import React, { useState } from 'react'
import { motion } from 'framer-motion'

function formatKES(n) {
  return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(n)
}

const Toggle = ({ value, onChange }) => (
  <div className="inline-flex items-center gap-2 glass rounded-xl p-1">
    <button onClick={() => onChange('one')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${value==='one' ? 'bg-rose-500/20 text-rose-200 border border-rose-400/40' : 'text-rose-200/80 hover:text-white'}`}>One‑time</button>
    <button onClick={() => onChange('monthly')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${value==='monthly' ? 'bg-rose-500/20 text-rose-200 border border-rose-400/40' : 'text-rose-200/80 hover:text-white'}`}>Monthly</button>
  </div>
)

const cardVariants = {
  initial: { y: 12, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
}

function OneTimeCard() {
  return (
    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(244,63,94,.25)' }} className="rounded-2xl glass p-6 relative overflow-hidden">
      <div className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(244,63,94,0.15),rgba(190,18,60,0.15),transparent_60%)] blur-2xl" />
      <div className="relative">
        <h3 className="text-white font-semibold text-lg">One‑time Website Build</h3>
        <p className="mt-1 text-sm text-rose-200/80">Perfect for a clean, high‑converting landing page.</p>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-bold text-white">{formatKES(3000)}</span>
          <span className="text-rose-200/70 mb-1 text-sm">KSH</span>
        </div>
        <ul className="mt-6 space-y-2 text-rose-200/90 text-sm">
          <li>• 50% deposit before start</li>
          <li>• 50% on delivery</li>
          <li>• 2 rounds of revisions</li>
          <li>• Delivery in ~3 days</li>
        </ul>
        <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-rose-500/20 text-rose-100 border border-rose-400/40 px-4 py-2.5 font-medium hover:bg-rose-500/30 transition gradient-ring">Start Project</a>
      </div>
    </motion.div>
  )
}

function MonthlyCard() {
  return (
    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(190,18,60,.25)' }} className="rounded-2xl glass p-6 relative overflow-hidden">
      <div className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(190,18,60,0.15),rgba(244,63,94,0.15),transparent_60%)] blur-2xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 text-rose-200/90 px-3 py-1 text-xs">Recommended</div>
        <h3 className="mt-3 text-white font-semibold text-lg">Google Business Profile Optimization</h3>
        <p className="mt-1 text-sm text-rose-200/80">Ongoing improvements and updates for better local visibility.</p>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-bold text-white">{formatKES(500)}</span>
          <span className="text-rose-200/70 mb-1 text-sm">per month</span>
        </div>
        <ul className="mt-6 space-y-2 text-rose-200/90 text-sm">
          <li>• Profile audit and optimization</li>
          <li>• Regular posts and offers</li>
          <li>• Review response support</li>
          <li>• Insights reporting</li>
        </ul>
        <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-rose-500/20 text-rose-100 border border-rose-400/40 px-4 py-2.5 font-medium hover:bg-rose-500/30 transition gradient-ring">Subscribe</a>
      </div>
    </motion.div>
  )
}

function Pricing() {
  const [mode, setMode] = useState('one')

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_bottom,rgba(244,63,94,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight glow-text">Simple, transparent pricing</h2>
          <p className="mt-2 text-rose-200/80">Choose a one‑time project or add monthly optimizations.</p>
          <div className="mt-6"><Toggle value={mode} onChange={setMode} /></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {mode === 'one' ? (
            <>
              <OneTimeCard />
              <MonthlyCard />
            </>
          ) : (
            <>
              <MonthlyCard />
              <OneTimeCard />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Pricing
