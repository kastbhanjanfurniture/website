import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Sectional Sofa',
    price: 1299,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sofas',
    description: 'A luxurious modern sectional sofa perfect for contemporary living spaces. Features premium fabric upholstery and comfortable cushioning.',
    material: 'Premium Fabric, Solid Wood Frame',
    dimensions: '120" W x 85" D x 35" H',
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Elegant Dining Table',
    price: 899,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dining',
    description: 'Elegant wooden dining table that seats 6 people comfortably. Perfect for family gatherings and dinner parties.',
    material: 'Solid Oak Wood',
    dimensions: '72" W x 36" D x 30" H',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'King Size Platform Bed',
    price: 799,
    image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bedroom',
    description: 'Modern platform bed with clean lines and a minimalist design. Built with sustainable materials for lasting comfort.',
    material: 'Sustainable Wood, Linen Upholstery',
    dimensions: '80" W x 84" D x 14" H',
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 449,
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Office',
    description: 'High-performance ergonomic office chair designed for all-day comfort. Features adjustable height and lumbar support.',
    material: 'Mesh, Aluminum Base',
    dimensions: '26" W x 26" D x 40-44" H',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '5',
    name: 'Vintage Leather Armchair',
    price: 649,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sofas',
    description: 'Classic vintage-style leather armchair that adds character to any room. Hand-crafted with genuine leather.',
    material: 'Genuine Leather, Hardwood Frame',
    dimensions: '32" W x 34" D x 42" H',
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Glass Coffee Table',
    price: 399,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tables',
    description: 'Contemporary glass coffee table with chrome legs. Perfect centerpiece for modern living rooms.',
    material: 'Tempered Glass, Chrome Steel',
    dimensions: '48" W x 24" D x 16" H',
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: '7',
    name: 'Bookshelf Storage Unit',
    price: 299,
    image: 'https://images.pexels.com/photos/1854037/pexels-photo-1854037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Storage',
    description: 'Versatile bookshelf storage unit with multiple compartments. Great for organizing books, decor, and personal items.',
    material: 'Engineered Wood',
    dimensions: '31" W x 12" D x 71" H',
    inStock: true,
    rating: 4.3,
    reviews: 45
  },
  {
    id: '8',
    name: 'Accent Floor Lamp',
    price: 179,
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Lighting',
    description: 'Modern accent floor lamp with adjustable brightness. Features a sleek design that complements any decor style.',
    material: 'Metal, Fabric Shade',
    dimensions: '12" W x 12" D x 58" H',
    inStock: true,
    rating: 4.6,
    reviews: 92
  }
];

export const categories = [
  { name: 'Sofas', count: 15 },
  { name: 'Bedroom', count: 23 },
  { name: 'Dining', count: 18 },
  { name: 'Office', count: 12 },
  { name: 'Tables', count: 16 },
  { name: 'Storage', count: 14 },
  { name: 'Lighting', count: 8 },
  { name: 'Decor', count: 21 }
];