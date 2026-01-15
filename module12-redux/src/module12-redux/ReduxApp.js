import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import PizzaMenu from './components/PizzaMenu';
import Cart from './components/Cart';
import './ReduxStyles.css';

const ReduxAppContent = () => {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className="redux-app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === 'signup' && <SignupForm />}
        {activeTab === 'menu' && <PizzaMenu />}
        {activeTab === 'cart' && <Cart />}
      </div>
    </div>
  );
};

const ReduxApp = () => (
  <Provider store={store}>
    <ReduxAppContent />
  </Provider>
);

export default ReduxApp;