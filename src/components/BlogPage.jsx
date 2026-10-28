import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

const article = {
  title: 'What to Do When Your Roof Is Leaking',
  path: '/blog/what-to-do-when-your-roof-is-leaking/',
  description: 'A practical guide for Dublin and Leinster homeowners explaining what to do when a roof starts leaking and when to call a roofing professional.',
};

function BlogShell({ children, onOpenQuote, articleView = false }) {
  return <div className="min-h-screen bg-white text-[#0A1E30]">
    <SeoHead title={articleView ? `${article.title} | Evercrest Roofing` : 'Roofing Advice Blog | Evercrest Roofing'} description={articleView ? article.description : 'Practical roofing advice from Evercrest Roofing for homeowners across Dublin and Leinster.'} path={articleView ? article.path : '/blog/'} />
    <Header onOpenQuote={onOpenQuote} />
    {children}
    <Footer />
  </div>;
}

export default function BlogPage({ onOpenQuote, articleView = false }) {
  if (articleView) return <BlogShell onOpenQuote={onOpenQuote} articleView>
    <main>
      <section className="bg-[#0A1E30] text-white py-20 sm:py-28 px-4 sm:px-[6%]">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow-jg text-[#7FB1D0]">Evercrest Roofing · Advice</p>
          <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight mt-4">{article.title}</h1>
          <p className="text-slate-300 mt-6 text-lg">A practical guide for homeowners in Dublin and Leinster.</p>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B6991] mb-8">Roof repairs · Emergency advice</p>
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-[#0A1E30] prose-p:text-[#526577] prose-p:leading-relaxed">
          <p>A leaking roof can be stressful, especially when rain is still falling and you are unsure whether the problem is small or serious. The first priority is to keep people safe, limit damage inside the property and arrange a proper assessment. A visible drip does not always show the exact point where water entered the roof, so quick but careful action is important.</p>
          <h2>1. Stay safe and protect the area</h2>
          <p>If water is close to lights, sockets or electrical equipment, keep away from the area and contact a qualified professional if you are concerned about electrical safety. Do not climb onto the roof during rain, strong wind or poor visibility. Roof coverings can be slippery, and storm damage may make tiles, slates, gutters or roof edges unstable.</p>
          <p>Inside the property, move furniture, electronics and personal items away from the leak if it is safe to do so. Place a container under a steady drip and use towels to protect floors. If the ceiling is bulging, do not stand underneath it. A saturated ceiling may need urgent attention, and it is safer to keep the area clear until it has been assessed.</p>
          <h2>2. Note what is happening</h2>
          <p>Try to record when the leak appears and what the weather is doing. Does it happen only during heavy rain, after wind, or whenever the roof is wet? Note the room affected, the approximate location of the water mark and whether the problem is near a chimney, roof window, valley, gutter or flat-roof edge.</p>
          <p>Photographs and short videos from inside the property can help a roofer understand the issue before visiting. Do not take risks to photograph the outside of the roof. A picture from the ground may be useful, but a safe professional inspection is more reliable than trying to investigate from a ladder.</p>
          <h2>3. Common causes of a roof leak</h2>
          <p>Roof leaks can have several causes. Missing, cracked or slipped tiles and slates may allow rainwater beneath the roof covering. Flashing around chimneys, walls and roof windows can deteriorate or become displaced. Blocked or damaged gutters may cause water to overflow against the roof edge, fascia or external wall. Flat roofs may develop problems around seams, edges, outlets or worn coverings.</p>
          <p>A chimney can also be involved when pointing, a chimney covering or lead flashing has failed. Water may travel along roof timbers before appearing on an internal ceiling, which is why the visible stain is not always directly below the outside defect. Repeatedly sealing the inside of a room may hide the symptom without resolving the source.</p>
          <h2>4. Avoid temporary fixes that create bigger problems</h2>
          <p>It is understandable to want to stop a leak immediately, but climbing onto a wet roof or applying household sealant without finding the cause can make matters worse. Do not remove tiles, disturb flashing or walk across a flat roof unless you are trained and have the right safety equipment. A temporary measure may be appropriate in an emergency, but it should be followed by a proper repair assessment.</p>
          <h2>5. When to request emergency help</h2>
          <p>Contact a roofing professional promptly if water is entering living areas, a roof covering has been blown away, the ceiling is damaged, a chimney has become unstable, or the leak is getting worse. Storm damage, fallen tiles and active water ingress should not be left until the next convenient day if they could lead to wider internal or structural damage.</p>
          <p>Explain the situation clearly when you call. Mention whether the issue is active, whether the property is safe to access, and whether you can see missing tiles, damaged gutters or a problem around a chimney or roof window. This helps the roofing team understand the urgency and prepare for the assessment.</p>
          <h2>6. Repair or replacement?</h2>
          <p>Not every leak means the whole roof needs replacing. A localised problem may be suitable for a repair when the surrounding roof remains in good condition. Replacement may be considered when damage is widespread, the roof covering is near the end of its useful life, leaks keep returning or the underlying structure has deteriorated.</p>
          <p>The right decision depends on the roof’s condition, age, covering, access and previous repair history. A useful assessment should explain the problem, the practical options and the likely scope of work. It should not pressure a homeowner into choosing a larger project when a suitable repair is available.</p>
          <h2>7. What to prepare for a roofing assessment</h2>
          <p>Make a short record of when the leak started, any previous repairs and the rooms affected. Keep photographs of internal damage and note whether the problem changes during different weather. Make sure the roofer can safely access the relevant areas of the property, and ask what the assessment will include before work begins.</p>
          <h2>Get practical roofing help in Dublin and Leinster</h2>
          <p>A roof leak should be investigated rather than ignored. Early advice can help limit water damage and clarify whether the right solution is a repair, temporary weatherproofing or a larger roofing project. Evercrest Roofing provides roof repairs, emergency roof repairs, flat roofing, chimney repairs, gutter services, roof replacement and VELUX support across Dublin and Leinster.</p>
          <p>If your roof is leaking, contact Evercrest Roofing to describe the problem and arrange the next practical step. For immediate danger, keep people away from unsafe areas and contact the appropriate emergency service.</p>
        </div>
        <div className="mt-12 rounded-2xl bg-[#F0F5F8] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div><h2 className="text-2xl font-black font-heading">Need help with a leaking roof?</h2><p className="text-[#526577] mt-2">Request a clear assessment from Evercrest Roofing.</p></div>
          <button onClick={onOpenQuote} className="btn-jg bg-[#0F2942]">Get a free quote</button>
        </div>
      </article>
    </main>
  </BlogShell>;

  return <BlogShell onOpenQuote={onOpenQuote}>
    <main>
      <section className="bg-[#0A1E30] text-white py-20 sm:py-24 px-4 sm:px-[6%]"><div className="max-w-6xl mx-auto"><p className="eyebrow-jg text-[#7FB1D0]">Evercrest Roofing · Dublin and Leinster</p><h1 className="text-5xl sm:text-7xl font-black font-heading mt-4">Roofing Advice</h1><p className="text-slate-300 text-lg max-w-2xl mt-6">Clear, practical information to help you understand roof repairs, maintenance and replacement.</p></div></section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"><div className="grid lg:grid-cols-[1fr_320px] gap-12"><div><div className="border border-[#E1E7ED] rounded-2xl overflow-hidden shadow-sm"><div className="h-3 bg-[#5A8BAF]"/><div className="p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B6991]">Roof repairs · Emergency advice</p><h2 className="text-3xl sm:text-4xl font-black font-heading mt-3">{article.title}</h2><p className="text-[#526577] leading-relaxed mt-5">A practical guide explaining what to do when water enters your home, how to stay safe, and when to arrange a professional roof assessment.</p><a href={article.path} className="inline-flex mt-7 btn-jg bg-[#0F2942]">Read the guide</a></div></div></div><aside className="h-fit rounded-2xl bg-[#F0F5F8] p-7"><h2 className="text-2xl font-black font-heading">Need roofing help?</h2><p className="text-[#526577] mt-3 leading-relaxed">Tell us what is happening and we will arrange a practical next step.</p><button onClick={onOpenQuote} className="btn-jg bg-[#0F2942] w-full mt-6">Get a free quote</button><h3 className="font-bold font-heading mt-8 mb-3">Topics</h3><div className="flex flex-wrap gap-2"><span className="px-3 py-1 rounded-full bg-white text-sm text-[#3B6991]">Roof repairs</span><span className="px-3 py-1 rounded-full bg-white text-sm text-[#3B6991]">Emergency help</span><span className="px-3 py-1 rounded-full bg-white text-sm text-[#3B6991]">Maintenance</span></div></aside></div></section>
    </main>
  </BlogShell>;
}
