import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function TaskStats() {
  const { tasks } = useContext(AppContext);
  return <div>{tasks.length === 1 ? `${tasks.length} Pending Task` : `${tasks.length} pending tasks`}</div>;
}

export default TaskStats;
