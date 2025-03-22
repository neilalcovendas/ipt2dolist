import React, { useState } from 'react';

function TaskList({ tasks, setTasks, categories, currentEditIndex, setCurrentEditIndex }) {
  const [taskInput, setTaskInput] = useState('');
  const [dueDateInput, setDueDateInput] = useState('');
  const [categorySelect, setCategorySelect] = useState('');

  const addTask = () => {
    if (!taskInput.trim() || !categorySelect) {
      alert('Task name and category cannot be empty.');
      return;
    }

    const newTask = {
      name: taskInput,
      dueDate: dueDateInput,
      category: categorySelect,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setDueDateInput('');
    setCategorySelect('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <div className="task">
        <h2>Advanced Todo List</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="New Task"
        />
        <input
          type="date"
          value={dueDateInput}
          onChange={(e) => setDueDateInput(e.target.value)}
        />
        <select value={categorySelect} onChange={(e) => setCategorySelect(e.target.value)}>
          <option value="" disabled selected>
            -- Select Category --
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        <h2>Tasks List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} {task.dueDate ? ` - ${task.dueDate}` : ''} (Category: {task.category})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
