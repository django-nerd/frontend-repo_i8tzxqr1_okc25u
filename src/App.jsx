import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <footer className="py-10 text-center text-blue-200/70 bg-slate-950 border-t border-slate-800/60">© {new Date().getFullYear()} Your Brand — All rights reserved.</footer>
    </div>
  )
}

export default App
