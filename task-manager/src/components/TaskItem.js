import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch, ACTIONS } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id });
  };

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: task.id, text: newText } });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={handleToggle} 
          className="task-checkbox"
        />
        
        {isEditing ? (
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className="task-text" onClick={handleToggle}>{task.text}</span>
        )}
      </div>

      <div className="task-actions">
        <button className="btn edit-btn" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;