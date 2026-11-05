import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

const workItems = [
  { image: '/images/work-01-team.jpg', alt: 'Evercrest Roofing team member working at a roofline', title: 'Roofline and chimney work', category: 'Roofing work', href: '/chimney-repairs-dublin/', link: 'Chimney repairs' },
  { image: '/images/work-02-velux-interior.jpg', alt: 'VELUX roof window viewed from inside a room', title: 'VELUX roof window', category: 'Roof windows', href: '/velux-window-repairs-dublin/', link: 'VELUX window repairs' },
  { image: '/images/work-03-velux-installation.jpg', alt: 'VELUX roof window fitted into a slate roof', title: 'Roof window installation', category: 'Roof windows', href: '/velux-window-repairs-dublin/', link: 'VELUX window repairs' },
  { image: '/images/work-04-roof-structure.jpg', alt: 'Timber roof structure under construction', title: 'Roof structure work', category: 'Roofing work', href: '/roof-replacement-dublin/', link: 'Roof replacement' },
  { image: '/images/work-05-roof-battens.jpg', alt: 'Roof battens and breathable membrane beside a chimney', title: 'Roof preparation and battens', category: 'Roofing work', href: '/roof-replacement-dublin/', link: 'Roof replacement' },
  { image: '/images/work-06-chimney-repair.jpg', alt: 'Roof repair around an older brick chimney', title: 'Chimney and roof repairs', category: 'Roofing work', href: '/chimney-repairs-dublin/', link: 'Chimney repairs' },
  { image: '/images/work-07-slate-roof.jpg', alt: 'Slate roof with an opening prepared for a roof window', title: 'Slate roof and roof window work', category: 'Roof windows', href: '/slate-roof-repair-dublin/', link: 'Slate roof repair' },
  { image: '/images/work-08-flat-roof.jpg', alt: 'Flat roof membrane with rooflight openings', title: 'Flat roof preparation', category: 'Flat roofing', href: '/flat-roofing-dublin/', link: 'Flat roofing' },
];

export default function WorkShowcasePage({ onOpenQuote }) {
  return (
    <div className="min-h-screen bg-white text-[#17201E] font-sans antialiased">
      <SeoHead title="Our Roofing Work Dublin | Evercrest Roofing" description="See real roofing, roof repair, VELUX and flat roofing work from Evercrest Roofing across Dublin and Leinster." />
      <Header onOpenQuote={onOpenQuote} />
      <main>
        <section className="bg-[#0A1E30] px-4 py-20 text-white sm:px-[6%] sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow-jg mb-4 text-[#8EB4D4]">Evercrest Roofing · Real work</p>
              <h1 className="font-heading text-4xl font-black leading-tight sm:text-6xl">Our Roofing Work</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C7D5E2]">A selection of real roofing, roof-window and flat-roof work supplied by Evercrest Roofing. Take a look at the work behind the service.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-[6%] sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow-jg mb-2">Recent projects</p>
              <h2 className="font-heading text-3xl font-black text-[#0A1E30] sm:text-4xl">A closer look at our work</h2>
              <p className="mt-4 leading-relaxed text-[#697372]">Every roof has its own story. These photos show different stages of roofing and roof-window work, from preparation through to the finished detail.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workItems.map((item) => (
                <article key={item.image} className="overflow-hidden rounded-2xl border border-[#E1E7ED] bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B6991]">{item.category}</p>
                    <h3 className="mt-2 font-heading text-xl font-extrabold text-[#0A1E30]">{item.title}</h3>
                    <a href={item.href} className="mt-3 inline-flex text-sm font-bold text-[#3B6991] hover:text-[#0A1E30]">Explore {item.link} <span aria-hidden="true" className="ml-1">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F7FA] px-4 py-14 sm:px-[6%] sm:py-18">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow-jg mb-2">Related services</p>
            <h2 className="font-heading text-3xl font-black text-[#0A1E30]">See the service behind the work</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[['Roof repairs', '/roof-repairs-dublin/'], ['Roof replacement', '/roof-replacement-dublin/'], ['VELUX window repairs', '/velux-window-repairs-dublin/'], ['Chimney repairs', '/chimney-repairs-dublin/'], ['Flat roofing', '/flat-roofing-dublin/'], ['Slate roof repair', '/slate-roof-repair-dublin/']].map(([label, href]) => <a key={href} href={href} className="rounded-full border border-[#C9D6E0] bg-white px-4 py-2 text-sm font-bold text-[#0A2943] transition hover:border-[#0A2943] hover:bg-[#0A2943] hover:text-white">{label}</a>)}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-[6%] sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#EEF4F8] p-8 sm:flex-row sm:items-center sm:p-12">
            <div><h2 className="font-heading text-2xl font-black text-[#0A1E30] sm:text-3xl">Planning roofing work?</h2><p className="mt-2 text-[#536B83]">Tell us what is happening and we will arrange a practical next step.</p></div>
            <button type="button" onClick={onOpenQuote} className="rounded-md bg-[#0A2943] px-6 py-3 font-bold text-white transition hover:bg-[#163D5C]">Book a roofing assessment</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
