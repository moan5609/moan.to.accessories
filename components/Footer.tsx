import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream mt-24 pt-16 pb-12 border-t border-brand-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="block opacity-90 hover:opacity-100 transition-opacity">
               <h2 className="font-serif text-3xl text-brand-gold tracking-tight">{BRAND_NAME}</h2>
            </Link>
            <p className="text-brand-milktea text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0 pt-2">
              讓每個瞬間，都成為另一個溫柔。<br/>
              Moment & Another
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <h4 className="font-serif text-brand-text text-sm mb-2 tracking-widest">INFO</h4>
            <Link to="/about" className="text-brand-milktea text-sm hover:text-brand-gold transition-colors">關於我們 About</Link>
            <Link to="/faq" className="text-brand-milktea text-sm hover:text-brand-gold transition-colors">購物須知 FAQ</Link>
            <Link to="/faq" className="text-brand-milktea text-sm hover:text-brand-gold transition-colors">售後服務 Service</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="text-brand-milktea hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@moan.com" className="text-brand-milktea hover:text-brand-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-brand-milktea font-light">
              © 2024 {BRAND_NAME} Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;