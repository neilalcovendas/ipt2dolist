import React, { useState } from 'react';

function EditTaskModal({ task, setTasks, currentEditIndex, setCurrentEditIndex }) {
  const [taskName, setTaskName] = useState(task.name);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [category, setCategory] = useState(task.category);

  const saveEdit = () => {
    const updatedTask = { ...task, name: taskName, dueDate, category };
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[currentEditIndex] = updatedTask;
      return newTasks;
    });
    setCurrentEditIndex(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">-- Select Category --</option>
          {/* Add categories here */}
        </select>
        <button onClick={saveEdit}>Save</button>
        <button onClick={() => setCurrentEditIndex(null)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditTaskModal
