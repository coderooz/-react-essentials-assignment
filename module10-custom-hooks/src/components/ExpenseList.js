import React from 'react';

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p className="no-data">No expenses found.</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-info">
            <span className="expense-date">{expense.date}</span>
            <span className="expense-title">{expense.title}</span>
            <span className="expense-category-tag">{expense.category}</span>
          </div>
          <div className="expense-actions">
            <span className="expense-amount">${parseFloat(expense.amount).toFixed(2)}</span>
            <button onClick={() => onDelete(expense.id)} className="delete-btn">X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;