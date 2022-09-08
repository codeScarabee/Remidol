import { createContext, useState } from 'react';
import tasksData from '../data/tasksData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (event, task) => {
    if (window.confirm(`You Are Going To Delete This Task!`)) {
      setTasks(tasks.filter((item) => item !== task));
      setCompletedTasks(completedTasks.filter((item) => item !== task));
    }
    event.stopPropagation();
  };

  const detachCompleted = (task) => {
    const filteredtasks = tasks.filter((item) => item !== task);
    setTasks(filteredtasks);
    setCompletedTasks((prev) => [task, ...prev]);
  };
  const undoCompleted = (task) => {
    setCompletedTasks(completedTasks.filter((item) => item !== task));
    setTasks([task, ...tasks]);
  };
  return (
    <AppContext.Provider
      value={{
        tasks,
        completedTasks,
        addNewTask,
        deleteTask,
        detachCompleted,
        undoCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
