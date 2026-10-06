import React from 'react';

export default function WhoWeAre({ onOpenQuote }) {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-[6%] bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left Photo Container */}
        <div 
          className="h-[300px] sm:h-[390px] rounded-[10px] bg-cover bg-center shadow-md overflow-hidden"
          style={{ backgroundImage: "url('/images/about-evercrest-client-work.png')" }}
        />

        {/* Right Content Column */}
        <div className="space-y-4">
          <div className="eyebrow-jg">About Evercrest Roofing</div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0A1E30] font-heading leading-[1.1]">
            Reliable roofing with a no-nonsense approach.
          </h2>

          <p className="text-[#5A6A7A] text-sm sm:text-base leading-relaxed font-normal">
            Evercrest Roofing is a reliable, local roofing business serving Dublin and surrounding counties. We understand how important your roof is, so we focus on honest advice, clear pricing, quality materials and a tidy finish.
          </p>

          {/* 4 Checkmarks 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 font-bold text-sm text-[#0A1E30] font-heading">
            <div className="flex items-center gap-2">
              <span className="text-[#3B6991] font-extrabold text-base">✓</span> Honest advice
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3B6991] font-extrabold text-base">✓</span> Transparent pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3B6991] font-extrabold text-base">✓</span> Quality materials
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3B6991] font-extrabold text-base">✓</span> Tidy workmanship
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="btn-jg bg-[#0F2942] hover:bg-[#3B6991] py-3.5 px-6 text-sm font-extrabold shadow-md"
            >
              CONTACT US
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
