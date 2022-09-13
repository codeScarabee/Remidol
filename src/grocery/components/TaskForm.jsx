import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../../Context/AppContext';
import Button from '../../shared/Button';
import { FaArrowAltCircleDown, FaPlusCircle } from 'react-icons/fa';

function TaskForm() {
  const [addTask, setAddTask] = useState({ name: '', amount: '', unit: '', icon: '' });
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');
  const { addNewTask, taskEdit, updateTask } = useContext(AppContext);

  const inputStyle = {
    visibility: isClicked ? 'visible' : 'hidden',
    width: isClicked ? '100%' : '0',
    opacity: isClicked ? '1' : '0',
  };
  const btnStyle = {
    transform: isClicked ? 'scaleY(1)' : 'scaleY(-1)',
  };

  useEffect(() => {
    if (taskEdit.edit === true) {
      setIsClicked(true);
      setAddTask({ ...taskEdit.task });
    }
  }, [taskEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const re = value.replace(/[^0-9]/, '');
    setAddTask((prev) => ({ ...prev, [name]: name === 'amount' ? re : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount } = addTask;
    if (name && amount) {
      if (name.length > 15) {
        setMessage('Name should be 15 characters or less');
      } else if (amount.length > 4) {
        setMessage('Amount should be 9999 or less');
      } else if (taskEdit.edit === true) {
        setAddTask(taskEdit.task);
        updateTask(addTask.id, addTask);
        setAddTask({ name: '', amount: '', unit: '', icon: '' });
      } else {
        addTask.id = uuidv4();
        addNewTask(addTask);
        setAddTask({ name: '', amount: '', unit: '', icon: '' });
        setMessage('');
      }
    } else {
      setIsClicked((prev) => !prev);
      setMessage('');
    }
  };

  const data = ['Bread', 'Butter', 'Milk', 'Potatoes', 'Tomato', 'Oil', 'Eggs', 'Apples', 'Bananas'];
  return (
    <>
      <h1>Grocery</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={inputStyle}>
          <input
            list="data"
            name="name"
            value={addTask.name}
            placeholder="What are you going to buy?"
            onChange={handleChange}
          />
          <datalist id="data">
            {data.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </datalist>
          <input
            type="text"
            id="amount"
            name="amount"
            value={addTask.amount}
            placeholder="Amount"
            onChange={handleChange}
          />
          <select name="unit" value={addTask.unit} onChange={handleChange}>
            <option value="">Unit</option>
            <option value="box">box</option>
            <option value="g">g</option>
            <option value="mg">mg</option>
            <option value="kg">kg</option>
            <option value="lb">lb</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="oz">oz</option>
          </select>
        </div>
        <Button type="submit" isClicked={isClicked} style={btnStyle}>
          {isClicked ? <FaArrowAltCircleDown size={48} color="gold" /> : <FaPlusCircle size={48} color="gold" />}
        </Button>
      </form>
      {message && <div className="message">{message}</div>}
    </>
  );
}

export default TaskForm;
