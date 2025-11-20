export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'earrings' | 'necklaces' | 'rings' | 'bracelets';
  images: string[]; // 0: Main, 1: Wearing/Lifestyle
  storyTag: string;
  description: string; // The "mini story"
  specs: {
    material: string;
    size: string;
    note?: string;
  };
  isNew?: boolean;
  isBestSeller?: boolean;
}

export type CartItem = Product & { quantity: number };

export interface FilterState {
  category: string | 'all';
}