import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Tính tổng chi phí của giỏ hàng
  const totalCost = cartItems.reduce((acc, item) => acc + item.cost * item.quantity, 0);

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: '100px' }}/>
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.cost}</p>
              <p>Total: ${item.cost * item.quantity}</p>
              <div>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span style={{ margin: '0 1rem' }}>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
      <h3>Total Cost: ${totalCost}</h3>
      <button onClick={handleContinueShopping} style={{ marginRight: '1rem' }}>Continue Shopping</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
