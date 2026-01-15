import React from 'react';
import { useExpenseManager } from './hooks/useExpenseManager';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

function App() {
  // Destructure all the logic we need from our custom hook
  const { 
    filteredExpenses, 
    addExpense, 
    deleteExpense, 
    filter, 
    setFilter, 
    totalSpending 
  } = useExpenseManager();

  return (
    <div className="app-container">
      <header>
        <h1>💸 Personal Expense Tracker</h1>
        <p>Built with React Custom Hooks</p>
      </header>
      
      <div className="main-content">
        <div className="left-panel">
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseSummary total={totalSpending} />
        </div>

        <div className="right-panel">
          <ExpenseFilter filter={filter} setFilter={setFilter} />
          <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;