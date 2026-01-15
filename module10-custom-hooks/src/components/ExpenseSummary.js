import React from 'react';

const ExpenseSummary = ({ total }) => {
  return (
    <div className="expense-summary">
      <h2>Total Spending</h2>
      <p className={`total-amount ${total > 1000 ? 'high-spend' : ''}`}>
        ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default ExpenseSummary;