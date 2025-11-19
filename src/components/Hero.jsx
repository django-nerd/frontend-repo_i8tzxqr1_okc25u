import React from 'react'

function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_top_right,rgba(59,130,246,0.25),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Grow your local business with a clean, high‑converting website
            </h1>
            <p className="mt-5 text-lg text-blue-200/90">
              Simple pricing. No surprises. We build fast, optimized, and mobile‑friendly pages that turn searches into customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="rounded-lg bg-blue-500 px-5 py-3 text-white font-medium shadow shadow-blue-500/30 hover:bg-blue-600 transition-colors">See Pricing</a>
              <a href="#contact" className="rounded-lg bg-white/10 px-5 py-3 text-white font-medium border border-white/10 hover:bg-white/15 transition-colors">Request a Callback</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-blue-200/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> 2‑week delivery</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> SEO‑ready</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Mobile‑first</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-700/40 bg-slate-800/40 backdrop-blur-sm shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1642132652860-471b4228023e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyMHdlYnNpdGUlMjBwcmV2aWV3fGVufDB8MHx8fDE3NjM1NDkyMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Business website preview" className="h-full w-full object-cover opacity-90"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
