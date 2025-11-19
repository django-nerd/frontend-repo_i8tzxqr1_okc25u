import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20 border border-rose-400/40 neon-cyan">⚡</span>
          <span className="font-semibold tracking-tight glow-text">Local Elevate Solutions</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-rose-200/80">
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#pricing" className="ml-4 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/40 px-3.5 py-2 text-sm font-medium hover:bg-rose-500/30 transition-colors gradient-ring">Get Started</a>
      </div>
    </header>
  )
}

export default Navbar
