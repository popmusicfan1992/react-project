import React from 'react';
import ProductCard from './ProductCard';

// Dữ liệu mẫu cho các sản phẩm
const products = [
  // Nhóm Aromatic Plants
  {
    id: 1,
    category: 'Aromatic',
    name: 'Lavender',
    description: 'Aromatic and soothing lavender plant.',
    cost: 10,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    category: 'Aromatic',
    name: 'Mint',
    description: 'Fresh mint plant to add flavor to your meals.',
    cost: 5,
    image: 'https://via.placeholder.com/150'
  },
  // Nhóm Medicinal Plants
  {
    id: 3,
    category: 'Medicinal',
    name: 'Aloe Vera',
    description: 'Healing aloe vera plant.',
    cost: 12,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    category: 'Medicinal',
    name: 'Ginseng',
    description: 'Boost energy with ginseng.',
    cost: 15,
    image: 'https://via.placeholder.com/150'
  }
];

const ProductListing = () => {
  // Lọc các sản phẩm theo nhóm
  const aromaticPlants = products.filter(product => product.category === 'Aromatic');
  const medicinalPlants = products.filter(product => product.category === 'Medicinal');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Aromatic Plants</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {aromaticPlants.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2>Medicinal Plants</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {medicinalPlants.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
