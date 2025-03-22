import React, { useState } from 'react';

function CategoryList({ categories, setCategories }) {
  const [categoryInput, setCategoryInput] = useState('');

  const addCategory = () => {
    const category = categoryInput.trim();
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
    }
    setCategoryInput('');
  };

  const deleteCategory = (categoryToDelete) => {
    if (window.confirm(`Are you sure you want to delete the category "${categoryToDelete}"?`)) {
      setCategories(categories.filter((category) => category !== categoryToDelete));
    }
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <input
        type="text"
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
        placeholder="New Category"
      />
      <button onClick={addCategory}>Add</button>

      <h2>Category List</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category} 
            <button onClick={() => deleteCategory(category)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
