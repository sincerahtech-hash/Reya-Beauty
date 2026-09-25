import { CartItem, Product } from '../types';

export const REYA_WHATSAPP_NUMBER = '265887055085';
export const REYA_PHONE_DISPLAY = '+265 887 05 50 85';
export const REYA_TIKTOK_HANDLE = '@reya.beauty0';
export const REYA_TIKTOK_URL = 'https://www.tiktok.com/@reya.beauty0';
export const REYA_LOCATION = 'Lilongwe, Area 49, Malawi';
export const REYA_HOURS = '08:00 – 17:00';

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${REYA_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getProductEnquiryUrl(product: Product): string {
  const message = `Hello Reya Beauty, I would like to enquire about the ${product.name}.`;
  return getWhatsAppUrl(message);
}

export function getProductOrderUrl(product: Product, quantity = 1): string {
  const qtyText = quantity > 1 ? ` (Quantity: ${quantity})` : '';
  const message = `Hello Reya Beauty, I would like to order the ${product.name}${qtyText}. Please confirm availability and current pricing.`;
  return getWhatsAppUrl(message);
}

export function getConsultationUrl(topic = 'hair & wigs'): string {
  const message = `Hello Reya Beauty, I would like guidance choosing the right ${topic}. Could you share current availability and recommendations?`;
  return getWhatsAppUrl(message);
}

export function getCartOrderUrl(items: CartItem[]): string {
  if (items.length === 0) {
    return getWhatsAppUrl('Hello Reya Beauty, I would like to enquire about your available products.');
  }

  const itemList = items
    .map((item) => `• ${item.product.name} (Qty: ${item.quantity}${item.selectedOption ? ` - ${item.selectedOption}` : ''})`)
    .join('\n');

  const message = `Hello Reya Beauty, I would like to place an order:\n\n${itemList}\n\nPlease confirm availability and total price.`;
  return getWhatsAppUrl(message);
}
