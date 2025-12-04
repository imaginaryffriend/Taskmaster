import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CommunityCard from './components/CommunityCard';
import CommunityForm from './components/CommunityForm';
import Dashboard from './components/Dashboard';
function App() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [tasks, setTasks] = useState([]);
  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: 'React Developers',
      description: 'A community for React developers',
      members: 245,
      category: 'Programming'
    },
    {
      id: 2,
      name: 'UI/UX Designers',
      description: 'Design tips and resources',
      members: 189,
      category: 'Design'
    }
  ]);
  const [showCommunityForm, setShowCommunityForm] = useState(false);

  // Task functions
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Community functions
  const addCommunity = (community) => {
    const newCommunity = {
      id: Date.now(),
      ...community,
      members: 1
    };
    setCommunities([...communities, newCommunity]);
    setShowCommunityForm(false);
  };

  const joinCommunity = (id) => {
    setCommunities(communities.map(community =>
      community.id === id 
        ? { ...community, members: community.members + 1 }
        : community
    ));
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container">
        {activeTab === 'tasks' ? (
          <>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
          </>
        ) : (
          <div className="communities-page">
            <div className="communities-header">
              <h2>Communities</h2>
              <button 
                className="create-btn"
                onClick={() => setShowCommunityForm(true)}
              >
                + Create Community
              </button>
            </div>

            {showCommunityForm && (
              <div className="modal-overlay">
                <div className="modal">
                  <CommunityForm 
                    onSubmit={addCommunity}
                    onCancel={() => setShowCommunityForm(false)}
                  />
                </div>
              </div>
            )}

            <div className="communities-grid">
              {communities.map(community => (
                <CommunityCard
                  key={community.id}
                  community={community}
                  onJoin={joinCommunity}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
