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
      description: 'A community for React developers to share knowledge and collaborate',
      members: 2450,
      category: 'Programming',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      name: 'UI/UX Design',
      description: 'Design community for sharing resources, getting feedback, and learning',
      members: 1890,
      category: 'Design',
      tags: ['Figma', 'UI', 'UX']
    },
    {
      id: 3,
      name: 'Project Management',
      description: 'Discuss project management methodologies and tools',
      members: 1250,
      category: 'Business',
      tags: ['Agile', 'Scrum', 'Management']
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

  // Filter tasks
  const todoTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container">
        {activeTab === 'tasks' ? (
          <>
            <TaskForm onSubmit={addTask} />
            
            <div className="task-sections">
              <div className="task-section">
                <h3>To Do ({todoTasks.length})</h3>
                <TaskList 
                  tasks={todoTasks} 
                  onDelete={deleteTask} 
                  onToggle={toggleTask} 
                />
              </div>
              
              <div className="task-section">
                <h3>Completed ({completedTasks.length})</h3>
                <TaskList 
                  tasks={completedTasks} 
                  onDelete={deleteTask} 
                  onToggle={toggleTask} 
                />
              </div>
            </div>
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
