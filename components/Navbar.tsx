import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: '首頁 Home' },
    { path: '/shop', label: '商城 Shop' },
    { path: '/about', label: '關於 About' },
    { path: '/faq', label: '資訊 Info' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-bg/95 backdrop-blur-sm border-brand-muted/20 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-text hover:text-brand-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="font-serif text-2xl tracking-widest text-brand-text">
              MO<span className="text-brand-gold text-xl">&</span>AN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest hover:text-brand-gold transition-colors ${
                  location.pathname === link.path ? 'text-brand-text font-medium' : 'text-brand-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 text-brand-text">
            <button className="hover:text-brand-gold transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative cursor-pointer hover:text-brand-gold transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-t border-brand-muted/10 shadow-lg h-screen">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-serif tracking-widest text-brand-text border-b border-brand-muted/10 pb-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;