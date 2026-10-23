import React from 'react';

export default function TradeHero({ onOpenQuote }) {
  return (
    <section className="relative bg-slate-950 text-white min-h-[82vh] flex flex-col justify-between overflow-hidden font-sans">
      
      {/* Full-Bleed Background Image (Exact Rosewood Style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_luxury_bathroom.webp" 
          alt="Peter's Window Cleaning Work Showcase" 
          className="w-full h-full object-cover filter brightness-50 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
      </div>

      {/* Centered Hero Typography & Pill Buttons */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center my-auto py-24 lg:py-32 space-y-8">
        
        {/* Rosewood-Style Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-semibold tracking-tight text-white leading-[1.12]">
          A New Standard for Your <br className="hidden sm:inline" />
          <span className="text-blue-400 font-bold">Windows &amp; Exterior</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
          State-of-the-Art Pure Water Hot Wash Systems For Homes &amp; Workplaces
        </p>

        {/* 2 Side-by-Side Pill Buttons (Matching Rosewood Hero Buttons) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          <button
            onClick={onOpenQuote}
            className="btn-rosewood-primary w-full sm:w-auto"
          >
            Book A Consultation
          </button>

          <a
            href="#services"
            className="btn-rosewood-secondary w-full sm:w-auto text-center"
          >
            View Our Services
          </a>

        </div>

      </div>

      {/* Rosewood-Style Bottom Announcement Banner Strip */}
      <div className="relative z-10 bg-blue-900/80 border-t border-blue-700/50 py-3.5 px-4 text-center text-xs sm:text-sm font-normal text-slate-100 tracking-wide backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <span>We have state-of-the-art pure water hot wash solutions for hard-to-reach windows &amp; Velux skylights!</span>
        </div>
      </div>

    </section>
  );
}
