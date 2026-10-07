import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[535px] flex items-center bg-[#061320] overflow-hidden py-16 sm:py-24 px-4 sm:px-[6%]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_roof_banner.jpg"
          alt="Evercrest Roofing Dublin & Leinster"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061320]/95 via-[#061320]/80 to-[#061320]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-[720px] space-y-4">
          
          {/* Eyebrow Tagline in Steel Light Blue */}
          <div className="text-[#5A8BAF] uppercase text-xs sm:text-sm font-black tracking-widest font-heading">
            Professional Roofing Services
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.02] font-heading">
            Expert Roof Repairs in Dublin & Leinster
          </h1>

          {/* Paragraph Copy */}
          <p className="text-[#D0DDE8] text-base sm:text-lg font-normal leading-relaxed">
            Reliable roofing, leak repairs, chimney work, flat roofing, guttering and roof maintenance for homes and businesses across Dublin and Leinster.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <button
              onClick={onOpenQuote}
              className="btn-jg bg-[#0F2942] hover:bg-[#3B6991] py-3.5 px-6 text-sm font-bold shadow-lg"
            >
              GET A FREE QUOTE
            </button>

            <a
              href="tel:0852312579"
              className="btn-outline-jg py-3 px-6 text-sm font-bold text-center border-slate-300 hover:border-white"
            >
              CALL 085 231 2579
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
