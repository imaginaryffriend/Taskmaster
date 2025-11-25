import React, { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>TaskMaster</h1>
          <p>Organize your tasks efficiently</p>
        </header>

        <TaskForm onAddTask={addTask} />
        
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'active' ? 'active' : ''}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <TaskList 
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTaskCompletion}
        />

        <div className="stats">
          <p>Total tasks: {tasks.length}</p>
          <p>Completed: {tasks.filter(task => task.completed).length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
