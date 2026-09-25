import React, { useState } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = images[selectedIndex] || images[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Frame */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl bg-[#EBE3E6] overflow-hidden border border-[#E0D2D6]/80 group">
        <img
          src={activeImage}
          alt={`${productName} view ${selectedIndex + 1}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        />

        {/* Zoom button */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 text-[#401525] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
          aria-label="Enlarge image"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Prev / Next controls for multiple images */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-[#211217] shadow-sm transition-transform active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-[#211217] shadow-sm transition-transform active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                selectedIndex === idx
                  ? 'border-[#401525] shadow-xs scale-102 ring-1 ring-[#401525]/20'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-[#211217]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl">
            <img
              src={activeImage}
              alt={`${productName} large view`}
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs uppercase tracking-wider hover:bg-black/80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
