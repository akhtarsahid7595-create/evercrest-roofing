import React from 'react';

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      title: "Roof Repairs & Replacement",
      desc: "Durable fixes for leaks, damaged tiles and structural roof problems.",
      img: "/images/roof-repairs-client-work.png", href: "/roof-repairs-dublin/"
    },
    {
      title: "Flat Roofing",
      desc: "Professional flat-roof repair and replacement solutions.",
      img: "/images/flat-roof-client-work.png", href: "/flat-roofing-dublin/"
    },
    {
      title: "Dry Verge & Ridge Systems",
      desc: "Secure, low-maintenance protection for roof edges and ridges.",
      img: "/images/service_dry_verge.jpg"
    },
    {
      title: "Chimney & Valley Repairs",
      desc: "Leadwork, repointing and repairs to vulnerable roof joints.",
      img: "/images/service_slate_chimney.jpg", href: "/chimney-repairs-dublin/"
    },
    {
      title: "Roof Cleaning & Treatment",
      desc: "Moss removal and protective roof treatment.",
      img: "/images/roof-cleaning-client-work.png"
    },
    {
      title: "Fascia, Soffit & Guttering",
      desc: "Rainwater system repairs, cleaning and replacement.",
      img: "/images/service_guttering.jpg", href: "/gutter-repairs-dublin/"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">Our Services</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E30] font-heading leading-tight mb-2">
            Our Professional Roofing Services
          </h2>
          <p className="text-[#5A6A7A] text-sm sm:text-base font-normal">
            Complete roofing and exterior services, from individual repairs to larger roofing projects.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {services.map((srv, idx) => (
            <a href={srv.href || '#contact'}
              key={idx}
              className="card-jg cursor-pointer group"
            >
              <div 
                role="img"
                aria-label={`${srv.title} service example`}
                className="h-[155px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${srv.img}')` }}
              />
              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-bold text-[#0A1E30] font-heading group-hover:text-[#3B6991] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-[#5A6A7A] text-sm leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
