import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ProductGrid } from '../components/products/ProductGrid';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { getFeaturedProducts } from '../data/products';
import { getWhatsAppUrl, REYA_LOCATION } from '../utils/whatsapp';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (slug: string) => void;
  onAddToCart: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart
}) => {
  const featuredProducts = getFeaturedProducts();

  const categories = [
    {
      id: 'wigs',
      title: 'WIGS',
      description: 'Premium human-hair wigs crafted for natural hairlines and effortless confidence.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
      path: '/wigs',
      cta: 'Explore Wigs'
    },
    {
      id: 'bundles-closures',
      title: 'BUNDLES & CLOSURES',
      description: 'Virgin human-hair bundles and HD lace closures for customized installs.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      path: '/bundles-closures',
      cta: 'Explore Bundles'
    },
    {
      id: 'heels',
      title: 'HEELS',
      description: 'Fashion-forward stilettos, mules, and block heels designed to complete your look.',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80',
      path: '/heels',
      cta: 'Explore Heels'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xs text-[#401525] text-xs font-semibold uppercase tracking-widest border border-white/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reya Beauty Boutique • {REYA_LOCATION}</span>
              </div>

              {/* Exact Figma wording */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#211217] font-semibold tracking-tight leading-[1.12]">
                Beauty, styled your way.
              </h1>

              <p className="text-base sm:text-lg text-[#6E5B63] max-w-lg leading-relaxed">
                Discover our curated collection of luxury human-hair wigs, closures, virgin bundles, and statement heels tailored for effortless elegance and personal expression.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={getWhatsAppUrl('Hello Reya Beauty, I would like to shop your collection.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                  <span>SHOP ON WHATSAPP</span>
                </a>

                <button
                  onClick={() => onNavigate('/wigs')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/80 hover:bg-white text-[#211217] font-medium text-xs sm:text-sm tracking-wider uppercase border border-[#DEC3CA] transition-all"
                >
                  <span>EXPLORE COLLECTION</span>
                  <ArrowRight className="w-4 h-4 text-[#401525]" />
                </button>
              </div>
            </div>

            {/* Right Hero Visual Box */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-[#DEC3CA] group">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85"
                  alt="Reya Beauty Signature Styling"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211217]/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-lg font-medium">Signature Silky Press</p>
                  <p className="text-xs text-[#F2E1E5]/90">100% Virgin Hair • High Gloss Finish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A656C] font-semibold mb-2">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#211217] font-medium tracking-tight">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-[#401525] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate(cat.path)}
              className="group cursor-pointer rounded-3xl bg-[#EBE3E6]/60 border border-[#E0D2D6] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E5D9DD]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211217]/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#F2E1E5]/90 line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F2E1E5] group-hover:text-white">
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8DCE0]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A656C] font-semibold mb-2">
              Editor's Selection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211217] font-medium tracking-tight">
              Featured Products
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/wigs')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#401525] hover:text-[#581D33] transition-colors"
          >
            <span>View All Wigs & Bundles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <ProductGrid
          products={featuredProducts.slice(0, 6)}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      </section>

      {/* Brand & Craftsmanship Editorial Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F2E1E5]/70 border-y border-[#E2C9CF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#7A656C] font-semibold">
                The Reya Beauty Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-medium tracking-tight leading-tight">
                Quiet luxury crafted for effortless confidence.
              </h2>
              <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed">
                At Reya Beauty, we believe beauty is personal and empowering. Based in Lilongwe, Area 49, our boutique curates the finest cuticle-aligned human hair, precision melted lace, and statement footwear so you can step into every room feeling radiant and assured.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 bg-white/70 rounded-2xl border border-white/80">
                  <ShieldCheck className="w-5 h-5 text-[#401525] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-medium text-sm text-[#211217]">
                      100% Virgin Hair
                    </h4>
                    <p className="text-xs text-[#735F67] mt-1">
                      Cuticles aligned with natural fullness and zero synthetic blend.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/70 rounded-2xl border border-white/80">
                  <HeartHandshake className="w-5 h-5 text-[#401525] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-medium text-sm text-[#211217]">
                      Personal Concierge
                    </h4>
                    <p className="text-xs text-[#735F67] mt-1">
                      One-on-one WhatsApp consultations to choose your exact style and fit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#401525] hover:underline"
                >
                  <span>Learn more about our brand story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#E5D9DD] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Lace Wig Hairline Detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#E5D9DD] shadow-sm mt-6 sm:mt-8">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
                  alt="Statement Stiletto Heel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <WhatsAppCTA
        title="Ready to elevate your beauty?"
        description="Chat directly with our stylists in Lilongwe for custom recommendations, wig advice, and current availability."
        buttonText="CHAT ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I am browsing your homepage and would like to speak with a stylist."
      />
    </div>
  );
};
