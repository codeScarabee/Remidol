import { AppProvider } from './Context/AppContext';
import Header from './components/Header';
import TasksList from './components/TasksList';
import TaskStats from './components/TaskStats';
import Card from './components/Card';

function App() {
  return (
    <AppProvider>
      <Header title="To-Do List" />
      <div className="container">
        <Card>
          <h1>Hello World</h1>
        </Card>
        <TaskStats />
        <TasksList />
        <TaskStats />
      </div>
    </AppProvider>
  );
}

export default App;
