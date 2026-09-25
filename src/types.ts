export type ProductCategory = 'wigs' | 'bundles-closures' | 'heels';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  features: string[];
  price?: number;
  currency?: 'MWK';
  priceText?: string;
  images: string[];
  available: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wigs' | 'bundles' | 'heels' | 'editorial';
  image: string;
  description?: string;
}
