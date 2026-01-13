import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { dispatch, ACTIONS } = useTaskContext();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    dispatch({ type: ACTIONS.ADD_TASK, payload: inputValue });
    setInputValue('');
  };

  return (
    <form className="task-input-container" onSubmit={handleAddTask}>
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
};

export default TaskInput;