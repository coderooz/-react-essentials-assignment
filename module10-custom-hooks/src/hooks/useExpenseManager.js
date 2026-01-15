import { useState, useMemo } from 'react';
import useLocalStorage from './useLocalStorage';

export const useExpenseManager = () => {
  // Use our custom hook for persistence
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  
  // Local state for filters (no need to persist these usually)
  const [filter, setFilter] = useState({ category: 'All', date: '' });

  // 1. Add Expense
  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  // 2. Delete Expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  // 3. Filter Logic (Memoized for performance)
  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesCategory = filter.category === 'All' || expense.category === filter.category;
      const matchesDate = filter.date === '' || expense.date === filter.date;
      return matchesCategory && matchesDate;
    });
  }, [expenses, filter]);

  // 4. Calculate Total
  const totalSpending = useMemo(() => {
    return filteredExpenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  }, [filteredExpenses]);

  return {
    expenses,
    filteredExpenses,
    addExpense,
    deleteExpense,
    filter,
    setFilter,
    totalSpending
  };
};