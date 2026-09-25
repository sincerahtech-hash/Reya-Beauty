import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct?: (slug: string) => void;
  onAddToCart?: (product: Product) => void;
  emptyMessage?: string;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  emptyMessage = 'No products found matching your selection.',
  className = ''
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center text-[#735F67]">
        <p className="font-serif text-lg text-[#211217] mb-2">{emptyMessage}</p>
        <p className="text-sm">Please try selecting another category or chat with us on WhatsApp.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
