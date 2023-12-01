import React, { useState, useEffect } from 'react';


import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';



const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Obtener tareas desde localStorage al cargar la página
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Actualizar localStorage cuando cambia el estado de las tareas
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completada: !task.completada } : task
    );

    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(), // Generar un ID
      name: taskName,
      completada: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
