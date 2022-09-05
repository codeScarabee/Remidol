import { motion, AnimatePresence } from 'framer-motion';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import IncompletedCard from './IncompletedCard';

function IncompletedList() {
  const { tasks } = useContext(AppContext);
  return (
    <AnimatePresence>
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <IncompletedCard key={task.id} task={task} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default IncompletedList;
