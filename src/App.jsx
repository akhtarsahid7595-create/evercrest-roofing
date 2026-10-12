import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import ServicesSection from './components/ServicesSection';
import WhoWeAre from './components/WhoWeAre';
import GallerySection from './components/GallerySection';
import AreasWeCover from './components/AreasWeCover';
import FaqSection from './components/FaqSection';
import QuoteBanner from './components/QuoteBanner';
import Footer from './components/Footer';
import ChatFloatingWidget from './components/ChatFloatingWidget';
import QuotePage from './components/QuotePage';
import ServicePage from './components/ServicePage';
import LocationPage from './components/LocationPage';
import SeoHead from './components/SeoHead';

const servicePages = {
  '/roof-repairs-dublin/': { path: '/roof-repairs-dublin/', title: 'Roof Repairs Dublin | Reliable Roof Leak Repairs | Evercrest Roofing', description: 'Professional roof repairs in Dublin for leaks, slipped tiles, flashing, storm damage and general roof maintenance. Request a free quote from Evercrest Roofing.', name: 'Roof Repairs', heading: 'Professional Roof Repairs in Dublin', intro: 'Fast, honest help for leaking roofs, damaged tiles, flashing problems and general roof deterioration across Dublin.', subheading: 'Roof repairs that protect your home', body: 'A small roof problem can quickly become water damage inside your property. Evercrest Roofing provides practical inspections, clear recommendations and quality repair work for homes and properties across Dublin. We help identify the cause of the problem before recommending a repair or replacement.', points: ['Roof leak repairs', 'Storm and tile damage', 'Lead flashing repairs', 'Roof inspections'], faqs: [{ q: 'What problems can a roof repair address?', a: 'Roof repairs may address leaks, slipped or damaged tiles, flashing problems and storm-related damage. The correct solution depends on the condition of the roof.' }, { q: 'Should I repair or replace my roof?', a: 'A roof inspection can help determine whether a local repair is suitable or whether wider deterioration means replacement should be considered.' }, { q: 'How can I request an assessment?', a: 'Use the quote form or call Evercrest Roofing to describe the issue and arrange the next practical step.' }] },
  '/emergency-roof-repairs-dublin/': { path: '/emergency-roof-repairs-dublin/', title: 'Emergency Roof Repairs Dublin | Rapid Leak Repair | Evercrest Roofing', description: 'Emergency roof repairs in Dublin for leaks, storm damage, fallen tiles and urgent weatherproofing. Call Evercrest Roofing for practical help.', name: 'Emergency Roof Repairs', heading: 'Emergency Roof Repairs in Dublin', intro: 'Urgent help for roof leaks, storm damage, fallen tiles and other problems that cannot wait.', subheading: 'Rapid response when your roof is vulnerable', body: 'When rain is getting into your home, the priority is to limit damage and make the roof safe. We assess the issue, explain the repair and provide a clear next step.', points: ['Urgent leak response', 'Storm damage', 'Fallen and slipped tiles', 'Temporary weatherproofing'] },
  '/flat-roofing-dublin/': { path: '/flat-roofing-dublin/', title: 'Flat Roofing Dublin | Flat Roof Repair & Replacement | Evercrest Roofing', description: 'Flat roofing specialists in Dublin offering flat roof repairs, maintenance and replacement. Contact Evercrest Roofing for a free assessment.', name: 'Flat Roofing', heading: 'Flat Roofing Specialists in Dublin', intro: 'Reliable flat roof repairs, maintenance and replacement for homes, extensions and other properties across Dublin.', subheading: 'Flat roof solutions built for Irish weather', body: 'Flat roofs need the right diagnosis and a durable repair method. We help identify leaks, standing water, damaged edges and worn coverings before recommending the most suitable solution. Our assessment focuses on the source of the problem and the most practical next step.', points: ['Flat roof leak repairs', 'Flat roof replacement', 'Roof edge and flashing work', 'Maintenance inspections'], faqs: [{ q: 'What flat roof problems should be checked?', a: 'Leaks, standing water, damaged edges, failed flashing and worn roof coverings can all indicate that a flat roof needs attention.' }, { q: 'Can a flat roof be repaired instead of replaced?', a: 'That depends on the extent and location of the damage. A condition assessment helps establish whether a repair is suitable or replacement is more practical.' }, { q: 'Do you work on flat roofs for extensions?', a: 'Evercrest Roofing provides flat roofing support for homes, extensions and other properties across Dublin.' }] },
  '/gutter-cleaning-dublin/': { path: '/gutter-cleaning-dublin/', title: 'Gutter Cleaning Dublin | Gutter Maintenance & Prices | Evercrest Roofing', description: 'Professional gutter cleaning in Dublin to remove leaves, moss and blockages and help protect your roofline. Request a quote from Evercrest Roofing.', name: 'Gutter Cleaning', heading: 'Professional Gutter Cleaning in Dublin', intro: 'Remove blockages, prevent overflow and protect your gutters, fascia and walls with professional gutter cleaning.', subheading: 'Keep rainwater moving safely', body: 'Blocked gutters can cause overflowing water, damp marks and damage to fascia and walls. We provide practical gutter cleaning and can identify repair issues while working.', points: ['Gutter blockage removal', 'Moss and leaf clearance', 'Downpipe checks', 'Gutter condition advice'] },
  '/gutter-repairs-dublin/': { path: '/gutter-repairs-dublin/', title: 'Gutter Repairs Dublin | Guttering Replacement & Repairs | Evercrest Roofing', description: 'Gutter repairs and replacement in Dublin for leaks, loose sections, damaged joints and overflowing guttering. Get a free quote from Evercrest Roofing.', name: 'Gutter Repairs', heading: 'Gutter Repairs and Replacement in Dublin', intro: 'Fix leaking, loose or damaged guttering before it causes wider roofline and exterior damage.', subheading: 'Guttering repairs with clear advice', body: 'Whether a joint is leaking, a section has pulled away or the system needs replacing, we identify the cause and explain the practical repair options.', points: ['Leaking joints', 'Loose or sagging gutters', 'Downpipe repairs', 'Gutter replacement'] },
  '/chimney-repairs-dublin/': { path: '/chimney-repairs-dublin/', title: 'Chimney Repairs Dublin | Flashing & Leak Repairs | Evercrest Roofing', description: 'Chimney repairs in Dublin including flashing, repointing and leak-related roof work. Contact Evercrest Roofing for a clear assessment.', name: 'Chimney Repairs', heading: 'Chimney Repairs in Dublin', intro: 'Protect your roof and home with reliable chimney repairs, flashing work and maintenance across Dublin.', subheading: 'Repair chimney problems before they spread', body: 'Damaged pointing, cracked coverings and failed flashing can allow water into the roof structure. We inspect the problem and recommend the right repair for the condition of your chimney.', points: ['Chimney leak repairs', 'Lead flashing repairs', 'Repointing', 'Chimney condition checks'] }
};

