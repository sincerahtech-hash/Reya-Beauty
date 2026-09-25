import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F9F5F1] px-4 py-16">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-[#E5D2D7] shadow-xs space-y-4">
        <span className="font-serif text-6xl text-[#401525] font-bold">404</span>
        <h1 className="font-serif text-2xl text-[#211217] font-medium">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-[#735F67] leading-relaxed">
          The page you are looking for may have been moved or does not exist. Explore our signature collections or contact us directly.
        </p>

        <div className="pt-4 flex flex-col gap-2.5">
          <button
            onClick={() => onNavigate('/')}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#401525] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#581D33] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <a
            href={getWhatsAppUrl('Hello Reya Beauty, I reached a 404 page on your website and need assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#FAF3F5] text-[#401525] text-xs font-semibold uppercase tracking-wider hover:bg-[#F2E1E5] border border-[#DEC3CA] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
