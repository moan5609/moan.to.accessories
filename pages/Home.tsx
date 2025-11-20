import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 3);
  
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image with soft overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/292/1920/1080" 
            alt="MO&AN Atmosphere" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-brand-bg/20 mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-widest drop-shadow-sm mb-6 opacity-90">
            MO<span className="text-brand-gold/80">&</span>AN
          </h1>
          <p className="text-white/90 text-sm md:text-base tracking-[0.2em] font-light mb-10 max-w-md leading-loose">
            讓每個瞬間<br/>都成為另一個溫柔
          </p>
          <Link 
            to="/shop" 
            className="inline-block border border-white/60 text-white px-8 py-3 text-xs tracking-[0.2em] hover:bg-white hover:text-brand-text transition-all duration-500 backdrop-blur-[2px]"
          >
            EXPLORE
          </Link>
        </div>
      </section>

      {/* Introduction / Mood */}
      <section className="py-24 md:py-32 bg-brand-bg">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="block text-brand-gold text-xs tracking-widest mb-6">PHILOSOPHY</span>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-text mb-8 leading-relaxed">
            不是華麗的珠寶，<br/>是生活裡的呼吸。
          </h2>
          <p className="text-brand-muted font-light leading-loose text-sm md:text-base">
            我們相信飾品不該是束縛，而是日常的陪伴。<br/>
            在忙碌的日子裡，低頭看見指尖的光澤，<br/>
            希望能給你帶來片刻的寧靜。
          </p>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-brand-muted/10 pb-4">
          <h2 className="font-serif text-xl tracking-widest text-brand-text">NEW ARRIVALS</h2>
          <Link to="/shop" className="text-xs text-brand-muted hover:text-brand-gold flex items-center gap-1 transition-colors">
            VIEW ALL <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Visual Story Split Section */}
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">
          <div className="relative h-[400px] md:h-full bg-brand-muted/10 overflow-hidden">
             <img 
              src="https://picsum.photos/id/338/1000/1000" 
              alt="Lifestyle" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center p-12 md:p-24 bg-brand-cream">
            <h3 className="font-serif text-2xl text-brand-text mb-6 tracking-widest">
              剛剛好的美感
            </h3>
            <p className="text-brand-muted font-light leading-loose text-sm mb-8 max-w-xs">
              不張揚，不喧嘩。<br/>
              就像午後三點的陽光，<br/>
              溫暖而舒適。<br/>
              MO&AN 陪伴你度過每一個日常瞬間。
            </p>
            <Link to="/about" className="text-xs border-b border-brand-text pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors tracking-widest">
              READ OUR STORY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;