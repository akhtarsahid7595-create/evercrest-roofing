import React, { useState } from 'react';
import EvercrestLogo from './EvercrestLogo';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const homePrefix = window.location.pathname === '/' ? '' : '/';
  const homeLink = (section) => `${homePrefix}#${section}`;

  const services = [
    { label: 'Roof Repairs & Replacement', href: '/roof-repairs-dublin/' },
    { label: 'Flat Roofing', href: '/flat-roofing-dublin/' },
    { label: 'Slate Roof Repair', href: '/slate-roof-repair-dublin/' },
    { label: 'Fascia and Soffit Repair', href: '/fascia-soffit-repair-dublin/' },
    { label: 'Gutter Replacement', href: '/gutter-replacement-dublin/' },
    { label: 'Dry Verge & Ridge Systems', href: '#services' },
    { label: 'Chimney & Valley Repairs', href: '/chimney-repairs-dublin/' },
    { label: 'Roof Cleaning & Treatment', href: '#services' },
    { label: 'Fascia, Soffit & Guttering', href: '/gutter-repairs-dublin/' },
  ];

  const areas = [
    { label: 'South Dublin', href: '/areas/south-dublin/' },
    { label: 'Dublin City & South-West', href: '/areas/dublin-city/' },
    { label: 'North Dublin & Coast', href: '/areas/north-dublin/' },
    { label: 'North-West & Fingal', href: '/areas/fingal/' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white border-b border-[#E1E7ED] z-50 h-[72px] lg:h-[78px] flex items-center shadow-sm">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-[6%] w-full flex justify-start items-center">
        
        {/* Brand Logo matching Navy Blue graphic */}
        <a href={homePrefix || '#home'} className="flex items-center group shrink-0" aria-label="Evercrest Roofing home">
          <EvercrestLogo variant="light" size="small" className="site-logo" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto text-sm font-bold text-[#0A1E30] font-heading">
            <a href={homeLink('about')} className="hover:text-[#3B6991] transition-colors">About Us</a>
          <div className="relative group">
            <a href={homeLink('services')} className="inline-flex items-center gap-1 hover:text-[#3B6991] transition-colors" aria-haspopup="true">
              Services
              <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-lg border border-[#E1E7ED] bg-white p-2 shadow-xl">
                {services.map((service) => (
                  <a key={service.label} href={service.href} className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#0A1E30] transition-colors hover:bg-[#F0F5F8] hover:text-[#3B6991]">
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <a href={homeLink('areas')} className="inline-flex items-center gap-1 hover:text-[#3B6991] transition-colors" aria-haspopup="true">
              Areas We Cover
              <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-lg border border-[#E1E7ED] bg-white p-2 shadow-xl">
                {areas.map((area) => (
                  <a key={area.label} href={area.href} className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#0A1E30] transition-colors hover:bg-[#F0F5F8] hover:text-[#3B6991]">
                    {area.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href={homeLink('faq')} className="hover:text-[#3B6991] transition-colors">FAQ</a>
          <a href="/blog/" className="hover:text-[#3B6991] transition-colors">Blog</a>
          <a href={homeLink('contact')} className="hover:text-[#3B6991] transition-colors">Contact Us</a>
        </nav>

        {/* Free Quote CTA Button */}
        <div className="flex items-center gap-3 ml-auto lg:ml-8">
          <button
            onClick={onOpenQuote}
            className="mobile-header-quote hidden lg:inline-flex btn-jg bg-[#0F2942] hover:bg-[#3B6991] text-xs sm:text-sm py-2.5 px-5 shadow-md"
          >
            FREE QUOTE
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1E30] hover:text-[#3B6991] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[78px] left-0 w-full bg-white border-b border-[#E1E7ED] p-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-bold text-[#0A1E30] text-base font-heading">
            <a href={homeLink('about')} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">About Us</a>
            <div className="border-b border-slate-100">
              <button type="button" onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex w-full items-center justify-between py-2 text-left">
                <span>Services</span>
                <svg className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mb-2 ml-3 border-l-2 border-[#DCE6ED] pl-3">
                  {services.map((service) => (
                    <a key={service.label} href={service.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#3B6991]">
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-slate-100">
              <button type="button" onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="flex w-full items-center justify-between py-2 text-left">
                <span>Areas We Cover</span>
                <svg className={`h-4 w-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25-4.51a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileAreasOpen && (
                <div className="mb-2 ml-3 border-l-2 border-[#DCE6ED] pl-3">
                  {areas.map((area) => (
                    <a key={area.label} href={area.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#3B6991]">
                      {area.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={homeLink('faq')} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">FAQ</a>
            <a href="/blog/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Blog</a>
            <a href={homeLink('contact')} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Contact Us</a>
          </nav>
          
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:0852312579" className="btn-outline-jg bg-[#0A1E30] text-white w-full text-center text-sm py-3 font-bold">
              📞 CALL 085 231 2579
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn-jg bg-[#0F2942] w-full text-center text-sm py-3 font-bold"
            >
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
