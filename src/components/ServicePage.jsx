import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import FeaturesBar from './FeaturesBar';
import TrustReviewsSection from './TrustReviewsSection';
import QuoteBanner from './QuoteBanner';
import Footer from './Footer';
import ChatFloatingWidget from './ChatFloatingWidget';
import SeoHead from './SeoHead';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Award, 
  FileCheck, 
  Sparkles,
  Wrench,
  ThumbsUp,
  AlertTriangle
} from 'lucide-react';

function getServicePhotos(path) {
  const p = (path || '').toLowerCase();
  if (p.includes('flat-roof')) {
    return [
      { src: '/images/client-work-01.webp', title: 'Flat Roof Installation with Rooflights', location: 'South Dublin' },
      { src: '/images/client-work-05.webp', title: 'Finished Torch-On & EPDM Flat Roof', location: 'Rathfarnham, Dublin 14' },
      { src: '/images/client-work-07.webp', title: 'Flat Roof Flashing & Upstand Detailing', location: 'Lucan, Co. Dublin' },
      { src: '/images/flat-roof-client-work.webp', title: 'Residential Flat Roof Waterproofing', location: 'Dublin City' },
    ];
  }
  if (p.includes('velux')) {
    return [
      { src: '/images/velux-roof-windows-installation.webp', title: 'Twin VELUX Roof Window Fitting', location: 'Clontarf, North Dublin' },
      { src: '/images/client-work-02.webp', title: 'VELUX Flashing & Slate Integration', location: 'Terenure, South Dublin' },
      { src: '/images/client-work-03.webp', title: 'Roof Window Replacement & Watertight Seal', location: 'Raheny, Dublin 5' },
      { src: '/images/work-02-velux-interior.jpg', title: 'Interior VELUX Finish & Natural Daylight', location: 'Castleknock, West Dublin' },
    ];
  }
  if (p.includes('replacement')) {
    return [
      { src: '/images/service_roof_replacement.webp', title: 'Complete Pitched Roof Replacement', location: 'Templeogue, South Dublin' },
      { src: '/images/client-work-04.webp', title: 'New Breathable Membrane & Timber Battens', location: 'Killester, North Dublin' },
      { src: '/images/client-work-08.webp', title: 'Full Strip & Re-Roofing with Premium Slates', location: 'Howth, Co. Dublin' },
      { src: '/images/client-work-10.webp', title: 'Roof Timber Structural Assessment & Renewal', location: 'Drumcondra, Dublin 9' },
    ];
  }
  if (p.includes('slate')) {
    return [
      { src: '/images/service_slate_chimney.webp', title: 'Traditional Irish Natural Slate Re-Roof', location: 'Sutton, Dublin 13' },
      { src: '/images/client-work-02.webp', title: 'Natural Slate Repair & Valley Flashing', location: 'Clontarf, North Dublin' },
      { src: '/images/client-work-03.webp', title: 'Slipped Slate Replacement & Ridge Securing', location: 'Firhouse, South Dublin' },
      { src: '/images/work-07-slate-roof.jpg', title: 'Detailed Slate Cutting & Weatherproofing', location: 'Dundrum, Dublin 14' },
    ];
  }
  if (p.includes('chimney')) {
    return [
      { src: '/images/service_slate_chimney.webp', title: 'Chimney Stack Repointing & Lead Flashing', location: 'Clontarf, North Dublin' },
      { src: '/images/work-06-chimney-repair.jpg', title: 'Brick Chimney Flashing Repair & Weatherproofing', location: 'Drumcondra, Dublin 9' },
      { src: '/images/work-01-team.jpg', title: 'Safe High-Level Chimney Assessment & Repair', location: 'Rathfarnham, Dublin 14' },
      { src: '/images/client-work-06.webp', title: 'Chimney Back-Gutter & Step Flashing Renewal', location: 'Glasnevin, Dublin 11' },
    ];
  }
  if (p.includes('gutter') || p.includes('fascia')) {
    return [
      { src: '/images/service_guttering.webp', title: 'Seamless Aluminium & PVC Gutter Replacement', location: 'Lucan, Co. Dublin' },
      { src: '/images/client-work-11.webp', title: 'New Fascia, Soffit & Deepflow Gutter System', location: 'Tallaght, South Dublin' },
      { src: '/images/service_dry_verge.webp', title: 'Dry Verge Edge Protection & Gable Sealing', location: 'Blanchardstown, Dublin 15' },
      { src: '/images/roof-cleaning-client-work.webp', title: 'Full Gutter Clear-Out & Downpipe Unblocking', location: 'Knocklyon, Dublin 16' },
    ];
  }
  // Default for roof-repairs and emergency-roof-repairs:
  return [
    { src: '/images/roof-repairs-client-work.webp', title: 'Emergency Storm Damage Repair & Leak Stoppage', location: 'Clontarf, North Dublin' },
    { src: '/images/client-work-09.webp', title: 'Complete Scaffolding & Tile Replacement', location: 'Rathfarnham, South Dublin' },
    { src: '/images/client-work-06.webp', title: 'Gable-End Verge & Ridge Tile Re-Cementing', location: 'Castleknock, West Dublin' },
    { src: '/images/client-work-04.webp', title: 'Under-Felt Tear Repair & Batten Replacement', location: 'Howth, Co. Dublin' },
  ];
}

