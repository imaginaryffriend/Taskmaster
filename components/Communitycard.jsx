import React from 'react';

const CommunityCard = ({ community, onJoin }) => {
  return (
    <div className="community-card">
      <div className="card-header">
        <div className="community-icon">👥</div>
        <div>
          <h3>{community.name}</h3>
          <p className="category">{community.category}</p>
        </div>
      </div>
      
      <p className="description">{community.description}</p>
      
      <div className="card-footer">
        <span className="members">{community.members} members</span>
        <button 
          className="join-btn"
          onClick={() => onJoin(community.id)}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
