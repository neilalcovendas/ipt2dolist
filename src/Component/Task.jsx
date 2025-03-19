import React, { useState } from 'react';
import Categories from './Categories';
const Task = ({ categories, addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() && dueDate && selectedCategory) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        dueDate,
        category: selectedCategory,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setDueDate('');
      setSelectedCategory('');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="task-container">
      <div className="task">
        <h2>Advanced Todo List</h2>
        <label htmlFor="task-input">Task: </label>
        <input
          type="text"
          id="task-input"
          placeholder="New Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)} // Controlled input for task name
        />
        <label htmlFor="duedate-input">Due Date: </label>
        <input
          type="date"
          id="duedate-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)} // Controlled input for due date
        />
        <div>
          <label htmlFor="category-select">Categories: </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} // Controlled select for category
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button id="task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        <h2>Tasks List</h2>
        <input
          type="search"
          id="task-search-input"
          placeholder="Search Tasks"
          value={searchQuery}
          onChange={handleSearch} // Handle search input change
        />
        <ul id="task-list">
          {filteredTasks.map((task) => (
            <li key={task.id} className="list">
              <input type="checkbox" id={`todo-${task.id}`} />
              <label className="custom-checkbox" htmlFor={`todo-${task.id}`}>
                {task.name} - {task.dueDate} ({task.category})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task;
