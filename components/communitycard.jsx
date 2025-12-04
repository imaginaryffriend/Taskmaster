import React from 'react';

const CommunityCard = ({ community, onJoin }) => {
  return (
    <div className="community-card">
      <div className="card-header">
        <div className="community-icon">👥</div>
        <div className="community-info">
          <h3>{community.name}</h3>
          <span className="category">{community.category}</span>
        </div>
        <button 
          className="join-btn"
          onClick={() => onJoin(community.id)}
        >
          Join
        </button>
      </div>
      
      <p className="description">{community.description}</p>
      
      <div className="card-footer">
        <span className="members">👤 {community.members} members</span>
        <div className="tags">
          {community.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
