import React, { useState } from 'react';
import {
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import {
  REYA_LOCATION,
  REYA_HOURS,
  REYA_PHONE_DISPLAY,
  REYA_TIKTOK_HANDLE,
  REYA_TIKTOK_URL,
  getWhatsAppUrl
} from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'Wig Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Launch WhatsApp with the user's message
    const formattedMessage = `Hello Reya Beauty, my name is ${formData.name} (${formData.phone || 'No phone provided'}).\n\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`;
    window.open(getWhatsAppUrl(formattedMessage), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F5F1]">
      {/* Hero */}
      <section className="pt-8 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F2E1E5] rounded-3xl p-6 sm:p-10 lg:p-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#401525] text-xs font-semibold uppercase tracking-widest border border-white/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211217] font-semibold tracking-tight">
            Contact Reya Beauty
          </h1>
          <p className="text-sm sm:text-base text-[#6E5B63] max-w-md mx-auto mt-2 leading-relaxed">
            We are here to assist with product availability, wig fittings, custom installs, and order pickups in Lilongwe.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5D2D7] shadow-xs space-y-6">
              <h2 className="font-serif text-2xl text-[#211217] font-medium">Boutique Details</h2>

              <div className="space-y-4 text-sm text-[#5A454D]">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF5F2]">
                  <MapPin className="w-5 h-5 text-[#401525] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#211217]">Location</h4>
                    <p className="text-xs text-[#735F67] mt-0.5">{REYA_LOCATION}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF5F2]">
                  <Clock className="w-5 h-5 text-[#401525] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#211217]">Opening Hours</h4>
                    <p className="text-xs text-[#735F67] mt-0.5">{REYA_HOURS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF5F2]">
                  <MessageCircle className="w-5 h-5 text-[#401525] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#211217]">WhatsApp Orders & Enquiries</h4>
                    <p className="text-xs text-[#735F67] mt-0.5">{REYA_PHONE_DISPLAY}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl('Hello Reya Beauty, I would like to enquire about your services and products.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#401525] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Connection */}
            <div className="bg-[#FAF3F5] rounded-3xl p-6 sm:p-8 border border-[#E2C9CF] space-y-3">
              <h3 className="font-serif text-lg font-medium text-[#211217]">Follow Our TikTok</h3>
              <p className="text-xs text-[#6E5B63] leading-relaxed">
                Watch live lace installs, hair transformations, client styling videos, and new heel arrivals.
              </p>
              <a
                href={REYA_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#401525] hover:underline pt-1"
              >
                <span>TikTok: {REYA_TIKTOK_HANDLE}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5D2D7] shadow-xs">
              <h2 className="font-serif text-2xl text-[#211217] font-medium mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#735F67] mb-6 leading-relaxed">
                Fill out the form below and your message will be pre-formatted for an instant response from our boutique team on WhatsApp.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF2F4] border border-[#DEC3CA] text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-lg font-medium text-[#211217]">
                    Message Sent to WhatsApp
                  </h3>
                  <p className="text-xs text-[#6E5B63] max-w-sm mx-auto">
                    Your conversation has opened in WhatsApp. Our team in Lilongwe will respond promptly during business hours (08:00 – 17:00).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#401525] underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#211217] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chisomo Phiri"
                      className="w-full px-4 py-3 rounded-xl border border-[#DEC3CA] bg-[#FAF5F2] text-sm text-[#211217] focus:outline-none focus:ring-1 focus:ring-[#401525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#211217] mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +265 999 12 34 56"
                      className="w-full px-4 py-3 rounded-xl border border-[#DEC3CA] bg-[#FAF5F2] text-sm text-[#211217] focus:outline-none focus:ring-1 focus:ring-[#401525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#211217] mb-1.5">
                      Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DEC3CA] bg-[#FAF5F2] text-sm text-[#211217] focus:outline-none focus:ring-1 focus:ring-[#401525]"
                    >
                      <option value="Wig Order or Fitting">Wig Order or Fitting</option>
                      <option value="Bundles & Closure Match">Bundles & Closure Match</option>
                      <option value="Heels Sizing & Stock">Heels Sizing & Stock</option>
                      <option value="General Boutique Enquiry">General Boutique Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#211217] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for, preferred lengths, or special requests..."
                      className="w-full px-4 py-3 rounded-xl border border-[#DEC3CA] bg-[#FAF5F2] text-sm text-[#211217] focus:outline-none focus:ring-1 focus:ring-[#401525]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#F2E1E5]" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
