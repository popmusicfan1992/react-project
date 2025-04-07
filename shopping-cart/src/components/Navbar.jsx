import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Lấy danh sách sản phẩm trong giỏ hàng từ Redux store
  const cartItems = useSelector(state => state.cartItems);
  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Landing</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default Navbar;
