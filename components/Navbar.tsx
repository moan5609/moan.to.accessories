import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
  const navLinks = [
    { path: '/', label: '首頁 Home' },
    { path: '/shop', label: '商城 Shop' },
    { path: '/about', label: '關於 About' },
    { path: '/faq', label: '資訊 Info' },
  ];

  return (
    <>
      {/* Fixed Header - Black/Transparent Style */}
      <header className="fixed top-0 inset-x-0 z-30 bg-black/40 backdrop-blur-md text-white border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.25em] hover:opacity-80 transition-opacity z-40 relative">
            Mo&An
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-xs md:text-sm tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`pb-1 border-b transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'border-white text-white' 
                    : 'border-transparent text-white/80 hover:text-white hover:border-white/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 text-sm z-40 relative">
            <button className="hover:text-brand-gold transition-colors hidden sm:block">
              <Search size={18} />
            </button>
            <button 
              onClick={onCartClick}
              className="hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              <div className="relative">
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-brand-gold text-white text-[9px] flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black/95 backdrop-blur-xl flex items-center justify-center md:hidden fade-in">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-serif tracking-[0.2em] uppercase ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;