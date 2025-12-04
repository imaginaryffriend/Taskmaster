import React from 'react';

const CommunityCard = ({ community }) => {
  return (
    <div className="community-card">
      <div className="card-header">
        <h3>{community.name}</h3>
        <button className="join-btn">Join</button>
      </div>
      <p className="description">{community.description}</p>
      <div className="card-footer">
        <span>👥 {community.members} members</span>
      </div>
    </div>
  );
};

export default CommunityCard;
