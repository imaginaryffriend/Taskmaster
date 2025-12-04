import React from 'react';

const CommunityCard = ({ community, onJoin }) => {
  const getInitial = (name) => name.charAt(0).toUpperCase();
  
  return (
    <div className="community-card">
      <div className="community-header">
        <div className="community-avatar">
          {getInitial(community.name)}
        </div>
        <div className="community-info">
          <h3>{community.name}</h3>
          <p className="category">{community.category}</p>
        </div>
        <button 
          className="join-btn"
          onClick={() => onJoin(community.id)}
        >
          Join
        </button>
      </div>
      
      <p className="community-description">{community.description}</p>
      
      <div className="community-footer">
        <span className="members">
          👥 {community.members.toLocaleString()} members
        </span>
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
