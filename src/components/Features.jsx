import React from 'react'

const Feature = ({ title, description }) => (
  <div className="rounded-xl border border-slate-700/40 bg-slate-800/40 p-6">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
  </div>
)

function Features() {
  return (
    <section id="features" className="py-16 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything you need</h2>
          <p className="mt-2 text-blue-200/80">We handle the tech so you can run your business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feature title="One‑time build" description="A complete, custom landing page built for your business." />
          <Feature title="Fast & Mobile‑friendly" description="Optimized for speed and conversions on any device." />
          <Feature title="Google Business Profile" description="Ongoing optimization so you show up where it matters." />
          <Feature title="SEO‑ready" description="On‑page SEO best practices baked in from day one." />
          <Feature title="Analytics setup" description="Track calls, clicks, and forms to measure results." />
          <Feature title="Support" description="Friendly support to update copy, images, and offers." />
        </div>
      </div>
    </section>
  )
}

export default Features
