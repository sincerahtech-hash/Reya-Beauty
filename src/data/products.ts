import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- WIGS ---
  {
    id: 'body-wave-wig',
    slug: 'body-wave-wig',
    name: 'Body Wave Wig',
    tagline: 'Soft waves • Everyday glamour',
    category: 'wigs',
    subcategory: 'body-wave',
    description:
      'Crafted with 100% premium human hair, our signature Body Wave Wig delivers flowing volume, an effortless natural wave pattern, and superior movement that holds its shape gracefully from day to evening.',
    features: [
      '100% Virgin Human Hair',
      'Ultra-thin breathable Swiss/HD lace for an undetectable hairline',
      'Pre-plucked natural hairline with delicate baby hairs',
      'Can be dyed, heat-styled, curled, or straightened',
      'Secure adjustable straps and inner combs for maximum comfort'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'hd-lace-wig',
    slug: 'hd-lace-wig',
    name: 'HD Lace Wig',
    tagline: 'Natural finish • Seamless look',
    category: 'wigs',
    subcategory: 'closure-wigs',
    description:
      'The pinnacle of invisible melt technology. Designed with high-definition Swiss lace that blends seamlessly into all skin tones without bulky lines or harsh knots, ensuring a truly immaculate scalp appearance.',
    features: [
      'Genuine invisible HD melt lace technology',
      'Micro-bleached soft single knots along the hairline',
      'Silky, tangle-free human hair with high cuticle alignment',
      'Ultra-lightweight cap structure for all-day ventilation'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'deep-wave-wig',
    slug: 'deep-wave-wig',
    name: 'Deep Wave Wig',
    tagline: 'Defined texture • Full volume',
    category: 'wigs',
    subcategory: 'deep-wave',
    description:
      'Luxuriously rich and sculpted deep waves that offer dramatic volume and natural bounce. Holds deep moisture and texture beautifully with a quick mist of water or light leave-in conditioner.',
    features: [
      'Deep, long-lasting spiral wave texture',
      'True to density with full ends and no shedding',
      'Soft flexible lace front with hand-tied hairline',
      'Low-maintenance everyday wet-and-go styling'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'straight-lace-wig',
    slug: 'straight-lace-wig',
    name: 'Straight Lace Wig',
    tagline: 'Sleek finish • Timeless style',
    category: 'wigs',
    subcategory: 'straight',
    description:
      'Bone-straight perfection with a high-shine reflective finish. Drops gracefully with fluid movement and effortless silkiness. Perfectly suited for classic center parts, deep side swoops, and sleek updos.',
    features: [
      'Silky bone straight texture with healthy luster',
      'Lays completely flat with minimal heat required',
      'Precision pre-plucked lace with bleached knots',
      'Thermal resistant and durable through regular wash routines'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'glueless-wig',
    slug: 'glueless-wig',
    name: 'Glueless Wig',
    tagline: 'Easy wear • Comfortable fit',
    category: 'wigs',
    subcategory: 'closure-wigs',
    description:
      'Effortless luxury in seconds. Fitted with a pre-cut hairline, 3D dome band, and non-slip ear tabs so you can slip on and step out without adhesive, mess, or tension on your delicate edges.',
    features: [
      '100% glue-free installation in under 60 seconds',
      'Pre-cut zig-zag natural lace boundary',
      'Custom elastic tension band for non-slip security',
      'Protective style friendly for everyday hairline preservation'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'luxury-curly-wig',
    slug: 'luxury-curly-wig',
    name: 'Luxury Curly Wig',
    tagline: 'Statement curls • Effortless volume',
    category: 'wigs',
    subcategory: 'curly',
    description:
      'Rich, bouncy curls radiating confidence and unapologetic beauty. Formulated with full cuticles aligned in the same direction, preventing tangling and retaining crisp curl definition.',
    features: [
      'Juicy, bouncy curl definition with natural moisture retention',
      'Full density from roots to ends',
      'Handcrafted lace perimeter for versatile parting space',
      'Re-activates effortlessly with water and curl defining mousse'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },

  // --- BUNDLES & CLOSURES ---
  {
    id: 'body-wave-bundles',
    slug: 'body-wave-bundles',
    name: 'Body Wave Bundles',
    tagline: 'Lustrous wave • Full ends',
    category: 'bundles-closures',
    subcategory: 'body-wave',
    description:
      'Double-wefted virgin human hair bundles featuring a consistent S-pattern wave. Thick from weft to tip, allowing full installations with 3 bundles for natural volume or 4 bundles for red-carpet fullness.',
    features: [
      'Machine reinforced double weft to prevent shedding',
      'Unprocessed virgin hair with natural healthy sheen',
      'Can be bleached to blonde (#613) and colored safely',
      'Re-usable for multiple sew-in or custom wig installations'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'straight-bundles',
    slug: 'straight-bundles',
    name: 'Straight Bundles',
    tagline: 'Glossy alignment • Silky touch',
    category: 'bundles-closures',
    subcategory: 'straight',
    description:
      'Ultra-dense, silky smooth virgin hair bundles. Known for their weightless flow, high resilience against humidity, and immaculate gloss.',
    features: [
      'Silky straight with zero flyaways',
      'Tight, flat machine wefts for flat sew-ins',
      'Takes curl patterns easily and straightens right back',
      'Length options available from 12" to 32"'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  },
  {
    id: 'deep-wave-bundles',
    slug: 'deep-wave-bundles',
    name: 'Deep Wave Bundles',
    tagline: 'Sculpted waves • Lush density',
    category: 'bundles-closures',
    subcategory: 'deep-wave',
    description:
      'Deep, tight waves engineered to give maximum dimension and body. Perfect for vacation looks, wet-hair styles, and dramatic volume.',
    features: [
      'Tight deep wave retention after repeated washes',
      'Cuticles aligned in single direction',
      'Zero synthetic blend or chemical silicone coatings',
      'Blends seamlessly with natural textured hair types'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  },
  {
    id: 'curly-bundles',
    slug: 'curly-bundles',
    name: 'Curly Bundles',
    tagline: 'Spring curls • Natural texture',
    category: 'bundles-closures',
    subcategory: 'curly',
    description:
      'Luxurious spiral curls with generous elasticity. Our curly bundles provide authentic volume that turns heads while feeling lightweight on the scalp.',
    features: [
      'High spring-back coil texture',
      'Double wefted for maximum longevity',
      'Minimum maintenance with gentle detangling and leave-in moisture'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  },
  {
    id: 'hd-lace-closure',
    slug: 'hd-lace-closure',
    name: 'HD Lace Closure',
    tagline: 'Seamless skin melt • 4x4 / 5x5 options',
    category: 'bundles-closures',
    subcategory: 'closures',
    description:
      'High-grade transparent HD Swiss lace closure providing a free-parting canvas for seamless natural look without damaging your real hair.',
    features: [
      'Real HD undetectable Swiss lace film',
      'Free-parting versatility (center, left, or right part)',
      'Single hand-knotted hairline',
      'Protective closure that shields natural leave-out'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'transparent-lace-closure',
    slug: 'transparent-lace-closure',
    name: 'Transparent Lace Closure',
    tagline: 'Clean border • Long-lasting durability',
    category: 'bundles-closures',
    subcategory: 'closures',
    description:
      'Durable, crystal-clear lace closure engineered for daily wear and easy tinting to match any complexion perfectly.',
    features: [
      'Strong yet soft transparent lace mesh',
      'Pre-plucked natural hairline gradient',
      'Secure base that holds up to restyling and washes'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  },

  // --- HEELS ---
  {
    id: 'editorial-stiletto-pumps',
    slug: 'editorial-stiletto-pumps',
    name: 'Editorial Stiletto Pumps',
    tagline: 'Sculpted silhouette • 100mm lift',
    category: 'heels',
    subcategory: 'stilettos',
    description:
      'A sleek, pointed-toe silhouette designed to elongate the leg and elevate any ensemble. Crafted with padded internal footbeds for confident, all-night wear.',
    features: [
      'Sharp pointed toe with balanced arch support',
      'High-gloss luxury finish',
      'Cushioned memory foam insole',
      'Anti-slip outsole grip'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'strappy-evening-sandals',
    slug: 'strappy-evening-sandals',
    name: 'Strappy Evening Sandals',
    tagline: 'Delicate straps • Red carpet appeal',
    category: 'heels',
    subcategory: 'sandals',
    description:
      'Minimalist ankle-wrap sandals with delicate feminine straps that frame the foot elegantly. Ideal for galas, dinners, and weekend glamour.',
    features: [
      'Supple vegan leather straps with gentle buckle closure',
      'Open square toe silhouette',
      'Sturdy heel cup preventing heel slippage',
      'Pairs seamlessly with cocktail dresses or tailored trousers'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true,
    featured: true
  },
  {
    id: 'modern-block-heel-mules',
    slug: 'modern-block-heel-mules',
    name: 'Modern Block Heel Mules',
    tagline: 'Architectural block • Everyday luxury',
    category: 'heels',
    subcategory: 'block-heels',
    description:
      'The modern staple for effortless elegance. An architectural block heel that offers sturdy stability without sacrificing refined style.',
    features: [
      'Comfort-first geometric block heel',
      'Slip-on mule silhouette for easy transitions',
      'Soft microfiber lining that prevents friction',
      'Neutral tones tailored for versatile pairing'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  },
  {
    id: 'statement-platform-heels',
    slug: 'statement-platform-heels',
    name: 'Statement Platform Heels',
    tagline: 'Bold height • Cloud-like stability',
    category: 'heels',
    subcategory: 'platform',
    description:
      'Dramatic height with elevated front platform pitch reduction, ensuring high-fashion impact with maximum walking comfort.',
    features: [
      'Elevated front platform to soften walking incline',
      'Secure wrap-around ankle strap with gold-tone hardware',
      'Statement silhouette for high-profile celebrations',
      'Reinforced heel tap for extended longevity'
    ],
    priceText: 'Price available on WhatsApp',
    images: [
      'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1000&q=80'
    ],
    available: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
