import React from 'react';
import { MapPin, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function AreasWeCover({ onOpenQuote }) {
  const dublinDistricts = [
    {
      title: "South Dublin",
      href: "/areas/south-dublin/",
      areas: "Rathfarnham, Tallaght, Templeogue, Terenure, Dundrum, Blackrock, Knocklyon, Firhouse"
    },
    {
      title: "Dublin City & West",
      href: "/areas/dublin-city/",
      areas: "Dublin City Centre, Lucan, Clondalkin, Ballyfermot, Palmerstown, Chapelizod, Crumlin"
    },
    {
      title: "North Dublin & Coast",
      href: "/areas/north-dublin/",
      areas: "Clontarf, Raheny, Killester, Howth, Sutton, Drumcondra, Glasnevin, Malahide"
    },
    {
      title: "North-West & Fingal",
      href: "/areas/fingal/",
      areas: "Blanchardstown, Castleknock, Swords, Finglas, Santry, Balbriggan, Ashbourne Border"
    }
  ];

  const leinsterCounties = [
    { name: "Dublin", desc: "All City & County areas", badge: "Primary Hub" },
    { name: "Meath", desc: "Navan, Ashbourne, Dunboyne, Ratoath, Trim" },
    { name: "Kildare", desc: "Naas, Newbridge, Celbridge, Leixlip, Maynooth" },
    { name: "Wicklow", desc: "Bray, Greystones, Arklow, Wicklow Town, Blessington" },
    { name: "Louth", desc: "Drogheda, Dundalk, Ardee, Clogherhead" },
    { name: "Westmeath", desc: "Mullingar, Athlone, Moate, Kinnegad" },
    { name: "Offaly", desc: "Tullamore, Edenderry, Birr, Clara" },
    { name: "Laois", desc: "Portlaoise, Portarlington, Mountmellick, Abbeyleix" },
    { name: "Longford", desc: "Longford Town, Edgeworthstown, Ballymahon" },
    { name: "Carlow", desc: "Carlow Town, Tullow, Bagenalstown" },
    { name: "Kilkenny", desc: "Kilkenny City, Callan, Thomastown, Castlecomer" },
    { name: "Wexford", desc: "Wexford Town, Gorey, Enniscorthy, New Ross" }
  ];

  return (
    <section id="areas" className="bg-[#0A1E30] text-white py-16 sm:py-24 px-4 sm:px-[6%] border-t border-[#1E344A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2942] border border-[#3B6991]/50 text-[#A0C4E4] text-xs font-bold uppercase tracking-widest font-heading mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#5A8BAF]" /> Service Coverage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight mb-4">
            Roofing Across Dublin & All 12 Leinster Counties
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            From emergency leak repairs and roof replacements in County Dublin to domestic and commercial roofing projects across Leinster — Evercrest Roofing provides fast on-site inspections, clear fixed quotes, and guaranteed workmanship.
          </p>
        </div>

        {/* 1. Dublin Regional Hubs */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-[#5A8BAF] flex items-center gap-2">
              <span>📍</span> County Dublin Priority Coverage
            </h3>
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
              Daily Mobile Roofing Vans Across Dublin
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dublinDistricts.map((ar, idx) => (
              <a
                href={ar.href}
                key={idx}
                className="p-5 border border-[#1E344A] rounded-xl bg-[#0F2942]/70 hover:border-[#5A8BAF] hover:bg-[#0F2942] transition-all group block shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#5A8BAF] font-bold text-base sm:text-lg font-heading group-hover:text-white transition-colors">
                    {ar.title}
                  </h4>
                  <span className="text-[#3B6991] group-hover:translate-x-1 transition-transform text-sm">→</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {ar.areas}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Complete 12 Leinster Counties Grid */}
        <div className="bg-[#0F2942]/50 border border-[#1E344A] rounded-2xl p-6 sm:p-10 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-2">
              All 12 Counties We Serve
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our mobile roofers travel across the entire province of Leinster. No matter which county your property is located in, we arrange prompt on-site assessments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {leinsterCounties.map((c) => (
              <div
                key={c.name}
                className="p-3 sm:p-4 rounded-xl border border-[#1E344A] bg-[#0A1E30]/80 hover:border-[#5A8BAF] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-heading font-extrabold text-white text-xs sm:text-base group-hover:text-[#5A8BAF] transition-colors flex items-center gap-1">
                      <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#5A8BAF] shrink-0" />
                      Co. {c.name}
                    </span>
                    {c.badge && (
                      <span className="text-[9px] sm:text-[10px] bg-[#1E3E60] text-emerald-300 px-1.5 py-0.5 rounded-full font-bold shrink-0">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-snug mt-1">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees Row */}
          <div className="mt-8 pt-6 border-t border-[#1E344A] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs sm:text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5A8BAF]" />
              <span><strong>100% Free</strong> On-Site Roof Inspection</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#5A8BAF]" />
              <span><strong>Fast Response</strong> Emergency Leak Help</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5A8BAF]" />
              <span><strong>Fully Insured</strong> Workmanship Guarantee</span>
            </div>
          </div>
        </div>

        {/* Direct Call to Action Footer within Areas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#163857]/60 border border-[#234A70] rounded-xl p-6 sm:p-8">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Do you have a roofing project in Dublin or Leinster?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Speak directly with Josh or Mick for friendly advice and a free, no-obligation quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-jg bg-[#5A8BAF] hover:bg-[#3B6991] text-white py-3 px-6 text-sm font-bold shadow-md w-full sm:w-auto"
            >
              Get Free Quote
            </button>
            <a
              href="tel:0852312579"
              className="btn-outline-jg border-white/60 hover:bg-white hover:text-[#0A1E30] py-3 px-5 text-sm font-bold text-center w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#5A8BAF]" /> 085 231 2579
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
