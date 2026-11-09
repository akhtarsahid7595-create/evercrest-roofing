import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Roof Repairs & Replacement',
    county: 'County Dublin',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const telegramText = 
`🚨 *NEW DUBLIN ROOFING LEAD (Contact Form)!* 🚨

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'None'}
🛠️ *Service:* ${formData.service}
📍 *County:* ${formData.county}
📝 *Details:* ${formData.details || 'None provided'}

⏰ *Time:* ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}`;

    fetch("https://api.telegram.org/bot9216010977:AAHtrxm4fAc9IIGr56V9zDSw-400zEb_n4Q/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "5235553652",
        text: telegramText,
        parse_mode: "Markdown"
      })
    }).catch((err) => console.warn("Telegram contact error:", err));
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Emergency Callout Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Contact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Evercrest Roofing
              </span>
            </h2>

            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Have questions about your roof or need a fast quote? Send us a message or call our 24/7 team anytime.
            </p>

            <div className="space-y-4 pt-4">
              <div className="obsidian-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">Service Coverage Area</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Serving Homes & Businesses Across Ireland 🇮🇪</p>
                </div>
              </div>

              <div className="obsidian-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">24/7 Emergency Dispatch</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Storm damage & roof leak response within hours.</p>
                </div>
              </div>

              <div className="obsidian-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">Fully Insured & Guaranteed</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Comprehensive public liability insurance & written warranty.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="obsidian-card p-8 bg-[#131924] border border-emerald-500/30">
              
              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                Request a Free Quote
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out your details below and our team will get back to you with a free, no-obligation quote.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-2xl mx-auto shadow-lg shadow-emerald-500/30">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">Thank You!</h4>
                  <p className="text-sm text-slate-300">
                    Your quote request has been received. An Evercrest Roofing specialist will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="pill-btn-outline py-2.5 px-6 text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Murphy"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="087 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Required Roofing Service *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option>Roof Repairs & Replacement</option>
                        <option>Flat Roofing Specialists</option>
                        <option>Dry Verge & Ridge Systems</option>
                        <option>Chimney & Valley Repairs</option>
                        <option>Roof Cleaning & Treatment</option>
                        <option>Fascia, Soffit & Guttering</option>
                        <option>24/7 Emergency Repairs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">County / Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dublin, Cork, Galway"
                        value={formData.county}
                        onChange={(e) => setFormData({...formData, county: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Roof Issue</label>
                    <textarea
                      rows="4"
                      placeholder="Please describe the roof condition, leaks, or required work..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full pill-btn-emerald py-4 text-base mt-2"
                  >
                    Submit Free Quote Request
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
