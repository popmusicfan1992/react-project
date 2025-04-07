import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for house plants</p>
      <button onClick={handleShopNow}>Shop Now</button>
    </div>
  );
};

export default Landing;
