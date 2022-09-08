import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function CompletedStats() {
  const { completedTasks } = useContext(AppContext);
  return (
    <div className="stats">
      {completedTasks.length !== 0 &&
        (completedTasks.length === 1
          ? `${completedTasks.length} Finished Task`
          : `${completedTasks.length} Finished tasks`)}
    </div>
  );
}

export default CompletedStats;
