import React from 'react';
import { MessageCircle, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types';
import { getProductOrderUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelectProduct?: (slug: string) => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart
}) => {
  const whatsappOrderUrl = getProductOrderUrl(product);

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product.slug);
    }
  };

  return (
    <div
      className="group flex flex-col rounded-2xl bg-[#EBE3E6]/60 border border-[#E0D2D6]/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D6BFC5] hover:-translate-y-0.5"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Container */}
      <div
        className="relative aspect-[4/5] sm:aspect-square w-full bg-[#E5D9DD] overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick action overlay on hover */}
        <div className="absolute inset-0 bg-[#211217]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="p-2.5 rounded-full bg-white/95 text-[#401525] shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all"
            title="View Details"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="w-4 h-4" />
          </button>
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="p-2.5 rounded-full bg-[#401525] text-white shadow-md hover:bg-[#581D33] hover:scale-110 active:scale-95 transition-all"
              title="Add to Cart"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4 text-[#F2E1E5]" />
            </button>
          )}
        </div>

        {/* Availability Badge */}
        {product.available && (
          <span className="absolute top-3 left-3 bg-[#FAF3F5]/90 backdrop-blur-xs text-[#401525] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full tracking-wider border border-[#E5D2D7]">
            Available
          </span>
        )}
      </div>

      {/* Product Info & Content matching Figma layout */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3
            onClick={handleCardClick}
            className="font-serif text-base sm:text-lg font-medium text-[#211217] tracking-tight hover:text-[#401525] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#735F67] mt-1 font-normal leading-relaxed">
            {product.tagline}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E0D2D6]/60 flex items-center justify-between gap-2">
          <span className="text-xs text-[#8A767E] font-medium tracking-wide">
            {product.priceText || 'Price on WhatsApp'}
          </span>

          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#401525] text-white text-[11px] font-medium tracking-wider uppercase hover:bg-[#581D33] transition-colors active:scale-95"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            <MessageCircle className="w-3 h-3 text-[#F2E1E5]" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};
