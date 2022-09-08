import { useState, useContext } from 'react';
import AppContext from '../Context/AppContext';
import { FaTimes } from 'react-icons/fa';

function CompletedCard({ task }) {
  const [isCompleted, setIsCompleted] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const { undoCompleted, deleteTask } = useContext(AppContext);

  const taskCardStyle = {
    color: isHover ? 'transparent' : '',
    textShadow: isHover ? '0 0 gold' : '',
    border: isHover && '2px solid gold',
  };

  const taskCompleted = () => {
    setIsCompleted((prev) => !prev);
    if (isCompleted) {
      undoCompleted(task);
    }
  };

  return (
    <div
      className={`card ${isCompleted && 'task-completed'}`}
      style={taskCardStyle}
      onClick={taskCompleted}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="num-display">{`${task.amount} ${task.unit}`}</div>
      <div className="text-display">{task.name}</div>
      <button className="close" onClick={(event) => deleteTask(event, task)}>
        <FaTimes size="1rem" color="red" />
      </button>
    </div>
  );
}

export default CompletedCard;
