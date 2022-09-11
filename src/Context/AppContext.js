import { createContext, useState } from 'react';
import tasksData from '../data/tasksData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [taskEdit, setTaskEdit] = useState({ task: {}, edit: false });
  const [completedTasks, setCompletedTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const editTask = (event, task) => {
    event.stopPropagation();
    setTaskEdit({ task, edit: true });
  };

  const updateTask = (id, updTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updTask } : task)));
    setTaskEdit({ task: {}, edit: false });
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
  console.log(taskEdit);
  return (
    <AppContext.Provider
      value={{
        tasks,
        taskEdit,
        completedTasks,
        addNewTask,
        editTask,
        updateTask,
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
