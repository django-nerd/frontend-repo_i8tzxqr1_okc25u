import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-16 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Request a callback</h2>
            <p className="mt-2 text-blue-200/80">Tell us a little about your business and well reach out.</p>
            <ul className="mt-6 space-y-2 text-blue-200/90 text-sm">
              <li>• WhatsApp or phone within 24 hours</li>
              <li>• No hard sell—just straight answers</li>
              <li>• Well share quick ideas specific to your niche</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Phone</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0712 345 678" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-200/80 mb-1">Message</label>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your business..." />
            </div>
            <button type="submit" className="mt-5 w-full rounded-lg bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-600 transition-colors">Send</button>
            {sent && (
              <p className="mt-3 text-emerald-300 text-sm">Thanks! Well contact you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
