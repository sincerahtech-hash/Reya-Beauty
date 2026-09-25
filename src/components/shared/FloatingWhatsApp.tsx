import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, REYA_PHONE_DISPLAY, REYA_HOURS } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultUrl = getWhatsAppUrl('Hello Reya Beauty, I am browsing your online boutique and would love assistance.');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick popup hint */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#FAF3F5] border border-[#E5D2D7] rounded-2xl p-4 shadow-xl animate-fade-in text-[#211217]">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-serif font-semibold text-sm text-[#401525]">Reya Beauty Concierge</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8A767E] hover:text-[#211217] transition-colors p-0.5"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#6E5B63] mb-3 leading-relaxed">
            Need help selecting a wig, bundle match, or heel size? Chat directly with our stylists in Lilongwe.
          </p>
          <div className="text-[11px] text-[#8A767E] mb-3">
            Hours: {REYA_HOURS} • WhatsApp {REYA_PHONE_DISPLAY}
          </div>
          <a
            href={defaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#401525] text-white text-xs font-medium tracking-wide hover:bg-[#581D33] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#F2E1E5]" />
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating trigger button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#FAF3F5]/95 backdrop-blur border border-[#E5D2D7] px-3.5 py-2 rounded-full text-xs font-medium text-[#401525] shadow-md hover:bg-white transition-all hover:shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Chat on WhatsApp</span>
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-[#401525] text-white flex items-center justify-center shadow-lg hover:bg-[#581D33] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#401525]/40"
          aria-label="Toggle WhatsApp chat assistance"
        >
          <MessageCircle className="w-6 h-6 text-[#F2E1E5]" />
        </button>
      </div>
    </div>
  );
};
