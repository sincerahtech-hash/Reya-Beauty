import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../shared/BrandLogo';
import { getWhatsAppUrl, REYA_PHONE_DISPLAY } from '../../utils/whatsapp';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenCart,
  cartItemCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'WIGS', path: '/wigs' },
    { label: 'BUNDLES & CLOSURES', path: '/bundles-closures' },
    { label: 'HEELS', path: '/heels' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F5F1]/95 backdrop-blur-md border-b border-[#EADDE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo & Wordmark */}
          <div
            onClick={() => handleNavClick('/')}
            className="cursor-pointer py-2 focus:outline-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('/')}
            aria-label="Reya Beauty Homepage"
          >
            <BrandLogo variant="full" size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs xl:text-[13px] tracking-[0.14em] font-medium transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#401525] font-semibold'
                      : 'text-[#5A454D] hover:text-[#211217]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#401525] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Utilities (Search, Cart, WhatsApp, Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#401525] hover:text-[#211217] rounded-full hover:bg-[#F2E1E5]/60 transition-colors"
              title="Search store"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Shopping Cart Bag */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#401525] hover:text-[#211217] rounded-full hover:bg-[#F2E1E5]/60 transition-colors"
              title="Shopping Cart"
              aria-label={`Shopping Cart with ${cartItemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#401525] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#F9F5F1]">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Link (Desktop) */}
            <a
              href={getWhatsAppUrl('Hello Reya Beauty, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#401525] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#581D33] transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#F2E1E5]" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#401525] hover:text-[#211217] rounded-lg hover:bg-[#F2E1E5]/60 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EADDE1] bg-[#FAF5F2] px-5 py-6 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left text-sm tracking-widest font-medium py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#F2E1E5] text-[#401525] font-semibold'
                      : 'text-[#4A383F] hover:bg-[#F2E1E5]/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E8DCE0] space-y-3">
            <a
              href={getWhatsAppUrl('Hello Reya Beauty, I would like to enquire about your collection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#401525] text-white text-xs font-semibold tracking-wider uppercase"
            >
              <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#8A767E]">
              {REYA_PHONE_DISPLAY} • Lilongwe Area 49
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
