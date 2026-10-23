import React, { useState } from 'react';
import { Sparkles, Layers, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [activeStage, setActiveStage] = useState('final'); // 'before' | 'beginning' | 'final'
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const stages = [
    {
      id: 'before',
      step: '01',
      title: 'BEFORE',
      subtitle: 'Old & Outdated Space',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      description: 'Cracked ceramic tiles, leaking fixtures, inefficient layout, and worn out sanitaryware.',
      points: ['Dated 80s suite', 'Worn plumbing', 'Poor space utilization']
    },
    {
      id: 'beginning',
      step: '02',
      title: 'THE BEGINNING',
      subtitle: 'Full Strip-Out & Prep',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description: 'Stripping back to structural brick & studwork, new concealed plumbing, tanking & electrical prep.',
      points: ['Complete demolition', 'Hydrophobic waterproofing', 'Custom niche framing']
    },
    {
      id: 'final',
      step: '03',
      title: 'THE FINAL RESULT! ✨',
      subtitle: 'Modern Luxury Sanctuary',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description: 'High-end porcelain marble tiling, frameless glass shower enclosure, LED recessed niches & gold brassware.',
      points: ['Precision tile alignment', 'Warm ambient lighting', 'Flawless silicone sealing']
    }
  ];

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  return (
    <section id="before-after" className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>The Transformation Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            BEFORE ➔ THE BEGINNING ➔ THE FINAL RESULT!
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how DomBathroomsLTD handles the complete transformation from start to finish with zero hassle for you.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-5 rounded-2xl border transition-all text-left relative overflow-hidden group ${
                  isActive
                    ? 'bg-slate-800 border-amber-500 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-slate-500 tracking-widest">{stage.step}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${stage.badgeBg}`}>
                    {stage.title}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {stage.subtitle}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{stage.description}</p>
                
                {/* Check points */}
                <div className="mt-3 pt-3 border-t border-slate-800/60 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  {stage.points.map((p, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" /> {p}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Compare Slider Container */}
        <div className="bg-slate-950 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
              <span>Drag slider or click tabs to explore transformation</span>
            </span>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded bg-rose-950/80 text-rose-300 border border-rose-800/50">BEFORE</span>
              <span className="px-3 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">FINAL RESULT</span>
            </div>
          </div>

          <div 
            className="before-after-container relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl cursor-ew-resize overflow-hidden border border-slate-800"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (Background - Full width) */}
            <img 
              src="/hero_luxury_bathroom.webp" 
              alt="After Refurbishment Final Result" 
              className="absolute inset-0 w-full h-full object-cover select-none"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg border border-emerald-400/40">
              AFTER: DOM BATHROOMS LTD FINISH ✨
            </div>

            {/* BEFORE IMAGE (Clipped on top using clip-path) */}
            <div 
              className="absolute inset-0 overflow-hidden select-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div 
                className="w-full h-full bg-slate-900 relative"
                style={{ width: '100%' }}
              >
                {/* SVG/Styled representation of Before/Demolition view */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40">
                  <div className="w-20 h-20 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-4">
                    <Layers className="w-10 h-10 text-rose-400" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">Original Old Bathroom</h4>
                  <p className="text-sm text-slate-400 max-w-md">
                    Strip-out required: Cracked tile grout, old copper pipework, avocado acrylic bathtub, inefficient storage.
                  </p>
                  <span className="mt-4 bg-rose-500/20 text-rose-300 text-xs font-bold px-3 py-1 rounded-full border border-rose-500/30">
                    BEFORE STRIP-OUT
                  </span>
                </div>
              </div>
            </div>

            {/* SLIDER DIVIDER LINE & HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-2xl z-20 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-slate-950 shadow-2xl flex items-center justify-center font-bold text-sm border-2 border-white">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-8 py-4 rounded-full shadow-xl shadow-amber-500/20 text-base transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Message DomBathroomsLTD today for a FREE quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
