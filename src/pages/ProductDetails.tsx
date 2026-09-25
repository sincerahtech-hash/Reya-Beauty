import React, { useState } from 'react';
import {
  MessageCircle,
  ShoppingBag,
  Check,
  ArrowLeft,
  Share2,
  ShieldCheck,
  Truck,
  Plus,
  Minus
} from 'lucide-react';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductGrid } from '../components/products/ProductGrid';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { getProductBySlug, PRODUCTS } from '../data/products';
import { getProductOrderUrl, getProductEnquiryUrl } from '../utils/whatsapp';
import { Product } from '../types';

interface ProductDetailsPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  slug,
  onNavigate,
  onSelectProduct,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const product = getProductBySlug(slug) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsappOrderUrl = getProductOrderUrl(product, quantity);
  const whatsappEnquiryUrl = getProductEnquiryUrl(product);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Reya Beauty - ${product.name}`,
          text: product.tagline,
          url: window.location.href
        });
      } catch {
        // Ignored
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F5F1] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DCE0]">
          <button
            onClick={() => onNavigate(`/${product.category}`)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A454D] hover:text-[#211217] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {product.category.replace('-', ' & ')}</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-[#735F67] hover:text-[#211217] transition-colors"
            title="Share product"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Main Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Product Info & Commerce Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A656C]">
                Reya Beauty • {product.category.replace('-', ' & ')}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#211217] tracking-tight mt-1 mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-[#735F67]">{product.tagline}</p>
            </div>

            {/* Price & Availability */}
            <div className="p-4 rounded-2xl bg-[#EBE3E6]/60 border border-[#E0D2D6] flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#8A767E]">Pricing</div>
                <div className="text-base font-serif font-semibold text-[#401525]">
                  {product.priceText || 'Price available on WhatsApp'}
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available to Order</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm text-[#5A454D] leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Features list */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs uppercase tracking-wider text-[#211217] font-semibold">
                  Product Specifications & Highlights
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#6E5B63]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#401525] mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-[#211217] font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-[#DEC3CA] rounded-xl bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-[#735F67] hover:text-[#211217]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-xs font-semibold text-[#211217]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-[#735F67] hover:text-[#211217]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4">
              {/* Primary: ORDER ON WHATSAPP */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              {/* Secondary: ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white/90 hover:bg-white text-[#211217] font-medium text-xs sm:text-sm tracking-wider uppercase border border-[#DEC3CA] transition-all active:scale-95 shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#401525]" />
                <span>ADD TO CART</span>
              </button>

              {/* Notice when added to cart */}
              {addedNotice && (
                <div className="p-3 bg-[#FAF2F4] border border-[#DEC3CA] rounded-xl text-center text-xs text-[#401525] flex items-center justify-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Added {quantity} × {product.name} to your bag!</span>
                </div>
              )}

              {/* Quick enquiry link */}
              <div className="text-center pt-1">
                <a
                  href={whatsappEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#7A656C] hover:text-[#401525] underline decoration-[#DEC3CA]"
                >
                  Have questions before ordering? Ask our stylists
                </a>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 border-t border-[#E8DCE0] grid grid-cols-2 gap-3 text-xs text-[#6E5B63]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#401525]" />
                <span>Authentic 100% Virgin Hair</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#401525]" />
                <span>Lilongwe Area 49 Pickup & Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E8DCE0]">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#211217] font-medium tracking-tight mb-8">
              Complete the Look
            </h2>
            <ProductGrid
              products={relatedProducts}
              onSelectProduct={onSelectProduct}
              onAddToCart={(p) => onAddToCart(p, 1)}
            />
          </div>
        )}
      </div>

      {/* WhatsApp Consultation CTA */}
      <WhatsAppCTA
        title="Want custom lengths or color advice?"
        description="Our stylists in Lilongwe provide bespoke consultations on custom wig cap sizing, hair bundle counts, and custom installs."
        buttonText="CHAT WITH A STYLIST"
        contextMessage={`Hello Reya Beauty, I am looking at the ${product.name} and would love custom recommendations.`}
        className="mt-16"
      />
    </div>
  );
};
