import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.size} Pizza ({item.toppings.join(', ')})</span>
                <strong>${item.price.toFixed(2)}</strong>
                <button className="btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>X</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button className="btn-danger" onClick={() => dispatch(clearCart())}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;