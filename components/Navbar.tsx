import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { BRAND_NAME } from '../constants';

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

  // Determine styles based on location and scroll state
  const isHomePage = location.pathname === '/';
  
  // Logic: On Home page, if not scrolled and mobile menu closed, transparent bg + white text.
  // Otherwise: background color + brand text color.
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  // Text colors - Force WHITE when transparent to prevent "eating" by background
  const textColorClass = isTransparent ? 'text-white' : 'text-brand-milktea';
  const logoColorClass = isTransparent ? 'text-white' : 'text-brand-gold';
  // Active link: White underline when transparent, Dark underline when scrolled
  const activeLinkClass = isTransparent ? 'text-white border-b border-white' : 'text-brand-text border-b border-brand-text';
  // Hover: White opacity when transparent, Gold when scrolled
  const hoverColorClass = isTransparent ? 'hover:text-white/70' : 'hover:text-brand-gold';
  const iconColorClass = isTransparent ? 'text-white' : 'text-brand-text';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-bg/95 backdrop-blur-md border-brand-muted/20 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${iconColorClass} ${hoverColorClass} transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo - Text Mo&An */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link to="/" className="block hover:opacity-80 transition-opacity">
              <h1 className={`font-serif text-3xl md:text-4xl tracking-tighter transition-colors duration-300 ${logoColorClass}`}>
                {BRAND_NAME}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest transition-all duration-300 font-medium pb-1 border-b border-transparent ${
                  location.pathname === link.path ? activeLinkClass : textColorClass
                } ${hoverColorClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className={`flex items-center space-x-4 md:space-x-6 ${iconColorClass}`}>
            <button className={`${hoverColorClass} transition-colors hidden sm:block`}>
              <Search size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className={`relative cursor-pointer ${hoverColorClass} transition-colors`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className={`absolute -top-1 -right-1 text-[10px] w-4 h-4 rounded-full flex items-center justify-center ${isTransparent ? 'bg-white text-brand-text' : 'bg-brand-gold text-white'}`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-t border-brand-muted/10 shadow-lg h-screen fade-in">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-serif tracking-widest border-b border-brand-muted/10 pb-2 ${
                  location.pathname === link.path ? 'text-brand-text' : 'text-brand-milktea'
                }`}
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