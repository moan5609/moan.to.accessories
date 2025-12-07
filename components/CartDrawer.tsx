import React, { useMemo, useState } from 'react';
import { X, Trash2, CheckCircle2 } from 'lucide-react';
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
  
  // Hydrate cart items
  const hydratedItems = useMemo(() => {
    return cartItems.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter((item): item is Product & { quantity: number } => item !== null);
  }, [cartItems]);

  const totalAmount = hydratedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Generate order text
  const orderSummaryText = useMemo(() => {
    if (hydratedItems.length === 0) return '';
    const itemsList = hydratedItems.map((item, index) => 
      `${index + 1}. ${item.name} x${item.quantity} - NT$${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    return `【MO&AN 訂購單】\n------------------------\n訂購商品：\n${itemsList}\n------------------------\n總金額：NT$ ${totalAmount.toLocaleString()}\n------------------------\n付款方式（全支付/LINE Pay/匯款）請於表單勾選`;
  }, [hydratedItems, totalAmount]);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-brand-bg z-50 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-brand-text/10 bg-brand-bg">
          <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-brand-text">
            購物車 Cart
          </h2>
          <button onClick={onClose} className="text-brand-muted hover:text-brand-text transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {hydratedItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-muted space-y-2 opacity-60">
              <span className="text-2xl">🕸</span>
              <p className="text-sm tracking-widest font-light">購物車是空的</p>
            </div>
          ) : (
            <ul className="space-y-6 mb-8">
              {hydratedItems.map(item => (
                <li key={item.id} className="flex gap-4 border-b border-brand-text/5 pb-4 last:border-0">
                  <div className="w-16 h-16 bg-brand-cream rounded overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm text-brand-text truncate font-medium">{item.name}</h3>
                      <p className="text-xs text-brand-gold mt-0.5">NT$ {item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                       <div className="flex items-center gap-2">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-5 h-5 rounded-full border border-brand-muted/30 flex items-center justify-center text-xs text-brand-muted hover:bg-white">-</button>
                          <span className="text-xs text-brand-text w-3 text-center">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-5 h-5 rounded-full border border-brand-muted/30 flex items-center justify-center text-xs text-brand-muted hover:bg-white">+</button>
                       </div>
                       <button onClick={() => onRemove(item.id)} className="text-[10px] text-brand-muted hover:text-red-400 ml-auto flex items-center gap-1">
                         <Trash2 size={12}/> 移除
                       </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {hydratedItems.length > 0 && (
            <div className="border-t border-brand-text/10 pt-4">
              {/* Total */}
              <div className="flex justify-between items-center mb-6 text-sm">
                <span className="text-brand-text tracking-widest">總金額 Total</span>
                <strong className="text-brand-gold font-serif text-lg">NT$ {totalAmount.toLocaleString()}</strong>
              </div>

              {/* Step 1 */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-brand-text mb-2 tracking-widest">STEP 1. 複製訂單資訊</h3>
                <textarea 
                  readOnly 
                  value={orderSummaryText}
                  className="w-full h-24 text-xs p-3 rounded bg-brand-cream/50 border border-brand-text/10 resize-none mb-2 focus:outline-none text-brand-muted"
                />
                <button 
                  onClick={handleCopy}
                  className={`w-full py-2 text-xs tracking-[0.15em] border uppercase transition-all duration-300 flex justify-center items-center gap-2 ${
                    copied 
                      ? 'bg-green-600 text-white border-transparent' 
                      : 'bg-white border-brand-muted/30 text-brand-text hover:border-brand-text'
                  }`}
                >
                  {copied ? <><CheckCircle2 size={14}/> 已複製 Copied</> : '複製訂單內容 Copy'}
                </button>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xs font-bold text-brand-text mb-2 tracking-widest">STEP 2. 填寫訂購單</h3>
                <p className="text-[10px] text-brand-muted mb-3 leading-relaxed">
                  目前提供 全支付 / LINE Pay / 匯款。<br/>
                  請複製上方資訊後，再點擊下方按鈕前往表單填寫與付款。
                </p>
                <a 
                  href="https://docs.google.com/forms/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full py-3 text-center text-xs text-white bg-gradient-to-r from-[#C5A065] to-[#A89078] rounded-full tracking-[0.2em] shadow-sm hover:opacity-90 transition-opacity"
                >
                  前往填寫訂購單 GO TO FORM
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;