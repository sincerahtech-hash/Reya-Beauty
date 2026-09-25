import React from 'react';
import { Sparkles, Heart, Crown, ShieldCheck } from 'lucide-react';
import { WhatsAppCTA } from '../components/shared/WhatsAppCTA';
import { BrandLogo } from '../components/shared/BrandLogo';
import { REYA_LOCATION, REYA_HOURS, REYA_PHONE_DISPLAY, REYA_TIKTOK_HANDLE, REYA_TIKTOK_URL } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-6 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#401525] text-xs font-semibold uppercase tracking-widest border border-white/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Story</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight leading-tight">
              Quiet luxury, crafted for modern elegance.
            </h1>
            <p className="text-base sm:text-lg text-[#6E5B63] max-w-2xl mx-auto leading-relaxed pt-2">
              Reya Beauty was founded with a singular purpose: to bring women in Malawi an exquisite collection of luxury wigs, virgin human-hair bundles, seamless lace closures, and fashion-forward footwear.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A656C] font-semibold">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211217] font-medium tracking-tight">
              Beauty that feels authentically yours.
            </h2>
            <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed">
              We believe confidence begins when quality and comfort meet effortlessly. Every unit in our wig collection is hand-selected for cuticle alignment, full healthy ends, and natural hairline movement.
            </p>
            <p className="text-sm sm:text-base text-[#6E5B63] leading-relaxed">
              Whether you choose an undetectable HD lace wig, customized virgin bundles for a sew-in, or sculptural heels for an evening gala, Reya Beauty is your dedicated beauty partner.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <BrandLogo variant="monogram" size="md" />
              <div>
                <p className="font-serif font-semibold text-sm text-[#211217]">REYA BEAUTY</p>
                <p className="text-xs text-[#735F67]">Lilongwe, Area 49 • Malawi</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#DEC3CA] bg-[#EBE3E6]">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85"
                alt="Reya Beauty Editorial Look"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF3F5] border-y border-[#E2C9CF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A656C] font-semibold">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211217] font-medium tracking-tight mt-1">
              The Reya Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5D2D7] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E1E5] flex items-center justify-center text-[#401525]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#211217]">
                Uncompromising Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B63] leading-relaxed">
                We strictly stock unprocessed virgin human hair with healthy cuticles intact. Each bundle and wig maintains natural luster and holds curls gracefully.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5D2D7] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E1E5] flex items-center justify-center text-[#401525]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#211217]">
                Personalized Styling
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B63] leading-relaxed">
                Direct one-on-one consultations via WhatsApp to ensure your chosen wig density, lace color, and heel sizing align precisely with your vision.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5D2D7] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E1E5] flex items-center justify-center text-[#401525]">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#211217]">
                Modern Boutique Touch
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B63] leading-relaxed">
                Quiet luxury meets effortless shopping. From fast order confirmation to Lilongwe pickup and delivery arrangements, every detail is considered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Details Card */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5D2D7] shadow-sm text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#211217] font-semibold">Visit or Connect</h3>
          <p className="text-sm text-[#6E5B63] max-w-md mx-auto">
            Located in Lilongwe, Area 49, Malawi. Available daily for personal consultations and orders.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs sm:text-sm text-[#401525] font-medium">
            <span>Location: {REYA_LOCATION}</span>
            <span>•</span>
            <span>Hours: {REYA_HOURS}</span>
            <span>•</span>
            <span>WhatsApp: {REYA_PHONE_DISPLAY}</span>
            <span>•</span>
            <a href={REYA_TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="underline">
              TikTok: {REYA_TIKTOK_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <WhatsAppCTA
        title="Experience Reya Beauty firsthand."
        description="Reach out on WhatsApp to discuss current stock, request styling videos, or book an appointment."
        buttonText="CHAT ON WHATSAPP"
        contextMessage="Hello Reya Beauty, I read your brand story and would love to enquire about your available collections."
      />
    </div>
  );
};
