import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

const guides = {
  '/blog/how-much-does-a-new-roof-cost-in-ireland/': {
    title: 'How Much Does a New Roof Cost in Ireland?',
    description: 'A practical guide to the factors that affect new roof and roof replacement costs in Ireland, including size, materials, access and condition.',
    eyebrow: 'Roof replacement · Cost guide',
    intro: 'What affects the price of a new roof, and what to ask before accepting a quote.',
    sections: [
      ['Why roof replacement prices vary', 'There is no single price for every roof. A small roof over an extension is very different from a large, complex house roof with several valleys, chimneys or roof windows. The final cost depends on the size and shape of the roof, its current condition, the covering selected, access to the property and the work needed underneath the visible surface. A useful quote should explain those factors rather than offering a vague figure with no detail.'],
      ['The main parts of a new roof cost', 'A roof replacement may include removing the existing covering, checking the roof structure, fitting breathable membrane and battens, installing new tiles or slates, renewing leadwork and completing the roof edges. Gutters, fascia, soffits, chimneys and roof windows may also affect the scope when they meet or depend on the roof. Not every project needs all of these items, so the property should be assessed before a final price is agreed.'],
      ['Roofing materials and design', 'Tiles and slates come in different types, sizes and finishes. The existing roof design, local requirements and the structure of the property can affect which materials are suitable. A replacement should look appropriate for the building and provide a practical weatherproof covering. Ask the roofer which options are suitable and why, rather than choosing only by the lowest initial price.'],
      ['Access and preparation', 'Access can affect the time, equipment and preparation required. A roof with clear access may be more straightforward than one surrounded by extensions, narrow entrances or difficult working areas. The quote should make clear whether access equipment, waste removal and preparation are included. This helps prevent unexpected additions after work has started.'],
      ['Repair or replacement?', 'A leak does not automatically mean the whole roof needs replacing. A local repair may be sensible when the damage is limited and the surrounding roof remains in good condition. Replacement may be considered when the covering is extensively worn, leaks keep returning or the underlying roof has deteriorated. A clear assessment should explain both options where they are practical.'],
      ['What to ask for in a quote', 'Ask for the proposed work, materials, preparation, waste removal and any exclusions to be written down. It is also useful to ask how the roof condition was assessed and whether the quote includes related roofline work. Comparing two clear quotes is more useful than comparing two unexplained totals.'],
      ['Request a roof assessment in Dublin and Leinster', 'Evercrest Roofing provides roof repairs, roof replacement, flat roofing, chimney work, guttering and VELUX support across Dublin and Leinster. If you are unsure whether your property needs a repair or a new roof, request a clear assessment before deciding on the next step.'],
    ],
    links: [{ href: '/roof-replacement-dublin/', label: 'Roof Replacement Dublin' }, { href: '/roof-repairs-dublin/', label: 'Roof Repairs Dublin' }],
  },
  '/blog/flat-roof-materials-guide/': {
    title: 'Flat Roof Materials: What Property Owners Should Know',
    description: 'A practical guide to flat roof materials, common problems and the questions to ask before arranging a flat roof repair or replacement in Dublin.',
    eyebrow: 'Flat roofing · Practical guide',
    intro: 'A simple explanation of flat roof coverings, condition checks and the next step when problems appear.',
    sections: [
      ['Why flat roof material matters', 'Flat roofs are designed differently from pitched roofs, so the covering and the way water is directed away from the surface are important. A suitable material should match the roof design, its falls, edges, outlets and the way the building is used. A leak around one area does not always mean the full roof needs replacing, but the wider condition should be checked before applying a quick patch.'],
      ['Common flat roof problems', 'Leaks may develop around seams, edges, outlets, flashing and roof penetrations. Standing water, blistering, cracks, loose coverings and damaged upstands can also indicate that a flat roof needs attention. Water can travel beneath a covering before appearing inside the property, so the visible stain may not identify the exact entry point.'],
      ['Flat roof repair or replacement', 'A local repair may be suitable when the covering and structure are generally sound and the fault is limited. Replacement may be more practical when the covering is extensively worn, the roof has repeated failures or the underlying deck and insulation need attention. The correct choice depends on the roof condition, not only on how large the internal stain looks.'],
      ['Questions to ask a roofing contractor', 'Ask what caused the problem, whether the roof has been checked beyond the visible leak and what repair method is being proposed. A good explanation should cover the affected area, expected preparation, drainage and any limitations. You should also know whether the work is a repair or a larger replacement project before accepting the quote.'],
      ['Flat roofs in Irish weather', 'Rain, wind and temperature changes can expose weak edges, failed joints and poor drainage. Keeping outlets clear and arranging an assessment when water begins to stand or leak can help prevent a small problem becoming a wider one. Do not walk across a flat roof unless it has been designed for safe access.'],
      ['Arrange practical flat roofing advice', 'Evercrest Roofing provides flat roof repairs and replacement support across Dublin and Leinster. If you have a leak, standing water or a worn flat roof, contact the team for a clear assessment and practical next step.'],
    ],
    links: [{ href: '/flat-roofing-dublin/', label: 'Flat Roofing Dublin' }, { href: '/emergency-roof-repairs-dublin/', label: 'Emergency Roof Repairs Dublin' }],
  },
};

export default function GuidePage({ path, onOpenQuote }) {
  const guide = guides[path];
  return <div className="min-h-screen bg-white text-[#0A1E30]">
    <SeoHead title={`${guide.title} | Evercrest Roofing`} description={guide.description} path={path} />
    <Header onOpenQuote={onOpenQuote} />
    <main>
      <section className="bg-[#0A1E30] text-white py-20 sm:py-28 px-4 sm:px-[6%]"><div className="max-w-4xl mx-auto"><p className="eyebrow-jg text-[#7FB1D0]">Evercrest Roofing · Dublin and Leinster</p><h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight mt-4">{guide.title}</h1><p className="text-slate-300 mt-6 text-lg max-w-2xl">{guide.intro}</p></div></section>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B6991] mb-8">{guide.eyebrow}</p>
        <div className="blog-article max-w-none">{guide.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</div>
        <div className="mt-10 flex flex-wrap gap-3">{guide.links.map(link => <a key={link.href} href={link.href} className="btn-outline-jg text-[#0F2942] border-[#0F2942]">{link.label}</a>)}</div>
        <div className="mt-12 rounded-2xl bg-[#F0F5F8] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"><div><h2 className="text-2xl font-black font-heading">Need roofing advice?</h2><p className="text-[#526577] mt-2">Request a clear assessment from Evercrest Roofing.</p></div><button onClick={onOpenQuote} className="btn-jg bg-[#0F2942]">Get a free quote</button></div>
      </article>
    </main>
    <Footer />
  </div>;
}
