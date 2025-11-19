import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-slate-700/40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg shadow-blue-500/30">🔥</span>
          <span className="font-semibold tracking-tight">Your Brand</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#pricing" className="ml-4 rounded-lg bg-blue-500 px-3.5 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors">Get Started</a>
      </div>
    </header>
  )
}

export default Navbar
