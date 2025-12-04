import React, { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem';
import CommunityCard from './components/CommunityCard';
import Tabs from './components/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project submission', completed: false },
    { id: 2, text: 'Study React components', completed: true }
  ]);
  const [communities, setCommunities] = useState([
    { id: 1, name: 'React Developers', members: 2450, description: 'Learn and share React knowledge' },
    { id: 2, name: 'UI/UX Design', members: 1890, description: 'Design community for feedback' }
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (!newItem.trim()) return;
    
    if (activeTab === 'tasks') {
      const newTask = {
        id: tasks.length + 1,
        text: newItem,
        completed: false
      };
      setTasks([...tasks, newTask]);
    } else {
      const newCommunity = {
        id: communities.length + 1,
        name: newItem,
        members: 1,
        description: 'New community'
      };
      setCommunities([...communities, newCommunity]);
    }
    setNewItem('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>📋 Task & Community Manager</h1>
        <p>Manage your tasks and join communities</p>
      </header>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="content">
        <div className="add-form">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder={activeTab === 'tasks' ? 'Add a new task...' : 'Create a new community...'}
          />
          <button onClick={addItem}>
            {activeTab === 'tasks' ? '+ Add Task' : '+ Add Community'}
          </button>
        </div>

        {activeTab === 'tasks' ? (
          <div className="task-list">
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="community-grid">
            {communities.map(community => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
