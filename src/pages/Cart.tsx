import React from 'react';
import { Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { getCartOrderUrl, REYA_PHONE_DISPLAY } from '../utils/whatsapp';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onNavigate: (path: string) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate
}) => {
  const whatsappUrl = getCartOrderUrl(items);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F9F5F1] py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/wigs')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A454D] hover:text-[#211217] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#211217] font-semibold tracking-tight">
                Your Order Bag
              </h1>
              <p className="text-xs sm:text-sm text-[#735F67] mt-1">
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} prepared for WhatsApp confirmation
              </p>
            </div>

            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-[#8A767E] hover:text-red-700 transition-colors"
              >
                Clear all items
              </button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5D2D7] shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F2E1E5] flex items-center justify-center mx-auto text-[#401525]">
              <ShoppingBag className="w-8 h-8 opacity-70" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#211217]">Your bag is currently empty</h2>
            <p className="text-sm text-[#735F67] max-w-sm mx-auto">
              Explore our signature wigs, virgin hair bundles, or statement heels to build your order.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/wigs')}
                className="px-8 py-3.5 rounded-full bg-[#401525] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#581D33] transition-colors"
              >
                Explore Wigs
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5D2D7] shadow-xs flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover bg-[#EBE3E6] flex-shrink-0"
                  />

                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A767E] font-medium">
                      {item.product.category.replace('-', ' & ')}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#211217] mt-0.5">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[#735F67] mt-0.5">{item.product.tagline}</p>
                    <p className="text-xs text-[#401525] font-semibold mt-1">
                      {item.product.priceText || 'Price on WhatsApp'}
                    </p>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#DEC3CA] rounded-xl bg-[#FAF5F2]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 text-[#735F67] hover:text-[#211217]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-[#211217]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 text-[#735F67] hover:text-[#211217]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-[#8A767E] hover:text-red-700 transition-colors"
                      title="Remove item"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#E5D2D7] shadow-xs space-y-4">
              <h2 className="font-serif text-lg font-medium text-[#211217]">Order Summary</h2>

              <div className="space-y-2.5 text-xs text-[#6E5B63] pb-3 border-b border-[#E8DCE0]">
                <div className="flex justify-between">
                  <span>Selected Products</span>
                  <span className="font-semibold text-[#211217]">{totalItemCount} items</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Processing</span>
                  <span className="text-[#401525] font-medium">WhatsApp Direct</span>
                </div>
                <div className="flex justify-between">
                  <span>Pickup / Delivery</span>
                  <span className="text-[#401525] font-medium">Lilongwe Area 49</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF3F5] border border-[#DEC3CA] text-xs text-[#6E5B63] leading-relaxed">
                <p className="font-semibold text-[#401525] mb-1">How WhatsApp Ordering Works:</p>
                Clicking the button below generates your structured order message. Our boutique stylists will instantly verify unit availability, confirm final pricing, and arrange pickup or delivery in Lilongwe.
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#401525] text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#581D33] shadow-md transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#F2E1E5]" />
                <span>ORDER VIA WHATSAPP</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-[#8A767E] justify-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#401525]" />
                <span>WhatsApp: {REYA_PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
