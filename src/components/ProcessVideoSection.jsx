import React from 'react';
import { Play } from 'lucide-react';

export default function ProcessVideoSection({ onOpenQuote }) {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white font-sans border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="mb-14 space-y-3">
          <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-800/60">
            Pure Water Hot Wash System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white tracking-tight">
            Hot Wash Technology In Action
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            See how Peter's Window Cleaning Services delivers spot-free glass and spotless outdoor driveways.
          </p>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative bg-black rounded-2xl border border-slate-800 overflow-hidden shadow-2xl group max-w-4xl mx-auto">
          <div className="relative aspect-video w-full flex items-center justify-center bg-slate-950">
            <img 
              src="/hero_luxury_bathroom.webp" 
              alt="Peter's Window Cleaning Hot Wash Showcase" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <button 
                onClick={onOpenQuote}
                className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl transition-transform transform hover:scale-105 active:scale-95"
                aria-label="Play Showcase"
              >
                <Play className="w-9 h-9 fill-white translate-x-0.5" />
              </button>
              <span className="bg-slate-900/90 text-slate-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-slate-700">
                PETER'S HOT WASH DEMO
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
            <span>PETER'S WINDOW CLEANING SERVICES • 6/8/12 ROTATIONS</span>
            <button 
              onClick={onOpenQuote}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              BOOK YOUR FREE CONSULTATION &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
