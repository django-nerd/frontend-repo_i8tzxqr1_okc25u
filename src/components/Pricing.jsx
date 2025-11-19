import React, { useState } from 'react'

function formatKES(n) {
  return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(n)
}

const Toggle = ({ value, onChange }) => (
  <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-lg p-1">
    <button onClick={() => onChange('one')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${value==='one' ? 'bg-blue-500 text-white' : 'text-blue-200/80 hover:text-white'}`}>One‑time</button>
    <button onClick={() => onChange('monthly')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${value==='monthly' ? 'bg-blue-500 text-white' : 'text-blue-200/80 hover:text-white'}`}>Monthly</button>
  </div>
)

function OneTimeCard() {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-xl">
      <h3 className="text-white font-semibold text-lg">One‑time Website Build</h3>
      <p className="mt-1 text-sm text-blue-200/80">Perfect for a clean, high‑converting landing page.</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold text-white">{formatKES(3000)}</span>
        <span className="text-blue-200/70 mb-1 text-sm">KSH</span>
      </div>
      <ul className="mt-6 space-y-2 text-blue-200/90 text-sm">
        <li>• 50% deposit before start</li>
        <li>• 50% on delivery</li>
        <li>• 2 rounds of revisions</li>
        <li>• Delivery in ~2 weeks</li>
      </ul>
      <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-600 transition-colors">Start Project</a>
    </div>
  )
}

function MonthlyCard() {
  return (
    <div className="rounded-2xl border border-blue-500/40 bg-slate-900/60 p-6 shadow-xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 text-blue-200/90 px-3 py-1 text-xs">Recommended</div>
      <h3 className="mt-3 text-white font-semibold text-lg">Google Business Profile Optimization</h3>
      <p className="mt-1 text-sm text-blue-200/80">Ongoing improvements and updates for better local visibility.</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold text-white">{formatKES(500)}</span>
        <span className="text-blue-200/70 mb-1 text-sm">per month</span>
      </div>
      <ul className="mt-6 space-y-2 text-blue-200/90 text-sm">
        <li>• Profile audit and optimization</li>
        <li>• Regular posts and offers</li>
        <li>• Review response support</li>
        <li>• Insights reporting</li>
      </ul>
      <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-600 transition-colors">Subscribe</a>
    </div>
  )
}

function Pricing() {
  const [mode, setMode] = useState('one')

  return (
    <section id="pricing" className="py-16 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-blue-200/80">Choose a one‑time project or add monthly optimizations.</p>
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
