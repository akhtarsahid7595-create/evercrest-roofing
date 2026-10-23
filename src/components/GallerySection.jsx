import React from 'react';

export default function GallerySection({ onOpenQuote }) {
  const projectImages = [
    { src: '/images/client-work-01.webp', alt: 'Flat roof installation with rooflights in Dublin' },
    { src: '/images/client-work-02.webp', alt: 'Slate roof and Velux roof window work' },
    { src: '/images/client-work-03.webp', alt: 'Slate roof repair and roof window installation' },
    { src: '/images/client-work-04.webp', alt: 'Roof membrane and batten installation' },
    { src: '/images/client-work-05.webp', alt: 'Completed flat roof with rooflights' },
    { src: '/images/client-work-06.webp', alt: 'Roofline and gable-end roofing work' },
    { src: '/images/client-work-07.webp', alt: 'Flat roof detailing around rooflights' },
    { src: '/images/client-work-08.webp', alt: 'Roof replacement with breathable roofing membrane' },
    { src: '/images/client-work-09.webp', alt: 'Scaffolding and roof repair project' },
    { src: '/images/client-work-10.webp', alt: 'Roof stripped back during replacement work' },
    { src: '/images/client-work-11.webp', alt: 'New roof edge and guttering work' }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">Our Gallery</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17201E] font-heading leading-tight mb-2">
            What We've Done
          </h2>
          <p className="text-[#697372] text-sm sm:text-base font-normal">
            A selection of real roofing and roof repair projects completed by Evercrest Roofing.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
          {projectImages.map((image) => (
            <button
              type="button"
              key={image.src}
              onClick={onOpenQuote}
              className="group aspect-[4/3] overflow-hidden rounded-[9px] bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B6991]"
              aria-label={`Request a quote after viewing: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
