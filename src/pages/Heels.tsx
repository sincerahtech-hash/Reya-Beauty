import React, { useState } from 'react';
import { ProductFilter, FilterOption } from '../components/products/ProductFilter';
import { ProductGrid } from '../components/products/ProductGrid';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

interface HeelsPageProps {
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product) => void;
}

export const HeelsPage: React.FC<HeelsPageProps> = ({ onSelectProduct, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all-heels');
  const allHeels = getProductsByCategory('heels');

  const filterOptions: FilterOption[] = [
    { id: 'all-heels', label: 'ALL HEELS' },
    { id: 'stilettos', label: 'STILETTOS' },
    { id: 'block-heels', label: 'BLOCK HEELS' },
    { id: 'platform', label: 'PLATFORM' },
    { id: 'sandals', label: 'SANDALS' }
  ];

  const filteredHeels =
    activeFilter === 'all-heels'
      ? allHeels
      : allHeels.filter((heel) => heel.subcategory === activeFilter);

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-4 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content Card */}
            <div className="lg:col-span-6 bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-white/60">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight leading-[1.15] mb-4 sm:mb-6">
                Step into effortless confidence.
              </h1>
              <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed max-w-md">
                Complete your look with our curated collection of statement heels, minimalist mules, and evening sandals tailored for balance and elevated style.
              </p>
            </div>

            {/* Right Editorial Visual Box */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[#E2C9CF]">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85"
                  alt="Reya Beauty Luxury Heels Collection"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#211217] font-medium tracking-tight">
            Shop Heels
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="mb-10 sm:mb-14">
          <ProductFilter
            options={filterOptions}
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
          />
        </div>

        {/* Grid */}
        <ProductGrid
          products={filteredHeels}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      </section>

      {/* Consultation CTA */}
      <WhatsAppCTA
        title="Need sizing or styling guidance?"
        description="Connect directly with our team on WhatsApp for shoe sizing support, in-stock sizes, and matching options."
        buttonText="CHAT WITH US ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I would like to check heel sizes and availability."
      />
    </div>
  );
};
