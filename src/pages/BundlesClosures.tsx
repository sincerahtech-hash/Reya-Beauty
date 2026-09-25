import React, { useState } from 'react';
import { ProductFilter, FilterOption } from '../components/products/ProductFilter';
import { ProductGrid } from '../components/products/ProductGrid';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

interface BundlesClosuresPageProps {
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product) => void;
}

export const BundlesClosuresPage: React.FC<BundlesClosuresPageProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const allItems = getProductsByCategory('bundles-closures');

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'ALL' },
    { id: 'body-wave', label: 'BODY WAVE' },
    { id: 'straight', label: 'STRAIGHT' },
    { id: 'deep-wave', label: 'DEEP WAVE' },
    { id: 'curly', label: 'CURLY' },
    { id: 'closures', label: 'CLOSURES' }
  ];

  const filteredItems =
    activeFilter === 'all'
      ? allItems
      : allItems.filter((item) => item.subcategory === activeFilter);

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero Section matching visual language */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-4 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content Card */}
            <div className="lg:col-span-6 bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-white/60">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight leading-[1.15] mb-4 sm:mb-6">
                Elevate your look with premium bundles.
              </h1>
              <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed max-w-md">
                Experience full density, silky flow, and long-lasting quality with our unprocessed virgin human-hair bundles and invisible HD lace closures.
              </p>
            </div>

            {/* Right Editorial Visual Box */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[#E2C9CF]">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
                  alt="Reya Beauty Virgin Bundles and Closures"
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
            Bundles & Closures
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
          products={filteredItems}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      </section>

      {/* Consultation CTA Banner */}
      <WhatsAppCTA
        title="Not sure what to pair together?"
        description="Chat with Reya Beauty for bundle bundle-to-closure matching, length suggestions, and current pricing."
        buttonText="CHAT WITH US ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I need help pairing bundles and a closure for my sew-in install."
      />
    </div>
  );
};
