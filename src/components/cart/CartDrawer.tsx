import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../../types';
import { getCartOrderUrl, REYA_PHONE_DISPLAY } from '../../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onNavigateToCartPage: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToCartPage
}) => {
  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const whatsappUrl = getCartOrderUrl(items);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#211217]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF5F2] shadow-2xl flex flex-col border-l border-[#E5D2D7]">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E5D2D7] flex items-center justify-between bg-[#F9F5F1]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#401525]" />
              <h2 className="font-serif text-lg text-[#211217] font-medium">Your Order Bag</h2>
              <span className="text-xs bg-[#F2E1E5] text-[#401525] px-2 py-0.5 rounded-full font-semibold">
                {totalItemCount}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#735F67] hover:text-[#211217] rounded-full hover:bg-[#EBE3E6] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#735F67]">
                <div className="w-16 h-16 rounded-full bg-[#F2E1E5] flex items-center justify-center mb-4 text-[#401525]">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <h3 className="font-serif text-lg text-[#211217] mb-2">Your bag is empty</h3>
                <p className="text-xs sm:text-sm text-[#735F67] max-w-xs mb-6">
                  Explore our premium human-hair wigs, luxury bundles, and statement heels.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#401525] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#581D33] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 bg-white/70 rounded-2xl border border-[#E8DCE0] items-center"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-18 h-18 rounded-xl object-cover bg-[#EBE3E6] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium text-[#211217] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#735F67] truncate">{item.product.tagline}</p>
                    <p className="text-[11px] text-[#401525] font-medium mt-1">
                      {item.product.priceText || 'Price on WhatsApp'}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#E0D2D6] rounded-lg bg-[#FAF5F2]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-[#735F67] hover:text-[#211217]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#211217]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-[#735F67] hover:text-[#211217]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1 text-[#8A767E] hover:text-red-700 transition-colors ml-auto"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#E5D2D7] bg-[#F9F5F1] space-y-3">
              <div className="text-xs text-[#735F67] bg-[#F2E1E5]/70 rounded-xl p-3 leading-relaxed">
                <span className="font-semibold text-[#401525]">Direct Ordering Notice:</span> Orders are confirmed directly with our Lilongwe boutique team via WhatsApp to ensure product availability and exact styling preferences.
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                <span>ORDER VIA WHATSAPP</span>
              </a>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToCartPage();
                  }}
                  className="text-xs text-[#401525] hover:underline flex items-center gap-1"
                >
                  <span>Review full order summary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onClearCart}
                  className="text-xs text-[#8A767E] hover:text-red-700 transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              <p className="text-[11px] text-center text-[#8A767E] pt-1">
                WhatsApp: {REYA_PHONE_DISPLAY}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
