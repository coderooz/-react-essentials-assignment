import React from 'react';
import { useForm } from '../hooks/useForm';

const ExpenseForm = ({ onAddExpense }) => {
  const [values, handleChange, resetForm] = useForm({
    title: '',
    amount: '',
    category: 'Food',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title || !values.amount || !values.date) return;
    
    onAddExpense(values);
    resetForm();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <div className="form-group">
        <input type="text" name="title" placeholder="Title" value={values.title} onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Amount" value={values.amount} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <select name="category" value={values.category} onChange={handleChange}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Health">Health</option>
        </select>
        <input type="date" name="date" value={values.date} onChange={handleChange} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;