const dublinZones = [
  {
    title: 'North Dublin',
    areas: ['Clontarf', 'Raheny', 'Killester', 'Howth', 'Sutton', 'Drumcondra', 'Glasnevin', 'Malahide', 'Swords']
  },
  {
    title: 'South Dublin',
    areas: ['Rathfarnham', 'Templeogue', 'Knocklyon', 'Terenure', 'Firhouse', 'Tallaght', 'Dundrum', 'Blackrock']
  },
  {
    title: 'West Dublin',
    areas: ['Lucan', 'Clondalkin', 'Castleknock', 'Blanchardstown', 'Palmerstown', 'Chapelizod']
  }
];

export default function ServicePage({ data, onOpenQuote }) {
  const photos = getServicePhotos(data?.path);

  return (
    <div className="min-h-screen bg-white text-[#0A1E30] flex flex-col font-sans antialiased selection:bg-[#3B6991] selection:text-white">
      <SeoHead title={data.title} description={data.description} path={data.path} service={data} />
      
      {/* 1. Global Announcement / Call TopBar */}
      <TopBar />

      {/* 2. Primary Navigation */}
      <Header onOpenQuote={onOpenQuote} />

      <main className="flex-grow">
        {/* 3. Hero Section with Trust Proof and Dual CTAs */}
        <section className="relative bg-[#0A1E30] text-white py-16 sm:py-24 px-4 sm:px-[6%] overflow-hidden border-b border-[#1E344A]">
          <div className="absolute inset-0 bg-radial-gradient from-[#183B5E]/30 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2942] border border-[#3B6991]/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#A0C4E4] mb-5 shadow-sm">
                <span className="flex text-[#F4B400] gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-white font-bold">5.0 Star Rated</span>
                <span>·</span>
                <span>20+ Years Dublin Experience</span>
              </div>

              <p className="eyebrow-jg text-[#5A8BAF] tracking-widest text-xs sm:text-sm">
                Evercrest Roofing · Dublin & Leinster
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading leading-[1.1] mt-3 tracking-tight text-white">
                {data.heading}
              </h1>

              <p className="text-slate-200 text-base sm:text-xl max-w-2xl mt-5 leading-relaxed font-normal">
                {data.intro}
              </p>

              {/* Highlights row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5A8BAF]" /> 100% Free Inspection
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5A8BAF]" /> Fully Insured & Guaranteed
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#5A8BAF]" /> Fast Dublin Response
                </span>
              </div>

              {/* Dual Action Conversion CTAs */}
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

        {/* 5. Main Content Grid (Service Details + Real Work + Sticky Sidebar) */}
        <section className="py-14 sm:py-20 px-4 sm:px-[6%] bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            
            {/* Left Main Column */}
            <div>
              <div className="border-b border-[#E1E7ED] pb-8 mb-10">
                <div className="eyebrow-jg text-[#3B6991] mb-2">Service Overview</div>
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0A1E30] leading-tight">
                  {data.subheading}
                </h2>
                <p className="text-[#5A6A7A] leading-relaxed text-base sm:text-lg mt-4">
                  {data.body}
                </p>
              </div>

              {/* What We Cover Cards */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0A1E30] mb-5">
                  What Our {data.name} Service Includes
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.points.map((point) => (
                    <div key={point} className="card-jg p-5 border border-[#E1E7ED] hover:border-[#3B6991] transition-colors rounded-xl bg-slate-50/50">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3B6991] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-extrabold font-heading text-[#0A1E30] text-base">{point}</h4>
                          <p className="text-sm text-[#5A6A7A] mt-1 leading-relaxed">
                            Thorough inspection, honest assessment, and quality Irish-tested materials installed by verified Dublin tradesmen.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Dublin Project Photos Section */}
              <div className="mb-14 bg-[#F8FAFC] border border-[#E1E7ED] rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                  <div>
                    <div className="eyebrow-jg text-[#3B6991]">Real Dublin Projects</div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#0A1E30] mt-1">
                      Recent {data.name} Work
                    </h3>
                    <p className="text-sm text-[#5A6A7A] mt-1">
                      A look at actual roofing projects completed recently across Dublin.
                    </p>
                  </div>
                  <a
                    href="/our-work/"
                    className="text-sm font-bold text-[#3B6991] hover:text-[#0A1E30] inline-flex items-center gap-1 shrink-0"
                  >
                    View all projects <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {photos.map((photo, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-xl border border-[#E1E7ED] bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={photo.src}
                          alt={`${photo.title} by Evercrest Roofing in ${photo.location}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-xs text-[#5A8BAF] font-bold uppercase tracking-wider mb-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {photo.location}
                          </span>
                          <span className="bg-[#EEF4F8] text-[#0A2943] px-2 py-0.5 rounded text-[11px] font-extrabold">
                            Completed
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#0A1E30]">
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0A1E30] bg-white border border-[#CBD5E1] hover:border-[#0A1E30] px-5 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-[#3B6991]" />
                    Request a quote for your roof
                  </button>
                </div>
              </div>

              {/* Why Dublin Homeowners Trust Evercrest */}
              <div className="mb-14">
                <div className="eyebrow-jg text-[#3B6991] mb-2">Our Standard</div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#0A1E30] mb-6">
                  Why Choose Evercrest Roofing?
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex gap-4 p-5 rounded-xl border border-[#E1E7ED] bg-white">
                    <Award className="w-8 h-8 text-[#3B6991] shrink-0" />
                    <div>
                      <h4 className="font-bold font-heading text-[#0A1E30]">Over 20 Years' Experience</h4>
                      <p className="text-sm text-[#5A6A7A] mt-1.5 leading-relaxed">
                        Experienced Dublin roofers who understand local housing stock, from Victorian slates to modern dormers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl border border-[#E1E7ED] bg-white">
                    <FileCheck className="w-8 h-8 text-[#3B6991] shrink-0" />
                    <div>
                      <h4 className="font-bold font-heading text-[#0A1E30]">Clear, Fixed Quotes</h4>
                      <p className="text-sm text-[#5A6A7A] mt-1.5 leading-relaxed">
                        No surprise charges or hidden extras. Every cost is set out in writing before any work starts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl border border-[#E1E7ED] bg-white">
                    <ShieldCheck className="w-8 h-8 text-[#3B6991] shrink-0" />
                    <div>
                      <h4 className="font-bold font-heading text-[#0A1E30]">Fully Insured & Guaranteed</h4>
                      <p className="text-sm text-[#5A6A7A] mt-1.5 leading-relaxed">
                        Full public liability insurance cover and long-term written guarantees on all completed roofing projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl border border-[#E1E7ED] bg-white">
                    <ThumbsUp className="w-8 h-8 text-[#3B6991] shrink-0" />
                    <div>
                      <h4 className="font-bold font-heading text-[#0A1E30]">Clean, Tidy Workmanship</h4>
                      <p className="text-sm text-[#5A6A7A] mt-1.5 leading-relaxed">
                        We respect your property, protecting lawns, patios, and gutters, leaving everything spotless after the job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Step Process */}
              <div className="mb-14">
                <div className="eyebrow-jg text-[#3B6991] mb-2">Straightforward Process</div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#0A1E30] mb-6">
                  How We Work With You
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Free On-Site Roof Inspection', desc: 'We inspect the issue, take clear photos, and explain exactly what is going on.' },
                    { step: '2', title: 'Transparent Written Quote', desc: 'You receive an itemised quote with clear options and no pushy sales pressure.' },
                    { step: '3', title: 'Expert Roofing Work', desc: 'Josh, Mick, and the team carry out the agreed work efficiently to the highest standard.' },
                    { step: '4', title: 'Final Inspection & Guarantee', desc: 'We walk through the completed work with you and issue your written guarantee.' },
                  ].map((st) => (
                    <div key={st.step} className="flex gap-4 items-start p-4 rounded-xl border border-[#E1E7ED] bg-slate-50/60">
                      <div className="w-9 h-9 rounded-full bg-[#0A1E30] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {st.step}
                      </div>
                      <div>
                        <h4 className="font-bold font-heading text-[#0A1E30] text-base">{st.title}</h4>
                        <p className="text-sm text-[#5A6A7A] mt-0.5">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Questions FAQs */}
              {data.faqs?.length > 0 && (
                <div>
                  <div className="eyebrow-jg text-[#3B6991] mb-2">Help & Answers</div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#0A1E30] mb-5">
                    Frequently Asked Questions
                  </h3>
                  <div className="divide-y divide-[#E1E7ED] border-t border-b border-[#E1E7ED]">
                    {data.faqs.map((faq) => (
                      <details key={faq.q} className="group py-4 cursor-pointer">
                        <summary className="font-bold font-heading text-base sm:text-lg text-[#0A1E30] flex justify-between items-center gap-4 list-none group-hover:text-[#3B6991] transition-colors">
                          {faq.q}
                          <span className="text-[#3B6991] text-2xl font-normal group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <p className="text-sm sm:text-base text-[#5A6A7A] leading-relaxed mt-3 pr-6">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky High-Converting Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              
              {/* Primary Callout Card */}
              <div className="bg-[#0A1E30] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#1E344A]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5A8BAF]">
                  <Clock className="w-4 h-4 text-[#5A8BAF]" /> Fast Dublin Response
                </div>
                <h3 className="text-2xl font-black font-heading mt-2 leading-tight">
                  Need {data.name} in Dublin?
                </h3>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  Get a fast, honest roof assessment and a written quote. We cover North, South, and West Dublin with zero callout fees for inspections.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="btn-jg w-full bg-[#5A8BAF] hover:bg-[#3B6991] text-white py-3.5 text-base font-extrabold shadow-md"
                  >
                    Request a Free Quote
                  </button>

                  <a
                    href="tel:0852312579"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md border border-white/30 text-white font-extrabold text-sm hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#5A8BAF]" /> Call Direct: 085 231 2579
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
                  <span>Direct to Josh & Mick</span>
                  <span className="text-emerald-400 font-bold">● Taking bookings</span>
                </div>
              </div>

              {/* Direct Trust Credentials Box */}
              <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-[#E1E7ED]">
                <h4 className="font-heading font-extrabold text-[#0A1E30] text-base mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3B6991]" /> Guaranteed Dublin Standards
                </h4>
                <ul className="space-y-3 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% Free Inspection:</strong> No pressure and no hidden fee.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Fully Insured:</strong> Full public liability for total peace of mind.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Irish Weather Tested:</strong> High-grade materials suited for rain & wind.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Local Dublin Tradesmen:</strong> Working across North, South & West Dublin.</span>
                  </li>
                </ul>
              </div>

              {/* Verified Customer Feedback Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#E1E7ED] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F4B400] gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#3B6991] uppercase tracking-wider">
                    Google Review
                  </span>
                </div>
                <p className="text-sm text-[#4A5568] italic leading-relaxed">
                  "Got my new Velux Windows installed by Josh and Mick at Evercrest Roofing. Can't speak highly enough of them both. Quick to respond, did the job in the agreed timeframe, replaced battens and felt. Would highly recommend."
                </p>
                <div className="mt-4 pt-3 border-t border-[#E1E7ED] flex items-center justify-between text-xs">
                  <strong className="text-[#0A1E30]">Philip Jennings</strong>
                  <span className="text-[#7A8896]">Dublin Homeowner</span>
                </div>
              </div>

            </aside>
          </div>
        </section>

        {/* 6. Client-Requested Trust & Google Business Profile Reviews Section */}
        <TrustReviewsSection onOpenQuote={onOpenQuote} />

        {/* 7. Dublin Areas We Cover (Explicit Neighborhoods) */}
        <section className="bg-[#0A1E30] text-white py-16 sm:py-20 px-4 sm:px-[6%] border-t border-[#1E344A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#5A8BAF] font-black uppercase text-xs sm:text-sm tracking-widest font-heading mb-2">
                Local Dublin Coverage
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight mb-3">
                Providing {data.name} Across All Dublin Neighbourhoods
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Our local mobile roofing teams provide rapid inspections and professional repairs across all North, South, and West Dublin communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dublinZones.map((zone) => (
                <div
                  key={zone.title}
                  className="p-6 rounded-xl border border-[#1E344A] bg-[#0F2942]/60 hover:border-[#5A8BAF] transition-colors"
                >
                  <h3 className="text-[#5A8BAF] font-bold text-lg font-heading mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {zone.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.areas.map((area) => (
                      <span
                        key={area}
                        className="text-xs bg-[#1A3857] text-slate-200 px-2.5 py-1 rounded-md font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Complete Leinster Counties Strip */}
            <div className="mt-8 max-w-5xl mx-auto p-4 sm:p-7 rounded-2xl border border-[#1E344A] bg-[#0F2942]/50 shadow-md">
              <div className="text-center mb-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#5A8BAF]">
                  <MapPin className="w-3.5 h-3.5 text-[#5A8BAF]" /> Provincial Leinster Service
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                  We Also Travel Across All 12 Leinster Counties
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                  Mobile roofing teams equipped for emergency repairs, flat roofs, and full re-roofing across Leinster.
                </p>
              </div>

              {/* Responsive 2-column mobile / 4-column desktop grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {[
                  { name: 'Meath', towns: 'Navan, Ashbourne' },
                  { name: 'Kildare', towns: 'Naas, Celbridge' },
                  { name: 'Wicklow', towns: 'Bray, Greystones' },
                  { name: 'Louth', towns: 'Drogheda, Dundalk' },
                  { name: 'Westmeath', towns: 'Mullingar, Athlone' },
                  { name: 'Offaly', towns: 'Tullamore, Edenderry' },
                  { name: 'Laois', towns: 'Portlaoise, Portarlington' },
                  { name: 'Longford', towns: 'Longford Town' },
                  { name: 'Carlow', towns: 'Carlow, Tullow' },
                  { name: 'Kilkenny', towns: 'Kilkenny City' },
                  { name: 'Wexford', towns: 'Wexford, Gorey' },
                  { name: 'Dublin', towns: 'All City & Suburbs' }
                ].map((c) => (
                  <div
                    key={c.name}
                    className="p-2.5 sm:p-3 rounded-lg border border-[#234A70] bg-[#163857]/60 hover:border-[#5A8BAF] transition-colors flex flex-col justify-center"
                  >
                    <span className="font-heading font-extrabold text-white text-xs sm:text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#5A8BAF] shrink-0" />
                      Co. {c.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-300 truncate mt-0.5">
                      {c.towns}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1E344A] text-center">
                <span className="text-[11px] sm:text-xs text-slate-300">
                  ⚡ <strong>Free inspections</strong> arranged for properties across Dublin & Leinster.
                </span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-300 text-sm mb-4">
                Not sure if we cover your area? Give Josh or Mick a quick call.
              </p>
              <a
                href="tel:0852312579"
                className="inline-flex items-center gap-2 text-[#5A8BAF] hover:text-white font-bold text-base transition-colors"
              >
                <Phone className="w-4 h-4" /> Speak with our Dublin team: 085 231 2579
              </a>
            </div>
          </div>
        </section>

        {/* 8. Free Quote Callout Banner */}
        <QuoteBanner onOpenQuote={onOpenQuote} />
      </main>

      {/* 9. Global Footer */}
      <Footer />

      {/* 10. Mobile Sticky Floating Quote Widget */}
      <ChatFloatingWidget onOpenQuote={onOpenQuote} />
    </div>
  );
}
