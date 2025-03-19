import React, { useState } from 'react';

const Categories = () => {
  const [categoryInput, setCategoryInput] = useState('');
  const [categories, setCategories] = useState([]);

  // Handle adding a new category
  const handleAddCategory = () => {
    if (categoryInput.trim()) {
      setCategories([...categories, categoryInput]);
      setCategoryInput(''); // Clear the input field after adding
    }
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <input
        type="text"
        id="category-input"
        placeholder="New Category"
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)} // Update input value
      />
      <button id="category-button" onClick={handleAddCategory}>
        Add
      </button> 

      <h2>Category List</h2>
      <ul id="category-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories
