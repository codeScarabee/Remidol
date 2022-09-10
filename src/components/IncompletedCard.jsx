import { useState, useContext } from 'react';
import AppContext from '../Context/AppContext';
import * as FaIcons from 'react-icons/fa';

function IncompletedCard({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { detachCompleted, deleteTask, editTask } = useContext(AppContext);

  const taskCardStyle = {
    color: isHover ? 'transparent' : '',
    textShadow: isHover ? '0 0 black' : '',
    border: isHover && '2px solid #333',
    opacity: isHover ? '1' : '0.9',
  };

  const taskCompleted = () => {
    setIsCompleted((prev) => !prev);
    if (!isCompleted) {
      detachCompleted(task);
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
        <FaIcons.FaTimes size="1rem" color="red" />
      </button>
      <button className="edit" onClick={(event) => editTask(event, task)}>
        <FaIcons.FaEdit size="1rem" color="#333" />
      </button>
    </div>
  );
}

export default IncompletedCard;
