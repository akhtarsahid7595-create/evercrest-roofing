import React, { useState } from 'react';
import EvercrestLogo from './EvercrestLogo';

export default function QuotePage({ onGoHome }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roof Repairs & Replacement',
    location: 'Dublin',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const telegramText = 
`🚨 NEW DUBLIN ROOFING LEAD! 🚨

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🛠️ Service: ${formData.service}
📍 Location: ${formData.location}
📝 Notes: ${formData.notes || 'None provided'}

⏰ Time: ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}`;

      const sendTelegram = async () => {
        try {
          // 1. First try serverless function on same origin (bypasses CORS & adblockers)
          const serverRes = await fetch('/api/telegram', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              service: formData.service,
              location: formData.location,
              notes: formData.notes
            })
          });
          if (serverRes.ok) return;
        } catch (_) {}

        // 2. Direct fallback
        try {
          await fetch('https://api.telegram.org/bot9216010977:AAHtrxm4fAc9IIGr56V9zDSw-400zEb_n4Q/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: '5235553652',
              text: telegramText
            })
          });
        } catch (_) {}
      };

      // Send to both Web3Forms and Telegram concurrently
      const [web3Response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: "d163ec57-c683-4db7-99e6-5caf7d8e6620",
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            location: formData.location,
            message: formData.notes || "No extra notes provided",
            subject: `New Roofing Quote Request from ${formData.name} - Evercrest Roofing`
          })
        }),
        sendTelegram()
      ]);

      const result = await web3Response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try calling us directly.");
      }
    } catch (err) {
      setErrorMsg("Network error occurred. Please check your connection or call 085 231 2579.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] font-sans antialiased text-[#17201E]">
      
      {/* Page Navigation Header */}
      <header className="bg-white border-b border-[#E1E7ED] py-4 px-4 sm:px-[6%] shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); onGoHome(); }} className="flex items-center">
            <EvercrestLogo variant="light" size="small" />
          </a>
          
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A1E30] hover:text-[#3B6991] transition-colors bg-[#F5F7FA] hover:bg-slate-100 px-4 py-2 rounded-lg border border-[#E1E7ED]"
          >
            <span>←</span> Back to Homepage
          </button>
        </div>
      </header>

      {/* Main Quote Container */}
      <main className="flex-grow py-10 sm:py-16 px-4 sm:px-[6%] flex items-center justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl border border-[#E1E7ED] shadow-xl overflow-hidden">
          
          {/* Left Sidebar Callout */}
          <div className="lg:col-span-5 bg-[#0F2942] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="text-[#5A8BAF] text-xs font-black uppercase tracking-widest font-heading">
                Evercrest Roofing
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
                Request Your Free Quotation Today
              </h1>
              
              <p className="text-[#B0C4D8] text-xs sm:text-sm leading-relaxed">
                Fill out this quick form and our expert team will contact you promptly with a transparent, no-obligation quote.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3B6991] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  <span>100% Free & No Obligation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3B6991] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  <span>Fast 24-Hour Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3B6991] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  <span>Fully Insured & Guaranteed Work</span>
                </div>
              </div>
            </div>

            {/* Emergency Phone Callbox */}
            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <span className="text-xs text-[#8AA0B8] block mb-1">Prefer to speak directly?</span>
              <a
                href="tel:0852312579"
                className="inline-flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl hover:text-[#5A8BAF] transition-colors"
              >
                <span>📞</span> 085 231 2579
              </a>
            </div>
          </div>

          {/* Right Form Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-bold text-3xl mx-auto shadow-xl">
                  ✓
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E30] font-heading">
                  Quote Request Sent!
                </h2>
                
                <p className="text-sm text-[#5A6A7A] max-w-md mx-auto leading-relaxed">
                  Thank you <strong className="text-[#0A1E30]">{formData.name}</strong>. Your message has been sent to our team at <strong className="text-[#0A1E30]">evercrestroofing037@gmail.com</strong>. We will call you at <strong className="text-[#0A1E30]">{formData.phone}</strong> shortly.
                </p>

                <div className="pt-4">
                  <button
                    onClick={onGoHome}
                    className="btn-jg bg-[#0F2942] hover:bg-[#3B6991] text-white px-8 py-3.5 text-sm font-extrabold shadow-md"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A1E30] font-heading mb-1">
                    Free Quote Details
                  </h2>
                  <p className="text-xs text-[#5A6A7A]">
                    Please provide your contact details and roofing requirements below.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#0A1E30] mb-1.5 font-heading">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Murphy"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-sm focus:outline-none focus:border-[#0F2942] focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1E30] mb-1.5 font-heading">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 085 231 2579"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-sm focus:outline-none focus:border-[#0F2942] focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1E30] mb-1.5 font-heading">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-sm focus:outline-none focus:border-[#0F2942] focus:bg-white transition-all font-medium"
                  >
                    <option>Roof Repairs & Replacement</option>
                    <option>Flat Roofing</option>
                    <option>Dry Verge & Ridge Systems</option>
                    <option>Chimney & Valley Repairs</option>
                    <option>Roof Cleaning & Treatment</option>
                    <option>Fascia, Soffit & Guttering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1E30] mb-1.5 font-heading">
                    Location in Dublin / Leinster *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. South Dublin, Tallaght, Swords"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-sm focus:outline-none focus:border-[#0F2942] focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1E30] mb-1.5 font-heading">
                    Additional Details / Notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your roof issue or specific project details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-sm focus:outline-none focus:border-[#0F2942] focus:bg-white transition-all resize-none font-medium"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-jg bg-[#0F2942] hover:bg-[#3B6991] text-white py-4 px-6 text-sm font-extrabold rounded-lg shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING YOUR REQUEST...' : 'SUBMIT QUOTE REQUEST NOW'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Page Footer */}
      <footer className="bg-[#0A1E30] text-[#B0C4D8] py-6 px-4 text-center text-xs border-t border-[#1E344A]">
        © {new Date().getFullYear()} Evercrest Roofing. All Rights Reserved. · Dublin & Leinster
      </footer>
    </div>
  );
}
