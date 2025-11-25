import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
          </div>
          <div className="task-actions">
            <span className="task-date">{task.createdAt}</span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="delete-btn"
              aria-label="Delete task"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
