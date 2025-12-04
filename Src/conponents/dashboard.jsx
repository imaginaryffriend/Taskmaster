import React from 'react';

const Dashboard = ({ tasks, communities }) => {
  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const totalCommunities = communities.length;
  const totalMembers = communities.reduce((sum, community) => sum + community.members, 0);

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>Total Tasks</h3>
            <p className="stat-number">{totalTasks}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Completed Tasks</h3>
            <p className="stat-number">{completedTasks}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h3>Pending Tasks</h3>
            <p className="stat-number">{pendingTasks}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Total Communities</h3>
            <p className="stat-number">{totalCommunities}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-info">
            <h3>Total Members</h3>
            <p className="stat-number">{totalMembers.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>Completion Rate</h3>
            <p className="stat-number">
              {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
            </p>
          </div>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {tasks.slice(0, 3).map(task => (
            <div key={task.id} className="activity-item">
              <span className="activity-icon">
                {task.completed ? '✅' : '📝'}
              </span>
              <span className="activity-text">
                {task.text} {task.completed ? 'completed' : 'created'}
              </span>
            </div>
          ))}
          {communities.slice(0, 2).map(community => (
            <div key={community.id} className="activity-item">
              <span className="activity-icon">👥</span>
              <span className="activity-text">
                {community.name} community created
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
