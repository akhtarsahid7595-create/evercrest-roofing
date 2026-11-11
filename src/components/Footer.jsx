import React from 'react';
import EvercrestLogo from './EvercrestLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0A1E30] text-[#B0C4D8] py-12 sm:py-16 px-4 sm:px-[6%] border-t border-[#1E344A] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <EvercrestLogo variant="dark" />
          <p className="text-xs sm:text-sm text-[#8AA0B8] leading-relaxed pt-1">
            Professional roofing services across Dublin and surrounding counties.
          </p>
          <small className="block text-[#8AA0B8] text-xs pt-2">
            © {new Date().getFullYear()} Evercrest Roofing. All Rights Reserved.
          </small>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <strong className="text-white font-heading font-extrabold text-base block">Quick Links</strong>
          <div className="space-y-2 text-xs sm:text-sm font-medium">
            <a href="#about" className="block hover:text-white transition-colors">About Us</a>
            <a href="#services" className="block hover:text-white transition-colors">Services</a>
            <a href="#areas" className="block hover:text-white transition-colors">Areas We Cover</a>
            <a href="#contact" className="block hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-3">
          <strong className="text-white font-heading font-extrabold text-base block">Contact Info</strong>
          <div className="space-y-2 text-xs sm:text-sm font-medium">
            <a href="tel:0852312579" className="block text-[#5A8BAF] font-bold text-base hover:underline">
              085 231 2579
            </a>
            <a href="mailto:evercrestroofing037@gmail.com" className="block hover:text-white transition-colors font-semibold">
              evercrestroofing037@gmail.com
            </a>
            <span className="block text-[#8AA0B8]">Dublin & Leinster, Ireland</span>
            <span className="block text-[#5A8BAF] font-semibold">24/7 Emergency Service</span>
          </div>
        </div>

      </div>

      {/* Counties We Serve Strip */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[#1E344A]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8AA0B8]">
          <span className="font-bold text-slate-200 shrink-0">Counties We Cover:</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1 text-slate-300">
            {['Dublin', 'Meath', 'Kildare', 'Wicklow', 'Louth', 'Westmeath', 'Offaly', 'Laois', 'Longford', 'Carlow', 'Kilkenny', 'Wexford'].map((county) => (
              <span key={county} className="hover:text-white transition-colors">
                Co. {county}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
