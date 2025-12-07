import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-75"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-shadow tracking-tight">
            Mo&An
          </h1>
          <p className="tracking-[0.3em] text-xs md:text-sm mb-6 text-white/90 font-light">
            MOMENT & ANOTHER
          </p>
          <div className="w-[1px] h-12 bg-white/30 mx-auto mb-6"></div>
          <p className="text-sm md:text-base mb-12 leading-relaxed tracking-widest font-light text-shadow">
            讓每個瞬間，<br className="md:hidden" />
            都成為另一個溫柔。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-10 py-3 border border-white/70 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-brand-text transition-all duration-300"
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-xs tracking-[0.25em] uppercase bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Keeping a small part of original design to bridge content) */}
      <section className="py-24 bg-brand-bg text-center px-6">
        <p className="text-brand-gold text-xs tracking-widest mb-4">PHILOSOPHY</p>
        <h2 className="font-serif text-2xl text-brand-text mb-8 tracking-widest">
          不只是飾品，是生活的註腳
        </h2>
        <p className="text-brand-muted text-sm font-light leading-loose max-w-xl mx-auto">
          在平凡的日子裡，<br/>
          尋找那些微微發光的片刻。
        </p>
      </section>
    </div>
  );
};

export default Home;