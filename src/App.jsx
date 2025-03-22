import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './Component/CategoriesList';
import TaskList from './Component/TaskList';
import EditTaskModal from './Component/EditTaskModal';

function App() {
  const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')) || []);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      {/* Category Section */}
      <CategoryList categories={categories} setCategories={setCategories} />

      {/* Task Section */}
      <TaskList tasks={tasks} setTasks={setTasks} categories={categories} currentEditIndex={currentEditIndex} setCurrentEditIndex={setCurrentEditIndex} />

      {/* Edit Task Modal */}
      {currentEditIndex !== null && <EditTaskModal task={tasks[currentEditIndex]} setTasks={setTasks} currentEditIndex={currentEditIndex} setCurrentEditIndex={setCurrentEditIndex} />}
    </div>
  );
}

export default App;
