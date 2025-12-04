import React, { useState } from 'react';

const CommunityForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onSubmit({ name, description, category });
    setName('');
    setDescription('');
    setCategory('General');
  };

  return (
    <form className="community-form" onSubmit={handleSubmit}>
      <h3>Create New Community</h3>
      
      <input
        type="text"
        placeholder="Community Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
      />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
        <option value="Business">Business</option>
      </select>
      
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CommunityForm;
