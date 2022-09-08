import { AppProvider } from './Context/AppContext';
import Header from './components/Header';
import IncompletedList from './components/IncompletedList';
import IncompletedStats from './components/IncompletedStats';
import CompletedStats from './components/CompletedStats';
import CompletedList from './components/CompletedList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <AppProvider>
      <Header title="Grocery List" />
      <div className="container">
        <TaskForm />
        <IncompletedStats />
        <IncompletedList />
        <CompletedStats />
        <CompletedList />
      </div>
    </AppProvider>
  );
}

export default App;
