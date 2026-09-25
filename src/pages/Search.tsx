import React, { useState } from 'react';
import { Search as SearchIcon, MessageCircle } from 'lucide-react';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../data/products';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Product } from '../types';

interface SearchPageProps {
  initialQuery?: string;
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  initialQuery = '',
  onSelectProduct,
  onAddToCart
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const query = searchTerm.trim().toLowerCase();
  const results = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.subcategory.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : PRODUCTS;

  return (
    <div className="min-h-screen bg-[#F9F5F1] py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#211217] font-semibold tracking-tight mb-4">
            Search Our Boutique
          </h1>

          <div className="relative max-w-lg mx-auto">
            <SearchIcon className="w-5 h-5 text-[#401525] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by hair texture, lace type, heels..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-[#DEC3CA] text-sm text-[#211217] placeholder:text-[#8A767E] shadow-xs focus:outline-none focus:ring-1 focus:ring-[#401525]"
            />
          </div>

          <div className="mt-4 text-xs text-[#735F67]">
            {query ? (
              <span>
                Found <strong className="text-[#401525]">{results.length}</strong> {results.length === 1 ? 'result' : 'results'} for "{searchTerm}"
              </span>
            ) : (
              <span>Showing all available collections ({results.length} products)</span>
            )}
          </div>
        </div>

        {/* Results or Empty State */}
        {results.length > 0 ? (
          <ProductGrid
            products={results}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
          />
        ) : (
          <div className="max-w-md mx-auto text-center py-16 px-6 bg-white rounded-3xl border border-[#E5D2D7] shadow-xs space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#211217]">
              We couldn't find what you're looking for.
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5B63] leading-relaxed">
              We frequently receive new arrivals, custom density wigs, and customized bundle lengths not yet listed online.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(`Hello Reya Beauty, I searched your website for "${searchTerm}" and would like to ask if you have this in stock.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#401525] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#581D33] shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
