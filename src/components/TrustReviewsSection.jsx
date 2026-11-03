import React from 'react';
import { Star, ShieldCheck, Clock3, ArrowUpRight } from 'lucide-react';

const reviews = [
  { name: 'Lucymay', time: '3 days ago', headline: 'Great price', text: 'Professional job. Had water ingress at my chimney and these guys did a great job. Also had them re cement all ridge tiles and leave my roof safe and secure. Highly recommended.', initial: 'L' },
  { name: 'Philip Jennings', time: '6 days ago', headline: 'Great price', text: "Got my two new Velux Windows installed by Josh and Mick at Evercrest Roofing and can't speak highly enough of them both. Quick to respond/come out to price up the job and also did the job in the timeframe agreed. Also replaced all the battens on the existing roof and put new felt down replacing the old felt. Would highly recommend", initial: 'P' },
  { name: 'Jason Lattimer', time: '7 days ago', headline: 'Reasonable price', text: 'Professional service from Josh. Easy to communicate with and high standard of work. Tidied up after the job. Would recommend!', initial: 'J' },
  { name: 'Una Boyd', time: '2 weeks ago', headline: 'Great price · €1,500–2,000', text: 'I am delighted with the prompt and professional job done repairing my kitchen roof. The team were very polite throughout and cleaned up totally when finished. Would definitely recommend', initial: 'U' },
];

function Stars() { return <div className="flex gap-0.5 text-[#F4B400]" aria-label="5 star review">{[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}</div>; }

export default function TrustReviewsSection({ onOpenQuote }) {
  return <section id="reviews" className="py-16 sm:py-20 bg-[#F5F7FA] border-y border-[#E1E7ED]">
    <div className="max-w-7xl mx-auto px-4 sm:px-[6%]">
      <div className="grid lg:grid-cols-[0.85fr_1.6fr] gap-10 lg:gap-14 items-start">
        <div>
          <p className="eyebrow-jg text-[#3B6991]">Experience and customer feedback</p>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0A1E30] mt-3 leading-tight">Roofing experience you can feel confident about.</h2>
          <p className="text-[#5A6A7A] leading-relaxed mt-5">With more than 20 years of roofing experience, Evercrest Roofing helps homeowners across Dublin and Leinster make clear, practical decisions about their roofs.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 mt-7">
            <div className="flex gap-3 items-center rounded-xl bg-white border border-[#E1E7ED] p-4"><ShieldCheck className="w-6 h-6 text-[#3B6991] shrink-0" /><div><p className="font-bold font-heading text-[#0A1E30]">20+ years’ experience</p><p className="text-xs text-[#5A6A7A] mt-1">Practical knowledge across roofing work and repairs.</p></div></div>
            <div className="flex gap-3 items-center rounded-xl bg-white border border-[#E1E7ED] p-4"><Clock3 className="w-6 h-6 text-[#3B6991] shrink-0" /><div><p className="font-bold font-heading text-[#0A1E30]">Clear, local service</p><p className="text-xs text-[#5A6A7A] mt-1">Straightforward communication from assessment to completion.</p></div></div>
          </div>
          <button onClick={onOpenQuote} className="btn-jg bg-[#0F2942] mt-7">Request a free quote</button>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B6991]">Google Business Profile</p><h3 className="text-2xl font-black font-heading text-[#0A1E30] mt-2">What customers are saying</h3></div><div className="flex items-center gap-3"><Stars /><span className="text-sm font-bold text-[#526577]">Real customer reviews</span></div></div>
          <div className="grid md:grid-cols-2 gap-4">{reviews.map(review => <article key={review.name} className="bg-white rounded-xl border border-[#E1E7ED] p-5 shadow-sm"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-bold">{review.initial}</div><div><h4 className="font-bold font-heading text-[#0A1E30]">{review.name}</h4><p className="text-xs text-[#7A8896]">{review.time}</p></div></div><div className="flex items-center gap-3 mt-4"><Stars /><span className="text-xs text-[#7A8896]">Google review</span></div><p className="font-bold text-sm text-[#0A1E30] mt-3">{review.headline}</p><p className="text-sm leading-relaxed text-[#526577] mt-2">{review.text}</p></article>)}</div>
          <p className="text-xs text-[#7A8896] mt-4">Reviews shown from the Evercrest Roofing Google Business Profile. Read the latest reviews on Google.</p>
        </div>
      </div>
    </div>
  </section>;
}
