import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, REYA_PHONE_DISPLAY } from '../../utils/whatsapp';

interface WhatsAppCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  contextMessage?: string;
  className?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  title = 'Not sure which wig is right for you?',
  description = 'Chat with Reya Beauty for style guidance, availability and current pricing.',
  buttonText = 'CHAT WITH US ON WHATSAPP',
  contextMessage = 'Hello Reya Beauty, I would like personal guidance and availability details for your products.',
  className = ''
}) => {
  const whatsappUrl = getWhatsAppUrl(contextMessage);

  return (
    <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-[#F9F5F1] ${className}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#211217] font-medium tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[#6E5B63] max-w-lg mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#581D33] hover:shadow-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 opacity-70" />
        </a>

        <p className="mt-4 text-xs text-[#8A767E]">
          Direct WhatsApp support • {REYA_PHONE_DISPLAY} • Lilongwe Area 49
        </p>
      </div>
    </section>
  );
};
