import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="group block cursor-pointer">
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-brand-cream/50 mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Story Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/80 backdrop-blur-[2px] px-3 py-1 text-[10px] tracking-widest text-brand-text uppercase border border-brand-muted/10 shadow-sm">
            {product.storyTag}
          </span>
        </div>

        {/* Images - Transition */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.name} wearing`}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />
      </div>

      {/* Info */}
      <div className="text-center space-y-1">
        <h3 className="text-sm text-brand-text tracking-widest font-serif group-hover:text-brand-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-brand-muted font-light">
          NT$ {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;