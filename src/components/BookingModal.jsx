import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roof Repairs & Replacement',
    location: 'Dublin',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const telegramText = 
`🚨 *NEW DUBLIN ROOFING LEAD (Modal)!* 🚨

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🛠️ *Service:* ${formData.service}
📍 *Location:* ${formData.location}
📝 *Notes:* ${formData.notes || 'None provided'}

⏰ *Time:* ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}`;

    fetch("https://api.telegram.org/bot9216010977:AAHtrxm4fAc9IIGr56V9zDSw-400zEb_n4Q/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "5235553652",
        text: telegramText,
        parse_mode: "Markdown"
      })
    }).catch((err) => console.warn("Telegram modal error:", err));
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-xl bg-white border border-[#E1E7ED] p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          ✕
        </button>

        <div className="mb-4 sm:mb-6 shrink-0 pr-8">
          <div className="text-[#3B6991] font-black uppercase text-[11px] tracking-wider mb-1 font-heading">
            Evercrest Roofing
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0A1E30] font-heading">
            Get Your Free Roofing Quote
          </h3>
          <p className="text-xs text-[#5A6A7A] mt-1">
            Fast, free and no-obligation quotation across Dublin and Leinster.
          </p>
        </div>

        <div className="overflow-y-auto pr-1 flex-grow">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-bold text-2xl mx-auto shadow-lg">
                ✓
              </div>
              <h4 className="text-xl font-bold text-[#0A1E30] font-heading">Quote Request Sent!</h4>
              <p className="text-xs text-[#5A6A7A]">
                Thank you {formData.name}. Evercrest Roofing will call you at {formData.phone} shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-jg bg-[#0F2942] py-2.5 px-6 text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-left pb-2">
              <div>
                <label className="block text-xs font-bold text-[#0A1E30] mb-1 font-heading">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Murphy"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-xs focus:outline-none focus:border-[#0F2942] transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1E30] mb-1 font-heading">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 085 231 2579"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-xs focus:outline-none focus:border-[#0F2942] transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1E30] mb-1 font-heading">Roofing Service Needed *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-xs focus:outline-none focus:border-[#0F2942] transition-colors font-medium"
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
                <label className="block text-xs font-bold text-[#0A1E30] mb-1 font-heading">Location in Dublin / Leinster *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. South Dublin, Tallaght, Swords"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-xs focus:outline-none focus:border-[#0F2942] transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1E30] mb-1 font-heading">Details / Notes (Optional)</label>
                <textarea
                  rows="3"
                  placeholder="Describe your roof leak, repair, or project details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[#0A1E30] text-xs focus:outline-none focus:border-[#0F2942] transition-colors resize-none font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-jg bg-[#0F2942] hover:bg-[#3B6991] py-3.5 text-sm font-extrabold mt-2 min-h-[44px]"
              >
                GET FREE QUOTE NOW
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
