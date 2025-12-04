import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CommunityCard from './components/CommunityCard';
import CommunityForm from './components/CommunityForm';

function App() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [tasks, setTasks] = useState([]);
  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: 'React Developers',
      description: 'Learn and share React knowledge',
      members: 245,
      category: 'Programming',
      tags: ['React', 'JavaScript']
    },
    {
      id: 2,
      name: 'UI/UX Design',
      description: 'Design tips and resources',
      members: 189,
      category: 'Design',
      tags: ['Figma', 'Design']
    }
  ]);
  const [showCommunityForm, setShowCommunityForm] = useState(false);

  // Task Functions
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

  // Community Functions
  const addCommunity = (communityData) => {
    const newCommunity = {
      id: Date.now(),
      ...communityData,
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
                className="create-community-btn"
                onClick={() => setShowCommunityForm(true)}
              >
                + Create Community
              </button>
            </div>

            {showCommunityForm && (
              <div className="modal">
                <div className="modal-content">
                  <CommunityForm 
                    onSubmit={addCommunity}
                    onCancel={() => setShowCommunityForm(false)}
                  />
                </div>
              </div>
            )}

            <div className="communities-list">
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
