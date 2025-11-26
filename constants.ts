import { Product } from './types';

export const BRAND_NAME = "Mo&An";
export const BRAND_TAGLINE = "Moment & Another";

export const LOGO_URL = "https://placehold.co/600x250/transparent/C5A065?text=Mo+An&font=playfair-display";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '雙生小雛菊・純銀手鍊',
    price: 390,
    category: 'bracelets',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e2523026339?q=80&w=800&auto=format&fit=crop', // Similar to user provided: Bracelet on stone
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop'  // Silver texture
    ],
    storyTag: '漫步',
    description: '兩朵純銀小雛菊，輕盈地落在手腕上。花蕊處點綴著溫暖的金色，像是路邊偶遇的小驚喜，清新而美好。',
    specs: {
      material: 'S925純銀 / 局部鍍18K金',
      size: '鍊長 15cm + 3cm 延長鍊',
      note: '雙花造型，細緻銀鍊'
    },
    isNew: true
  },
  {
    id: 'p2',
    name: '月光・珍珠耳環',
    price: 280,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '溫柔',
    description: '溫潤的珍珠光澤，像是夜晚靜謐的月光。不搶眼，卻能溫柔地接住你所有的情緒。',
    specs: {
      material: 'S925銀針 / 天然淡水珍珠',
      size: '珍珠約 6mm',
    },
    isBestSeller: true
  },
  {
    id: 'p3',
    name: '極簡・幾何線戒',
    price: 250,
    category: 'rings',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '俐落',
    description: '簡單的線條，勾勒出生活的輪廓。單獨配戴展現個性，疊戴則更顯層次。',
    specs: {
      material: '銅鍍14K金',
      size: '可調節戒圍 (美圍 4-7)',
    }
  },
  {
    id: 'p4',
    name: '初戀・鎖骨鍊',
    price: 450,
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc5e?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '心動',
    description: '細緻的鍊身在鎖骨間閃爍，像是那些藏在心底、微微發亮的小祕密。',
    specs: {
      material: '鈦鋼鍍18K金',
      size: '鍊長 40cm + 5cm',
    },
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'p5',
    name: '流蘇・長耳環',
    price: 320,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1596944924616-b0e1215a8052?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617038224538-276365d96aff?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '搖曳',
    description: '隨著步伐輕輕擺動，修飾臉型線條，在舉手投足間增添一抹優雅。',
    specs: {
      material: 'S925銀針 / 合金',
      size: '長度約 4.5cm',
    }
  },
  {
    id: 'p6',
    name: '交織・雙層項鍊',
    price: 490,
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '豐富',
    description: '長短不一的鍊條交織，不用費心搭配就能擁有的層次感。',
    specs: {
      material: '合金鍍金',
      size: '內層38cm / 外層42cm',
    }
  },
  {
    id: 'p7',
    name: '微光・鋯石開口戒',
    price: 290,
    category: 'rings',
    images: [
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589128771245-1117d4747447?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '閃耀',
    description: '指間若隱若現的光芒，像是抓住了星星的碎片。',
    specs: {
      material: '銅鍍金 / 鋯石',
      size: '自由調節',
    },
    isBestSeller: true
  },
  {
    id: 'p8',
    name: '復古・紐結耳環',
    price: 350,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=800&auto=format&fit=crop'
    ],
    storyTag: '經典',
    description: '金色的紐結設計，充滿法式復古風情，搭配襯衫或毛衣都好看。',
    specs: {
      material: 'S925銀針 / 鍍18K金',
      size: '約 1.5cm',
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: '全部 All' },
  { id: 'earrings', label: '耳飾 Earrings' },
  { id: 'necklaces', label: '項鍊 Necklaces' },
  { id: 'rings', label: '戒指 Rings' },
  { id: 'bracelets', label: '手鍊 Bracelets' },
];