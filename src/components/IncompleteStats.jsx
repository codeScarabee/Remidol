import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function IncompleteStats() {
  const { tasks } = useContext(AppContext);

  if (!tasks || tasks.length === 0) {
    return <div></div>;
  } else if (tasks.length === 1) {
    return <div>{`${tasks.length} Pending Task`}</div>;
  }
  return <div>{`${tasks.length} Pending Tasks`}</div>;
}

export default IncompleteStats;
