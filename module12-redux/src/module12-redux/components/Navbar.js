import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="redux-nav">
      <h1>Redux Pizza Co.</h1>
      <div>
        <button onClick={() => setActiveTab('signup')}>Signup</button>
        <button onClick={() => setActiveTab('menu')}>Menu</button>
        <button onClick={() => setActiveTab('cart')}>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;