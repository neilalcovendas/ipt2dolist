import React, { useState } from 'react';
import Categories from './Component/Categories';
import Task from './Component/Task';

const App = () => {
  const [categories] = useState(['abc']);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Adds the new task to the list
  };

  return (
    <>
    <div className="container">
          <Categories />
         </div>

    <div className="container">
    <Task categories={categories} />
    </div>
    </>
  );
};

export default App
