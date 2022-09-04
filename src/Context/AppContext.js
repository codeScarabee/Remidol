import { createContext, useState } from 'react';
import tasksData from '../data/tasksData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);

  const detachCompleted = (task) => {
    const filteredtasks = tasks.filter((item) => item !== task);
    const newtasks = [...filteredtasks, task];
    setTasks(newtasks);
  };
  const attachCompleted = (task) => {
    const filteredtasks = tasks.filter((item) => item !== task);
    const newtasks = [task, ...filteredtasks];
    setTasks(newtasks);
  };
  return (
    <AppContext.Provider
      value={{
        tasks,
        detachCompleted,
        attachCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
