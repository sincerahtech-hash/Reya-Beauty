import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (slug: string) => void;
  onExecuteFullSearch: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onExecuteFullSearch
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matchingProducts: Product[] = trimmed
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(trimmed) ||
          p.tagline.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.subcategory.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
        );
      })
    : [];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      onExecuteFullSearch(query.trim());
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#211217]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative min-h-screen px-4 pt-16 sm:pt-24 pb-12 flex justify-center items-start">
        <div className="relative w-full max-w-2xl bg-[#FAF5F2] rounded-3xl shadow-2xl border border-[#E5D2D7] overflow-hidden">
          {/* Input Header */}
          <div className="p-4 sm:p-6 border-b border-[#E5D2D7] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#401525]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search wigs, bundles, closures, heels..."
              className="w-full bg-transparent text-base sm:text-lg text-[#211217] placeholder:text-[#8A767E] focus:outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-[#8A767E] hover:text-[#211217]"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-[#735F67] hover:text-[#211217] px-2 py-1"
            >
              Esc
            </button>
          </div>

          {/* Results Area */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
            {trimmed === '' ? (
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-[#8A767E] font-medium">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Body Wave Wig', 'HD Lace Closure', 'Bone Straight', 'Stiletto Pumps', 'Glueless Wig', 'Deep Wave'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-3.5 py-1.5 rounded-full bg-[#EBE3E6] text-xs text-[#401525] hover:bg-[#E0D2D6] transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : matchingProducts.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <p className="text-xs uppercase tracking-wider text-[#8A767E] font-medium">
                    Found {matchingProducts.length} results
                  </p>
                  <button
                    onClick={() => {
                      onExecuteFullSearch(query.trim());
                      onClose();
                    }}
                    className="text-xs text-[#401525] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>View all results</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {matchingProducts.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product.slug);
                      onClose();
                    }}
                    className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#F2E1E5]/70 cursor-pointer transition-colors"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg object-cover bg-[#EBE3E6]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium text-[#211217] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#735F67] truncate">{product.tagline}</p>
                      <span className="text-[11px] text-[#401525] capitalize">
                        {product.category.replace('-', ' & ')}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A767E]" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <p className="font-serif text-base text-[#211217] mb-1">
                  We couldn't find what you're looking for.
                </p>
                <p className="text-xs text-[#735F67] mb-4">
                  Need a custom style, specific length, or lace specification?
                </p>
                <a
                  href={getWhatsAppUrl(`Hello Reya Beauty, I was searching for "${query}" on your website and would love to check availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#401525] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#581D33]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#F2E1E5]" />
                  <span>CHAT WITH US ON WHATSAPP</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
