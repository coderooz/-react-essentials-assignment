import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzaOption, toggleArrayItem, calculatePrice, resetPizzaState } from '../features/pizzaSlice';
import { addToCart } from '../features/cartSlice';

const PizzaMenu = () => {
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.pizza);
  const user = useSelector((state) => state.user);

  // Recalculate price whenever pizza state changes
  useEffect(() => {
    dispatch(calculatePrice());
  }, [pizza.size, pizza.toppings, pizza.sides, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...pizza, price: pizza.currentPrice }));
    dispatch(resetPizzaState());
  };

  if (!user.isSubmitted) return <div className="warning-box">Please Log In / Sign Up to Order</div>;

  return (
    <div className="menu-container">
      <h2>Build Your Pizza</h2>
      
      <div className="control-group">
        <label>Size:</label>
        <select name="size" value={pizza.size} onChange={(e) => dispatch(setPizzaOption({ name: 'size', value: e.target.value }))}>
          <option value="Small">Small ($10)</option>
          <option value="Medium">Medium ($14)</option>
          <option value="Large">Large ($18)</option>
        </select>
      </div>

      <div className="control-group">
        <label>Toppings ($1.50):</label>
        {['Pepperoni', 'Mushrooms', 'Onions', 'Olives'].map((t) => (
          <button 
            key={t} 
            className={`toggle-btn ${pizza.toppings.includes(t) ? 'active' : ''}`}
            onClick={() => dispatch(toggleArrayItem({ type: 'toppings', value: t }))}
          >
            {t}
          </button>
        ))}
      </div>

      <h3>Total: ${pizza.currentPrice.toFixed(2)}</h3>
      <button className="btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PizzaMenu;