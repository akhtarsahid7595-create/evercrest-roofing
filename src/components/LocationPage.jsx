import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import FeaturesBar from './FeaturesBar';
import TrustReviewsSection from './TrustReviewsSection';
import QuoteBanner from './QuoteBanner';
import Footer from './Footer';
import ChatFloatingWidget from './ChatFloatingWidget';
import SeoHead from './SeoHead';
import { Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function LocationPage({ data, onOpenQuote }) {
  return (
    <div className="min-h-screen bg-white text-[#0A1E30] flex flex-col font-sans antialiased selection:bg-[#3B6991] selection:text-white">
      <SeoHead title={data.title} description={data.description} path={data.path} />
      
      {/* 1. Global Announcement / Call TopBar */}
      <TopBar />

      {/* 2. Primary Navigation */}
      <Header onOpenQuote={onOpenQuote} />

      <main className="flex-grow">
        {/* 3. Location Hero Section */}
        <section className="relative bg-[#0A1E30] text-white py-16 sm:py-24 px-4 sm:px-[6%] overflow-hidden border-b border-[#1E344A]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2942] border border-[#3B6991]/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#A0C4E4] mb-5 shadow-sm">
                <span className="flex text-[#F4B400] gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-white font-bold">5.0 Google Rating</span>
                <span>·</span>
                <span>Local {data.area} Coverage</span>
              </div>

              <p className="eyebrow-jg text-[#5A8BAF] tracking-widest text-xs sm:text-sm">
                Evercrest Roofing · {data.area}
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading leading-[1.1] mt-3 tracking-tight text-white">
                Roofing Services in {data.area}
              </h1>

              <p className="text-slate-200 text-base sm:text-xl max-w-2xl mt-5 leading-relaxed font-normal">
                {data.intro}
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5A8BAF]" /> 100% Free Inspection
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5A8BAF]" /> Fully Insured & Guaranteed
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#5A8BAF]" /> Rapid {data.area} Response
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-2">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="btn-jg bg-[#5A8BAF] hover:bg-[#3B6991] text-white py-3.5 px-8 text-base font-extrabold shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Request a Free Quote
                </button>
                <a
                  href="tel:0852312579"
                  className="btn-outline-jg border-white/80 hover:bg-white hover:text-[#0A1E30] py-3.5 px-7 text-base font-extrabold transition-all"
                >
                  <Phone className="w-4 h-4 text-[#5A8BAF] mr-1" /> Call 085 231 2579
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features Bar */}
        <FeaturesBar />

        {/* 5. Main Local Content */}
        <section className="py-14 sm:py-20 px-4 sm:px-[6%] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="eyebrow-jg text-[#3B6991] mb-2">Local Roofing Contractors</div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0A1E30] leading-tight">
                Local roofing help for {data.area}
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed text-base sm:text-lg mt-4">
                {data.body}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Roof Repairs', desc: 'Fast leak detection and reliable slate or tile replacements.', href: '/roof-repairs-dublin/' },
                { name: 'Emergency Leak Repairs', desc: 'Urgent same-day weatherproofing and storm damage repair.', href: '/emergency-roof-repairs-dublin/' },
                { name: 'Flat Roofing', desc: 'Torch-on felt, EPDM rubber, and flat roof window fittings.', href: '/flat-roofing-dublin/' },
                { name: 'Guttering & Chimneys', desc: 'Seamless gutters, fascia/soffit, and chimney repointing.', href: '/gutter-repairs-dublin/' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="card-jg p-6 border border-[#E1E7ED] hover:border-[#3B6991] transition-all rounded-xl block group"
                >
                  <h3 className="font-black font-heading text-lg text-[#0A1E30] group-hover:text-[#3B6991] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#5A6A7A] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="text-xs font-bold text-[#3B6991] mt-4 inline-flex items-center gap-1">
                    Explore service →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Google Business Reviews */}
        <TrustReviewsSection onOpenQuote={onOpenQuote} />

        {/* 7. Quote Banner */}
        <QuoteBanner onOpenQuote={onOpenQuote} />
      </main>

      {/* 8. Global Footer */}
      <Footer />

      {/* 9. Mobile Sticky Floating Quote Widget */}
      <ChatFloatingWidget onOpenQuote={onOpenQuote} />
    </div>
  );
}
