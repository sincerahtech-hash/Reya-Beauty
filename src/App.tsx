import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { SearchModal } from './components/shared/SearchModal';
import { FloatingWhatsApp } from './components/shared/FloatingWhatsApp';

import { HomePage } from './pages/Home';
import { WigsPage } from './pages/Wigs';
import { BundlesClosuresPage } from './pages/BundlesClosures';
import { HeelsPage } from './pages/Heels';
import { ProductDetailsPage } from './pages/ProductDetails';
import { AboutPage } from './pages/About';
import { GalleryPage } from './pages/Gallery';
import { ContactPage } from './pages/Contact';
import { CartPage } from './pages/Cart';
import { SearchPage } from './pages/Search';
import { NotFoundPage } from './pages/NotFound';

import { CartItem, Product } from './types';

export default function App() {
  // Navigation State
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart State with LocalStorage Persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('reya_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('reya_cart_items', JSON.stringify(cartItems));
    } catch {
      // Ignored
    }
  }, [cartItems]);

  // Browser Navigation History Listener
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Page Navigation Handler
  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Select Product Handler
  const selectProduct = (slug: string) => {
    navigateTo(`/product/${slug}`);
  };

  // Cart Management
  const handleAddToCart = (product: Product, quantity = 1, selectedOption?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedOption }];
    });
    setIsCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleExecuteFullSearch = (query: string) => {
    setSearchQuery(query);
    navigateTo(`/search?q=${encodeURIComponent(query)}`);
  };

  // Dynamic Title Management
  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'Reya Beauty | Premium Wigs, Bundles & Heels in Malawi';
    } else if (currentPath === '/wigs') {
      document.title = 'Reya Beauty Wigs | Find Your Signature Wig';
    } else if (currentPath === '/bundles-closures') {
      document.title = 'Reya Beauty Bundles & Closures | Premium Virgin Hair';
    } else if (currentPath === '/heels') {
      document.title = 'Reya Beauty Heels | Statement Luxury Footwear';
    } else if (currentPath === '/about') {
      document.title = 'About Reya Beauty | Luxury Beauty Boutique Malawi';
    } else if (currentPath === '/gallery') {
      document.title = 'Editorial Gallery | Reya Beauty Looks & Installs';
    } else if (currentPath === '/contact') {
      document.title = 'Contact Reya Beauty | Lilongwe, Area 49';
    } else if (currentPath === '/cart') {
      document.title = 'Shopping Bag | Reya Beauty Order Summary';
    } else if (currentPath.startsWith('/product/')) {
      const slug = currentPath.replace('/product/', '');
      document.title = `${slug.replace(/-/g, ' ').toUpperCase()} | Reya Beauty`;
    } else if (currentPath.startsWith('/search')) {
      document.title = 'Search Boutique | Reya Beauty';
    }
  }, [currentPath]);

  // Route Resolver
  const renderCurrentView = () => {
    if (currentPath === '/') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentPath === '/wigs') {
      return (
        <WigsPage
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentPath === '/bundles-closures') {
      return (
        <BundlesClosuresPage
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentPath === '/heels') {
      return (
        <HeelsPage
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.replace('/product/', '');
      return (
        <ProductDetailsPage
          slug={slug}
          onNavigate={navigateTo}
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }

    if (currentPath === '/gallery') {
      return <GalleryPage />;
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    if (currentPath === '/cart') {
      return (
        <CartPage
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath.startsWith('/search')) {
      return (
        <SearchPage
          initialQuery={searchQuery}
          onSelectProduct={selectProduct}
          onAddToCart={handleAddToCart}
        />
      );
    }

    return <NotFoundPage onNavigate={navigateTo} />;
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5F1] text-[#211217] selection:bg-[#F2E1E5] selection:text-[#401525]">
      {/* Top Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Viewport Content */}
      <main className="flex-grow">{renderCurrentView()}</main>

      {/* Bottom Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToCartPage={() => navigateTo('/cart')}
      />

      {/* Site-wide Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={selectProduct}
        onExecuteFullSearch={handleExecuteFullSearch}
      />

      {/* Persistent Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
