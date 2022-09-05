import { useState, useContext } from 'react';
import AppContext from '../Context/AppContext';
import { FaTimes, FaEdit } from 'react-icons/fa';

function IncompletedCard({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { detachCompleted } = useContext(AppContext);

  const taskCardStyle = {
    color: isHover ? 'transparent' : '',
    textShadow: isHover ? '0 0 #ff6a95' : '',
    boxShadow: isHover ? '2px 2px 2px black' : '',
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
      <button className="close">
        <FaTimes size="1rem" color="red" />
      </button>
      <button className="edit">
        <FaEdit size="1rem" color="red" />
      </button>
    </div>
  );
}

export default IncompletedCard;
