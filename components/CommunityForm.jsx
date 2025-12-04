import React, { useState } from 'react';

const CommunityForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'General',
    tags: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    
    const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    onSubmit({
      ...formData,
      tags: tags.length ? tags : ['Community']
    });
  };

  return (
    <form className="community-form" onSubmit={handleSubmit}>
      <h3>Create Community</h3>
      
      <input
        type="text"
        placeholder="Community Name *"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        rows="3"
      />
      
      <select
        value={formData.category}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
      >
        <option value="General">General</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
      </select>
      
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={formData.tags}
        onChange={(e) => setFormData({...formData, tags: e.target.value})}
      />
      
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CommunityForm;
