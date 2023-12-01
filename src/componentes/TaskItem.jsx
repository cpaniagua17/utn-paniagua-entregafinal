import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {task.name}
      <button className="complete-button" onClick={handleComplete} >Complete</button>
      <button onClick={handleDelete} >Delete</button>
    </li>
  );
};

export default TaskItem;
