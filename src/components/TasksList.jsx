import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import TaskCard from './TaskCard';

function TasksList() {
  const { tasks } = useContext(AppContext);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
