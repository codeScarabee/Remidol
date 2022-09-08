import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function IncompletedStats() {
  const { tasks } = useContext(AppContext);

  if (!tasks || tasks.length === 0) {
    return <div className="stats">There Is No Task Available</div>;
  } else if (tasks.length === 1) {
    return <div className="stats">{`${tasks.length} Pending Task`}</div>;
  }
  return <div className="stats">{`${tasks.length} Pending Tasks`}</div>;
}

export default IncompletedStats;
