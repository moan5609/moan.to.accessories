import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream mt-24 pt-16 pb-12 border-t border-brand-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif text-xl tracking-widest text-brand-text">
              MO<span className="text-brand-gold">&</span>AN
            </h3>
            <p className="text-brand-muted text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              讓每個瞬間，都成為另一個溫柔。<br/>
              Moment & Another
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <h4 className="font-serif text-brand-text text-sm mb-2 tracking-widest">INFO</h4>
            <Link to="/about" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">關於我們 About</Link>
            <Link to="/faq" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">購物須知 FAQ</Link>
            <Link to="/faq" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">售後服務 Service</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@moan.com" className="text-brand-muted hover:text-brand-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-brand-muted font-light">
              © 2024 MO&AN Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;