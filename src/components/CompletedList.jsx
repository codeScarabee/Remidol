import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import CompletedCard from './CompletedCard';

function CompletedList() {
  const { completedTasks } = useContext(AppContext);
  return (
    <AnimatePresence>
      {completedTasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CompletedCard key={task.id} task={task} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default CompletedList;
