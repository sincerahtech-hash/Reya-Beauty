import React, { useState } from 'react';
import { ProductFilter, FilterOption } from '../components/products/ProductFilter';
import { ProductGrid } from '../components/products/ProductGrid';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

interface WigsPageProps {
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WigsPage: React.FC<WigsPageProps> = ({ onSelectProduct, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all-wigs');
  const allWigs = getProductsByCategory('wigs');

  const filterOptions: FilterOption[] = [
    { id: 'all-wigs', label: 'ALL WIGS' },
    { id: 'body-wave', label: 'BODY WAVE' },
    { id: 'straight', label: 'STRAIGHT' },
    { id: 'deep-wave', label: 'DEEP WAVE' },
    { id: 'curly', label: 'CURLY' },
    { id: 'closure-wigs', label: 'CLOSURE WIGS' }
  ];

  const filteredWigs =
    activeFilter === 'all-wigs'
      ? allWigs
      : allWigs.filter((wig) => wig.subcategory === activeFilter);

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero Section matching Figma screenshot */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-4 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content Card matching Figma */}
            <div className="lg:col-span-6 bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-white/60">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight leading-[1.15] mb-4 sm:mb-6">
                Find your signature wig.
              </h1>
              <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed max-w-md">
                Explore premium human-hair wigs in styles and textures selected for everyday confidence, special occasions and your own unique look.
              </p>
            </div>

            {/* Right Editorial Visual Box matching Figma */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[#E2C9CF]">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
                  alt="Reya Beauty Signature Wig Editorial"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Wigs Catalog Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Heading matching Figma: "Shop wigs" */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#211217] font-medium tracking-tight">
            Shop wigs
          </h2>
        </div>

        {/* Filter Pills matching Figma */}
        <div className="mb-10 sm:mb-14">
          <ProductFilter
            options={filterOptions}
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
          />
        </div>

        {/* 6 Product Cards Grid matching Figma */}
        <ProductGrid
          products={filteredWigs}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      </section>

      {/* Consultation CTA Banner matching Figma */}
      <WhatsAppCTA
        title="Not sure which wig is right for you?"
        description="Chat with Reya Beauty for style guidance, availability and current pricing."
        buttonText="CHAT WITH US ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I am exploring your wigs collection and would love personal style guidance and availability details."
      />
    </div>
  );
};
