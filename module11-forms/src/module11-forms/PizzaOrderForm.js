import React, { useState, useEffect } from 'react';

const PRICES = {
  sizes: { Small: 10, Medium: 14, Large: 18 },
  crusts: { Thin: 0, 'Deep Dish': 2, 'Cheese Stuffed': 3 },
  toppings: 1.5,
  sides: 3
};

const PizzaOrderForm = () => {
  const [order, setOrder] = useState({
    size: 'Medium',
    crust: 'Thin',
    toppings: [],
    sides: [],
    quantity: 1
  });

  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Available Options
  const toppingsList = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra Cheese'];
  const sidesList = ['Garlic Bread', 'Cola (2L)', 'Chicken Wings', 'Dipping Sauce'];

  // Calculate Price Dynamic Updates
  useEffect(() => {
    const sizePrice = PRICES.sizes[order.size];
    const crustPrice = PRICES.crusts[order.crust];
    const toppingsPrice = order.toppings.length * PRICES.toppings;
    const sidesPrice = order.sides.length * PRICES.sides;

    const singlePizzaTotal = sizePrice + crustPrice + toppingsPrice;
    const finalTotal = (singlePizzaTotal * order.quantity) + sidesPrice;

    setTotal(finalTotal);
  }, [order]);

  // Handlers
  const handleCheckbox = (e, type) => {
    const { value, checked } = e.target;
    let updatedList = [...order[type]];

    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter(item => item !== value);
    }

    setOrder({ ...order, [type]: updatedList });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    localStorage.setItem('lastOrder', JSON.stringify(order));
  };

  if (orderPlaced) {
    return (
      <div className="success-message">
        <h2>🍕 Order Placed!</h2>
        <p>Your {order.size} {order.crust} pizza is being prepared.</p>
        <h3>Total Paid: ${total.toFixed(2)}</h3>
        <button onClick={() => setOrderPlaced(false)}>Order Another</button>
      </div>
    );
  }

  return (
    <div className="pizza-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Mario's Pizza Order</h2>

        {/* 1. Size */}
        <div className="form-group">
          <label>Choose Size:</label>
          <select value={order.size} onChange={e => setOrder({ ...order, size: e.target.value })}>
            {Object.keys(PRICES.sizes).map(s => <option key={s} value={s}>{s} (${PRICES.sizes[s]})</option>)}
          </select>
        </div>

        {/* 2. Crust */}
        <div className="form-group">
          <label>Crust Type:</label>
          {Object.keys(PRICES.crusts).map(c => (
            <div key={c} className="radio-group">
              <input 
                type="radio" 
                name="crust" 
                value={c} 
                checked={order.crust === c} 
                onChange={e => setOrder({ ...order, crust: e.target.value })} 
              />
              {c} (+${PRICES.crusts[c]})
            </div>
          ))}
        </div>

        {/* 3. Toppings */}
        <div className="form-group">
          <label>Toppings ($1.50 ea):</label>
          <div className="checkbox-grid">
            {toppingsList.map(t => (
              <label key={t}>
                <input 
                  type="checkbox" 
                  value={t} 
                  onChange={e => handleCheckbox(e, 'toppings')} 
                  checked={order.toppings.includes(t)}
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        {/* 4. Sides */}
        <div className="form-group">
          <label>Sides ($3.00 ea):</label>
          <div className="checkbox-grid">
            {sidesList.map(s => (
              <label key={s}>
                <input 
                  type="checkbox" 
                  value={s} 
                  onChange={e => handleCheckbox(e, 'sides')}
                  checked={order.sides.includes(s)}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* 5. Quantity */}
        <div className="form-group">
          <label>Quantity:</label>
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={order.quantity} 
            onChange={e => setOrder({ ...order, quantity: Number(e.target.value) })} 
          />
        </div>

      </form>

      {/* Live Summary Panel */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p><strong>Size:</strong> {order.size}</p>
        <p><strong>Crust:</strong> {order.crust}</p>
        <p><strong>Toppings:</strong> {order.toppings.length > 0 ? order.toppings.join(', ') : 'None'}</p>
        <p><strong>Sides:</strong> {order.sides.length > 0 ? order.sides.join(', ') : 'None'}</p>
        <p><strong>Qty:</strong> {order.quantity}</p>
        <hr />
        <h2 className="total-price">Total: ${total.toFixed(2)}</h2>
        <button className="submit-btn" onClick={handleSubmit}>Place Order</button>
      </div>
    </div>
  );
};

export default PizzaOrderForm;