import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ChevronRight, Sparkles, Info, Check } from 'lucide-react';

interface ProductDetailProps {
  addToCart: (productId: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-brand-text mb-4">找不到商品 Product not found.</p>
        <Link to="/shop" className="text-brand-gold underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (isAdding) return;
    
    // 1. Button visual feedback
    setIsAdding(true);
    
    // 2. Actual Action
    addToCart(product.id);
    
    // 3. Reset button and show toast
    setTimeout(() => {
      setIsAdding(false);
      setShowToast(true);
    }, 800);

    // 4. Hide toast after a few seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg fade-in relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-xs text-brand-muted mb-8 tracking-widest">
          <Link to="/" className="hover:text-brand-text">HOME</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/shop" className="hover:text-brand-text">SHOP</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-brand-text">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-brand-cream w-full overflow-hidden relative">
               <img 
                 src={product.images[mainImageIndex]} 
                 alt={product.name} 
                 className="w-full h-full object-cover fade-in"
               />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImageIndex(idx)}
                  className={`aspect-[3/4] overflow-hidden border transition-all ${
                    mainImageIndex === idx ? 'border-brand-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Story Tag */}
            <div className="mb-4">
              <span className="inline-flex items-center text-brand-gold text-xs tracking-widest border border-brand-gold/30 px-3 py-1 rounded-full">
                <Sparkles size={10} className="mr-1" /> {product.storyTag}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-brand-text tracking-wide mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-brand-muted font-light mb-8">
              NT$ {product.price.toLocaleString()}
            </p>

            {/* Mini Story */}
            <div className="bg-brand-bg border-l-2 border-brand-gold/50 pl-6 py-2 mb-10">
              <p className="text-brand-text font-serif leading-loose italic text-sm md:text-base opacity-80">
                "{product.description}"
              </p>
            </div>

            {/* Specs */}
            <div className="space-y-4 mb-12">
              <h3 className="text-xs font-bold tracking-widest text-brand-text uppercase border-b border-brand-muted/10 pb-2">
                規格 Specification
              </h3>
              <div className="grid grid-cols-[100px_1fr] gap-2 text-sm text-brand-muted font-light">
                <span>材質 Material</span>
                <span className="text-brand-text">{product.specs.material}</span>
                <span>尺寸 Size</span>
                <span className="text-brand-text">{product.specs.size}</span>
                {product.specs.note && (
                  <>
                    <span>備註 Note</span>
                    <span className="text-brand-text">{product.specs.note}</span>
                  </>
                )}
              </div>
            </div>

            {/* Action */}
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full md:w-auto py-4 px-12 text-sm tracking-[0.2em] transition-all duration-300 border ${
                isAdding 
                  ? 'bg-brand-cream text-brand-muted border-transparent cursor-not-allowed' 
                  : 'bg-brand-text text-white border-brand-text hover:bg-white hover:text-brand-text'
              }`}
            >
              {isAdding ? 'PROCESSING...' : 'ADD TO BAG'}
            </button>

            {/* Additional Info Links */}
            <div className="mt-8 flex gap-6 text-xs text-brand-muted tracking-wider">
              <Link to="/faq" className="hover:text-brand-text flex items-center gap-1">
                <Info size={14}/> 保養方式 Care
              </Link>
              <Link to="/faq" className="hover:text-brand-text flex items-center gap-1">
                <Info size={14}/> 運送說明 Shipping
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-brand-text/95 backdrop-blur-sm text-white px-8 py-4 shadow-xl flex items-center gap-3 min-w-[280px] justify-center rounded-sm">
          <div className="bg-white/10 p-1 rounded-full">
             <Check size={16} className="text-brand-gold" />
          </div>
          <div className="text-center">
            <p className="text-sm tracking-[0.15em] font-light">已加入購物車</p>
            <p className="text-[10px] text-white/60 tracking-wider uppercase">Added to Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;