const locationPages = {
  '/areas/dublin-city/': { path: '/areas/dublin-city/', area: 'Dublin City', title: 'Roofers Dublin City | Roof Repairs & Roofing Services', description: 'Local roofing services in Dublin City including roof repairs, flat roofing, emergency leaks, guttering and chimney work.', intro: 'Reliable roof repairs and maintenance for homes and properties across Dublin City.', body: 'Evercrest Roofing serves Dublin City with practical roofing advice, responsive repairs and tidy workmanship. Contact us for a clear assessment of your roofing issue.' },
  '/areas/south-dublin/': { path: '/areas/south-dublin/', area: 'South Dublin', title: 'Roofers South Dublin | Roof Repairs & Roofing Services', description: 'Roof repairs and roofing services across South Dublin, including Tallaght, Dundrum, Rathfarnham and Blackrock.', intro: 'Professional roofing services across South Dublin and surrounding communities.', body: 'We provide roof repairs, flat roofing, guttering, chimney work and emergency leak help across South Dublin, with clear communication from assessment to completion.' },
  '/areas/north-dublin/': { path: '/areas/north-dublin/', area: 'North Dublin', title: 'Roofers North Dublin | Roof Repairs & Roofing Services', description: 'Roof repairs and roofing services across North Dublin, including Howth, Malahide, Clontarf and Raheny.', intro: 'Local roofing support for homes and properties across North Dublin and the coast.', body: 'Evercrest Roofing helps property owners across North Dublin with roof leaks, damaged tiles, flat roofs, gutters and chimney repairs.' },
  '/areas/fingal/': { path: '/areas/fingal/', area: 'Fingal', title: 'Roofers Fingal | Roof Repairs & Roofing Services', description: 'Roof repairs and roofing services across Fingal, including Swords, Blanchardstown, Castleknock and surrounding areas.', intro: 'Dependable roofing services across Fingal and North-West Dublin.', body: 'From emergency roof leaks to planned maintenance, we provide straightforward roofing services for homes and properties across Fingal.' }
};

export default function App() {
  const path = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`;
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#quote' ? 'quote' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quote') {
        setCurrentPage('quote');
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenQuotePage = () => {
    window.location.hash = '#quote';
    setCurrentPage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (servicePages[path]) return <ServicePage data={servicePages[path]} onOpenQuote={handleOpenQuotePage} />;
  if (locationPages[path]) return <LocationPage data={locationPages[path]} onOpenQuote={handleOpenQuotePage} />;

  if (currentPage === 'quote') {
    return <QuotePage onGoHome={handleGoHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-[#17201E] selection:bg-[#6FB52C] selection:text-white overflow-x-hidden">
      <SeoHead business title="Roofers Dublin | Roof Repairs & Roofing Contractors | Evercrest Roofing" description="Evercrest Roofing provides roof repairs, flat roofing, emergency roofing, guttering and chimney services across Dublin and Leinster. Request a free quote." />
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header / Navbar */}
      <Header onOpenQuote={handleOpenQuotePage} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero onOpenQuote={handleOpenQuotePage} />

        {/* 4. Features Bar */}
        <FeaturesBar />

        {/* 5. Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuotePage} />

        {/* 6. About Section */}
        <WhoWeAre onOpenQuote={handleOpenQuotePage} />

        {/* 7. Our Gallery Section */}
        <GallerySection onOpenQuote={handleOpenQuotePage} />

        {/* 8. Areas We Cover Section */}
        <AreasWeCover />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Free Quote Callout Banner */}
        <QuoteBanner onOpenQuote={handleOpenQuotePage} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Quote Widget */}
      <ChatFloatingWidget onOpenQuote={handleOpenQuotePage} />
    </div>
  );
}
