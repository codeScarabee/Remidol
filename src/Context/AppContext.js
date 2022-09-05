import { createContext, useState } from 'react';
import tasksData from '../data/tasksData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [completedTasks, setCompletedTasks] = useState([]);

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
        detachCompleted,
        undoCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
