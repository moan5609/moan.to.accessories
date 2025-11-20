import React, { useMemo, useState } from 'react';
import { X, Trash2, Copy, ExternalLink, Minus, Plus, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface CartItemState {
  productId: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemState[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const [copied, setCopied] = useState(false);
  
  // Hydrate cart items with product data
  const hydratedItems = useMemo(() => {
    return cartItems.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter((item): item is Product & { quantity: number } => item !== null);
  }, [cartItems]);

  const totalAmount = hydratedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Generate text for the clipboard
  const orderSummaryText = useMemo(() => {
    if (hydratedItems.length === 0) return '';
    
    const itemsList = hydratedItems.map((item, index) => 
      `${index + 1}. ${item.name} (ID:${item.id}) x${item.quantity} - NT$${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    return `【MO&AN 訂購單】
------------------------
訂購商品：
${itemsList}
------------------------
總金額：NT$ ${totalAmount.toLocaleString()}
------------------------
付款方式（全支付/LINE Pay/匯款）請於表單勾選`;
  }, [hydratedItems, totalAmount]);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-brand-bg z-[70] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-brand-muted/10 bg-brand-bg">
          <h2 className="font-serif text-xl tracking-widest text-brand-text">
            購物車 <span className="text-sm text-brand-muted font-light ml-2">Cart ({hydratedItems.length})</span>
          </h2>
          <button onClick={onClose} className="text-brand-muted hover:text-brand-text transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {hydratedItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-muted space-y-4 opacity-60">
              <span className="text-4xl">🕸</span>
              <p className="font-light tracking-widest">購物車是空的</p>
              <p className="text-xs">Your bag is empty.</p>
              <button onClick={onClose} className="text-xs underline hover:text-brand-gold mt-4">
                去逛逛 Go Shopping
              </button>
            </div>
          ) : (
            hydratedItems.map(item => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-24 flex-shrink-0 bg-brand-cream overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm text-brand-text font-serif tracking-wide">{item.name}</h3>
                    <p className="text-xs text-brand-muted mt-1">NT$ {item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-brand-muted/20">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-brand-muted/5 text-brand-muted"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs text-brand-text">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="p-1 hover:bg-brand-muted/5 text-brand-muted"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-brand-muted hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout Section */}
        {hydratedItems.length > 0 && (
          <div className="bg-brand-cream/30 p-6 border-t border-brand-muted/10 space-y-6">
            
            {/* Summary */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm tracking-widest text-brand-text">總金額 Total</span>
              <span className="text-xl font-serif text-brand-text">NT$ {totalAmount.toLocaleString()}</span>
            </div>

            {/* Manual Checkout Instructions */}
            <div className="bg-white p-4 border border-brand-muted/20 space-y-3">
              <div className="flex items-center gap-2 text-brand-gold text-xs font-bold tracking-widest uppercase mb-1">
                <Copy size={12} /> Step 1. 複製訂單資訊
              </div>
              
              <div className="relative">
                <textarea 
                  readOnly
                  value={orderSummaryText}
                  className="w-full h-24 text-xs text-brand-muted bg-brand-bg p-3 resize-none border-0 focus:ring-0 font-mono leading-relaxed"
                />
                <button 
                  onClick={handleCopy}
                  className={`absolute bottom-2 right-2 px-3 py-1 text-[10px] flex items-center gap-1 transition-all duration-300 ${
                    copied 
                      ? 'bg-green-600 text-white' 
                      : 'bg-brand-text text-white hover:bg-brand-gold'
                  }`}
                >
                  {copied ? <><CheckCircle2 size={10}/> COPIED</> : 'COPY'}
                </button>
              </div>

              <div className="h-[1px] bg-brand-muted/10 my-2"></div>

              <div className="flex items-center gap-2 text-brand-gold text-xs font-bold tracking-widest uppercase">
                <ExternalLink size={12} /> Step 2. 填寫訂購單
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed">
                目前提供 全支付 / LINE Pay / 匯款。<br/>
                請複製上方資訊後，點擊下方按鈕填寫表單並付款。
              </p>
              <a 
                href="https://docs.google.com/forms/" // Replace with actual form link
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-brand-text text-white py-3 text-xs tracking-[0.2em] hover:bg-brand-gold transition-colors"
              >
                前往填寫訂購單 GO TO FORM
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;