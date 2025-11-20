import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl text-brand-text tracking-[0.15em] mb-4">SHOP</h1>
          <p className="text-brand-muted text-xs font-light tracking-widest">COLLECTION</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-sm tracking-widest transition-all duration-300 pb-1 border-b ${
                selectedCategory === cat.id
                  ? 'text-brand-text border-brand-gold'
                  : 'text-brand-muted border-transparent hover:text-brand-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-brand-muted font-light">
            此分類目前沒有商品。<br/>No products found in this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;