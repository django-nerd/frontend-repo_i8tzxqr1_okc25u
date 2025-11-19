import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#12070a] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <footer className="py-10 text-center text-rose-200/80 bg-[#12070a] border-t border-rose-900/60">© {new Date().getFullYear()} Local Elevate Solutions — All rights reserved.</footer>
    </div>
  )
}

export default App
