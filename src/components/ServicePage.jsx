import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

export default function ServicePage({ data, onOpenQuote }) {
  return <div className="min-h-screen bg-white text-[#0A1E30]">
    <SeoHead title={data.title} description={data.description} path={data.path} service={data} />
    <Header onOpenQuote={onOpenQuote} />
    <main>
      <section className="bg-[#0A1E30] text-white py-20 sm:py-28 px-4 sm:px-[6%]">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow-jg text-[#5A8BAF]">Evercrest Roofing · Dublin</p>
          <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight mt-4 max-w-4xl">{data.heading}</h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mt-6 leading-relaxed">{data.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={onOpenQuote} className="btn-jg bg-[#5A8BAF] hover:bg-[#3B6991]">Request a free quote</button>
            <a href="tel:0852312579" className="btn-outline-jg">Call 085 231 2579</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 px-4 sm:px-[6%]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading mb-5">{data.subheading}</h2>
            <p className="text-[#5A6A7A] leading-relaxed mb-8">{data.body}</p>
            <div className="grid sm:grid-cols-2 gap-4">{data.points.map(point => <div key={point} className="card-jg p-5"><h3 className="font-bold font-heading">{point}</h3><p className="text-sm text-[#5A6A7A] mt-2">Clear advice, quality materials and tidy workmanship from a local Dublin roofing team.</p></div>)}</div>
            {data.faqs?.length > 0 && <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-black font-heading mb-5">Common questions</h2>
              <div className="divide-y divide-[#E1E7ED] border-t border-b border-[#E1E7ED]">
                {data.faqs.map((faq) => <details key={faq.q} className="group py-4 cursor-pointer">
                  <summary className="font-bold font-heading flex justify-between gap-4 list-none">{faq.q}<span className="text-[#3B6991] text-xl group-open:rotate-45">+</span></summary>
                  <p className="text-sm text-[#5A6A7A] leading-relaxed mt-3">{faq.a}</p>
                </details>)}
              </div>
            </div>}
          </div>
          <aside className="bg-[#F5F7FA] rounded-xl p-7 h-fit"><h2 className="text-2xl font-black font-heading">Need roofing help?</h2><p className="text-[#5A6A7A] mt-3">Tell us what is happening and we will arrange a practical next step.</p><button onClick={onOpenQuote} className="btn-jg w-full mt-6">Get a free quote</button><a href="tel:0852312579" className="block text-center text-[#3B6991] font-bold mt-4">085 231 2579</a></aside>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
