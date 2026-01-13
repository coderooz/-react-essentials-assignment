import React, { createContext, useReducer, useContext, useEffect } from 'react';

// 1. Initial State
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [] // Persist data optional, but good practice
};

// 2. Action Types
const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  CLEAR_TASKS: 'CLEAR_TASKS'
};

// 3. Reducer Function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
      };
    
    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case ACTIONS.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        )
      };

    case ACTIONS.CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      };

    default:
      return state;
  }
};

// 4. Create Context
const TaskContext = createContext();

// 5. Provider Component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Optional: Save to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch, ACTIONS }}>
      {children}
    </TaskContext.Provider>
  );
};

// 6. Custom Hook for easy access
export const useTaskContext = () => {
  return useContext(TaskContext);
};