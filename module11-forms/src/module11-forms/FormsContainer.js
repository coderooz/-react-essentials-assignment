import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import PizzaOrderForm from './PizzaOrderForm';
import './FormStyles.css'; // We will create this below

const FormsContainer = () => {
  const [activeTab, setActiveTab] = useState('registration');

  return (
    <div className="main-wrapper">
      <nav className="form-nav">
        <button 
          className={activeTab === 'registration' ? 'active' : ''} 
          onClick={() => setActiveTab('registration')}
        >
          User Registration
        </button>
        <button 
          className={activeTab === 'pizza' ? 'active' : ''} 
          onClick={() => setActiveTab('pizza')}
        >
          Mario's Pizza
        </button>
      </nav>

      <div className="content-area">
        {activeTab === 'registration' ? <RegistrationForm /> : <PizzaOrderForm />}
      </div>
    </div>
  );
};

export default FormsContainer;