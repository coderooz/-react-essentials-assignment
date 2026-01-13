import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskSummary = () => {
  const { tasks, dispatch, ACTIONS } = useTaskContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="task-summary">
      <p>
        <strong>{completedTasks}</strong> / <strong>{totalTasks}</strong> tasks completed
      </p>
      {totalTasks > 0 && (
        <button 
          className="clear-btn" 
          onClick={() => dispatch({ type: ACTIONS.CLEAR_TASKS })}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default TaskSummary;