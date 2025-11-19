import React, { useMemo, useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const nameValid = name.trim().length >= 2
  const phoneValid = /^(?:\+?254|0)?7\d{8}$/.test(phone.replace(/\s|-/g, ''))
  const messageValid = message.trim().length >= 10
  const formValid = nameValid && phoneValid && messageValid

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValid) return
    setSent(true)
    setTimeout(()=>setSent(false), 4000)
    setName(''); setPhone(''); setMessage('')
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_top,rgba(34,211,238,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight glow-text">Request a callback</h2>
            <p className="mt-2 text-blue-200/80">Tell us a little about your business and we'll reach out.</p>
            <ul className="mt-6 space-y-2 text-blue-200/90 text-sm">
              <li>• WhatsApp or phone within 24 hours</li>
              <li>• No hard sell—just straight answers</li>
              <li>• We'll share quick ideas specific to your niche</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl glass p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="field">
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className={`field-input ${name && !nameValid ? 'ring-2 ring-red-500/60' : ''}`} />
                <label className="field-label">Name</label>
                {!nameValid && name && <p className="mt-1 text-xs text-red-400">Enter at least 2 characters.</p>}
              </div>
              <div className="field">
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className={`field-input ${phone && !phoneValid ? 'ring-2 ring-red-500/60' : ''}`} />
                <label className="field-label">Phone</label>
                {!phoneValid && phone && <p className="mt-1 text-xs text-red-400">Use a valid KE number (e.g., 0712345678).</p>}
              </div>
            </div>
            <div className="mt-4 field">
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} placeholder="Message" className={`field-input ${message && !messageValid ? 'ring-2 ring-red-500/60' : ''}`} />
              <label className="field-label">Message</label>
              {!messageValid && message && <p className="mt-1 text-xs text-red-400">Tell us a bit more (10+ characters).</p>}
            </div>
            <button disabled={!formValid} type="submit" className={`mt-5 w-full rounded-lg px-4 py-2.5 font-medium transition gradient-ring ${formValid ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-400/40 hover:bg-cyan-500/30' : 'bg-white/5 text-white/60 border border-white/10 cursor-not-allowed'}`}>Send</button>
            {sent && (
              <p className="mt-3 text-emerald-300 text-sm">Thanks! We'll contact you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
