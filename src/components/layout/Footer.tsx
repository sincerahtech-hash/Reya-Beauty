import React from 'react';
import { MessageCircle, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../shared/BrandLogo';
import {
  REYA_LOCATION,
  REYA_HOURS,
  REYA_PHONE_DISPLAY,
  REYA_TIKTOK_HANDLE,
  REYA_TIKTOK_URL,
  getWhatsAppUrl
} from '../../utils/whatsapp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#211217] text-[#F2E1E5] pt-16 pb-12 border-t border-[#361E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-[#361E26]">
          {/* Brand Column */}
          <div className="space-y-4">
            <BrandLogo variant="full" size="md" inverted />
            <p className="text-xs sm:text-sm text-[#CDB3B9] leading-relaxed max-w-sm">
              A contemporary luxury beauty boutique offering premium human-hair wigs, closures, virgin bundles, and statement heels designed for effortless confidence.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Reya Beauty, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#401525] text-white text-xs tracking-wider uppercase border border-[#5A2035] hover:bg-[#581D33] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#F2E1E5]" />
                <span>Shop on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F9F5F1] uppercase mb-4">
              Explore Boutique
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CDB3B9]">
              {[
                { label: 'Home', path: '/' },
                { label: 'Wigs Collection', path: '/wigs' },
                { label: 'Bundles & Closures', path: '/bundles-closures' },
                { label: 'Statement Heels', path: '/heels' },
                { label: 'Editorial Gallery', path: '/gallery' },
                { label: 'About Reya Beauty', path: '/about' },
                { label: 'Contact & Location', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onNavigate(item.path);
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Details matching Figma */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F9F5F1] uppercase mb-4">
              Boutique Information
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#CDB3B9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2E1E5] flex-shrink-0 mt-0.5" />
                <span>{REYA_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F2E1E5] flex-shrink-0" />
                <span>{REYA_HOURS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#F2E1E5] flex-shrink-0" />
                <span>WhatsApp: {REYA_PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F9F5F1] uppercase mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-[#CDB3B9] mb-4 leading-relaxed">
              Follow our daily transformations, wig installations, and new product arrivals.
            </p>
            <div className="space-y-2">
              <a
                href={REYA_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full max-w-xs px-4 py-2.5 rounded-xl bg-[#2A161E] border border-[#3E212B] hover:border-[#6B3245] text-xs text-[#F2E1E5] transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">TikTok: {REYA_TIKTOK_HANDLE}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl('Hello Reya Beauty, I would like to ask a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full max-w-xs px-4 py-2.5 rounded-xl bg-[#2A161E] border border-[#3E212B] hover:border-[#6B3245] text-xs text-[#F2E1E5] transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">WhatsApp Consultation</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching Figma copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E838B]">
          <p>© {new Date().getFullYear()} REYA BEAUTY. Lilongwe, Malawi. All rights reserved.</p>
          <p className="tracking-wide">
            Luxury + Femininity + Confidence + Elegance
          </p>
        </div>
      </div>
    </footer>
  );
};
