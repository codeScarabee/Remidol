import { FaPlusCircle, FaArrowAltCircleDown } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../Context/AppContext';

function TaskForm() {
  const [addTask, setAddTask] = useState({ name: '', amount: '', unit: '' });
  const [isClicked, setIsClicked] = useState(false);
  const { addNewTask } = useContext(AppContext);

  const inputStyle = {
    visibility: isClicked ? 'visible' : 'hidden',
    width: isClicked ? '100%' : '10%',
    opacity: isClicked ? '1' : '0',
  };
  const btnStyle = {
    transform: isClicked ? 'scaleY(1)' : 'scaleY(-1)',
  };
  const selectStyle = {
    visibility: isClicked ? 'visible' : 'hidden',
    transition: isClicked && 'visibility 1s ease 0.7s',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const re = value.replace(/[^0-9]/, '');
    setAddTask((prev) => ({ ...prev, [name]: name === 'amount' ? re : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount } = addTask;
    if (name && amount) {
      addTask.id = uuidv4();
      addNewTask(addTask);
      setAddTask({ name: '', amount: '', unit: '' });
    } else {
      setIsClicked((prev) => !prev);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          style={inputStyle}
          id="taskName"
          name="name"
          value={addTask.name}
          placeholder="What need to be done?"
          onChange={handleChange}
        />

        <input
          type="text"
          style={inputStyle}
          id="amount"
          name="amount"
          value={addTask.amount}
          placeholder="Amount?"
          onChange={handleChange}
        />
        <div className="unit-select" style={selectStyle}>
          <label htmlFor="unit">Enter the unit</label>
          <select id="unit" name="unit" value={addTask.unit} onChange={handleChange}>
            <option value="">--choose--</option>
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
          </select>
        </div>
      </div>
      <button type="submit" style={btnStyle}>
        {isClicked ? <FaArrowAltCircleDown size={48} color="gold" /> : <FaPlusCircle size={48} color="gold" />}
      </button>
    </form>
  );
}

export default TaskForm;
