// Mock data for the clothing store

export const categories = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    description: 'Modern classics and essential basics.'
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    description: 'Elegance redefined for the contemporary woman.'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://images.unsplash.com/photo-1519238263530-99b84be5e381?auto=format&fit=crop&q=80&w=800',
    description: 'Playful and durable styles for little ones.'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
    description: 'The perfect finishing touch.'
  }
];

export const products = [
  {
    id: '1',
    name: 'Premium Silk Blend Shirt',
    price: 120,
    discount: 20, // 20% off
    category: 'men',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=600',
    description: 'A luxurious silk-blend shirt perfect for evening wear.',
    isNew: true,
  },
  {
    id: '2',
    name: 'Oversized Wool Coat',
    price: 280,
    discount: 0,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600',
    description: 'Stay warm and stylish with this timeless oversized wool coat.',
    isNew: false,
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 95,
    discount: 10,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=600',
    description: 'A rugged classic that never goes out of style.',
    isNew: false,
  },
  {
    id: '4',
    name: 'Pleated Midi Skirt',
    price: 85,
    discount: 0,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1583496661160-c25b64d02dc2?auto=format&fit=crop&q=80&w=600',
    description: 'Elegant pleated midi skirt, versatile for day or night.',
    isNew: true,
  },
  {
    id: '5',
    name: 'Kids Colorblock Hoodie',
    price: 45,
    discount: 15,
    category: 'kids',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600',
    description: 'Comfortable and colorful hoodie for everyday play.',
    isNew: false,
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    price: 150,
    discount: 0,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
    description: 'Handcrafted leather crossbody bag with adjustable strap.',
    isNew: true,
  },
  {
    id: '7',
    name: 'Essential Cotton T-Shirt',
    price: 35,
    discount: 0,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    description: 'The perfect basic tee, ethically sourced and super soft.',
    isNew: false,
  },
  {
    id: '8',
    name: 'High-Rise Wide Leg Jeans',
    price: 110,
    discount: 25,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
    description: 'Flattering high-rise jeans with a modern wide-leg silhouette.',
    isNew: false,
  }
];

export const getDiscountedPrice = (price, discountPercent) => {
  if (!discountPercent) return price;
  return (price * (1 - discountPercent / 100)).toFixed(2);
};
