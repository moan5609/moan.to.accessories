import { Product } from './types';

export const BRAND_NAME = "MO&AN";
export const BRAND_TAGLINE = "Moment & Another";

// Using Picsum placeholders that mimic jewelry/lifestyle vibes
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '晨露・珍珠耳環',
    price: 1280,
    category: 'earrings',
    images: [
      'https://picsum.photos/id/1011/800/1000', 
      'https://picsum.photos/id/331/800/1000'
    ],
    storyTag: '早晨的第一道光',
    description: '像是清晨葉片上未乾的露水，安靜地停留在耳畔。不張揚的光澤，適合需要一點點勇氣的星期一。',
    specs: {
      material: 'S925純銀厚鍍18K金 / 天然淡水珍珠',
      size: '珍珠直徑約 4-5mm',
      note: '天然珍珠形狀略有不同，為自然現象'
    },
    isNew: true
  },
  {
    id: 'p2',
    name: '午後・細鍊戒',
    price: 880,
    category: 'rings',
    images: [
      'https://picsum.photos/id/106/800/1000',
      'https://picsum.photos/id/107/800/1000'
    ],
    storyTag: '剛剛好的溫柔',
    description: '沒有固定的形狀，隨著手指的動作輕輕流動。它提醒你，生活可以再柔軟一點，不用總是緊繃著。',
    specs: {
      material: 'S925純銀',
      size: '可調節戒圍 (美圍 4-7)',
    },
    isBestSeller: true
  },
  {
    id: 'p3',
    name: '餘暉・霧金鎖骨鍊',
    price: 1580,
    category: 'necklaces',
    images: [
      'https://picsum.photos/id/175/800/1000',
      'https://picsum.photos/id/129/800/1000'
    ],
    storyTag: '陪伴',
    description: '把夕陽的最後一抹金色留在頸間。霧面處理的質感，像是經過歲月洗禮後的從容。',
    specs: {
      material: '黃銅鍍霧金',
      size: '鍊長 40cm + 5cm 延長鍊',
    },
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'p4',
    name: '流動・不規則手環',
    price: 1980,
    category: 'bracelets',
    images: [
      'https://picsum.photos/id/250/800/1000',
      'https://picsum.photos/id/64/800/1000'
    ],
    storyTag: '自由',
    description: '不完美的線條，才是最真實的模樣。我們都像這條手環一樣，在曲折中找到自己的平衡。',
    specs: {
      material: 'S925純銀',
      size: '內徑約 5.5cm',
    }
  },
  {
    id: 'p5',
    name: '靜謐・月光石耳釘',
    price: 1150,
    category: 'earrings',
    images: [
      'https://picsum.photos/id/437/800/1000',
      'https://picsum.photos/id/325/800/1000'
    ],
    storyTag: '晚安',
    description: '如月光般溫柔的藍暈，在黑夜裡給你最安靜的陪伴。適合在睡前閱讀時佩戴，感受平靜。',
    specs: {
      material: 'S925純銀 / 月光石',
      size: '約 6mm',
    },
    isNew: true
  }
];

export const CATEGORIES = [
  { id: 'all', label: '全部 All' },
  { id: 'earrings', label: '耳飾 Earrings' },
  { id: 'necklaces', label: '項鍊 Necklaces' },
  { id: 'rings', label: '戒指 Rings' },
  { id: 'bracelets', label: '手鍊 Bracelets' },
];