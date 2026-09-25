import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'ALL LOOKS' },
    { id: 'wigs', label: 'WIGS & LACE' },
    { id: 'bundles', label: 'BUNDLES' },
    { id: 'heels', label: 'HEELS' },
    { id: 'editorial', label: 'EDITORIAL' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero */}
      <section className="pt-8 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-6 sm:p-10 lg:p-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#401525] text-xs font-semibold uppercase tracking-widest border border-white/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Journal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight">
            The Reya Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#6E5B63] max-w-md mx-auto mt-2 leading-relaxed">
            An editorial curation of signature installs, melted lace hairlines, and evening footwear styling.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#401525] text-white shadow-xs'
                  : 'bg-[#EAE1E4] text-[#401525] hover:bg-[#E0D2D6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#EAE1E4] border border-[#E0D2D6] relative shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211217]/80 via-[#211217]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#F2E1E5] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-[#F2E1E5]/90 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#F2E1E5] font-semibold">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#211217]/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-40"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-40"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Card */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[72vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Info Bar */}
            <div className="mt-4 text-center max-w-lg text-white">
              <h3 className="font-serif text-xl font-medium">{activeItem.title}</h3>
              {activeItem.description && (
                <p className="text-xs sm:text-sm text-[#F2E1E5]/80 mt-1">
                  {activeItem.description}
                </p>
              )}

              <div className="mt-4">
                <a
                  href={getWhatsAppUrl(`Hello Reya Beauty, I saw "${activeItem.title}" in your gallery and would love to ask about creating this look.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#401525] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#581D33] border border-[#6B3245]"
                >
                  <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                  <span>Enquire About This Look</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation CTA */}
      <WhatsAppCTA
        title="Ready to recreate one of these looks?"
        description="Share a screenshot or the name of any style with our Lilongwe stylists on WhatsApp for instant guidance."
        buttonText="CHAT ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I was looking through your gallery and want to order a similar wig style."
      />
    </div>
  );
};
