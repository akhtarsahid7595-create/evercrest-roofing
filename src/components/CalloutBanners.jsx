import React from 'react';

export default function CalloutBanners({ onOpenQuote }) {
  return (
    <div className="font-sans">
      
      {/* Banner 1: GET A NO OBLIGATION CLEANING QUOTE */}
      <section className="relative bg-slate-950 text-white py-20 px-4 text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_luxury_bathroom.webp" 
            alt="Peter's Window Cleaning Banner" 
            className="w-full h-full object-cover filter brightness-30 contrast-125"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight">
            Get A No Obligation Cleaning Quote
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Hard-to-reach windows or need outdoor power washing? Phone, text, WhatsApp or email Peter or Suzanne today.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="btn-rosewood-primary"
            >
              Book A Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Banner 2: 10% OFF GUTTER CLEANING SPECIAL OFFER */}
      <section className="bg-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-white/20 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
            SPECIAL OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-medium tracking-tight">
            Now 10% Off Gutter Cleaning — Quote MLN9
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto font-light leading-relaxed">
            Take advantage of our gutter, fascia &amp; soffit cleaning offer. Book a 6, 8, or 12 weeks rotation schedule today.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-slate-950 hover:bg-black text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md"
            >
              Claim 10% Discount
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
