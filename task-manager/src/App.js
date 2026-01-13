import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Task Manager</h1>
          <p>Managed with Context API & useReducer</p>
        </header>
        
        <main className="app-main">
          <TaskInput />
          <TaskSummary />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;