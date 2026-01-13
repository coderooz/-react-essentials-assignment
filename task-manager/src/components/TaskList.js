import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;