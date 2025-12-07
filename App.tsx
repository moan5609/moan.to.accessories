import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';
import CartDrawer from './components/CartDrawer';

// Simple Cart Item structure for state
interface CartItemState {
  productId: string;
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemState[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 用於確認版本更新
  useEffect(() => {
    console.log("Mo&An Website Loaded - Version: Updated Layout");
  }, []);

  const addToCart = (productId: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.productId === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalItems = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold/20">
        <Navbar 
          cartCount={totalItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;