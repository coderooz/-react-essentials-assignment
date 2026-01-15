import React from 'react';

const ExpenseFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <label>Filter By:</label>
      <select 
        value={filter.category} 
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Health">Health</option>
      </select>
      
      <input 
        type="date" 
        value={filter.date} 
        onChange={(e) => setFilter({ ...filter, date: e.target.value })} 
      />
      
      <button onClick={() => setFilter({ category: 'All', date: '' })}>Clear Filters</button>
    </div>
  );
};

export default ExpenseFilter;