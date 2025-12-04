import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Task & Community Manager</h1>
      </div>
      <div className="nav-right">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={activeTab === 'tasks' ? 'active' : ''}
          onClick={() => setActiveTab('tasks')}
        >
          📋 Tasks
        </button>
        <button 
          className={activeTab === 'communities' ? 'active' : ''}
          onClick={() => setActiveTab('communities')}
        >
          👥 Communities
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
