import { AppProvider } from './Context/AppContext';
import Header from './components/Header';
import IncompletedList from './components/IncompletedList';
import IncompleteStats from './components/IncompleteStats';
import CompletedStats from './components/CompletedStats';
import CompletedList from './components/CompletedList';
import Card from './components/Card';

function App() {
  return (
    <AppProvider>
      <Header title="To-Do List" />
      <div className="container">
        <Card>
          <h1>Hello World</h1>
        </Card>
        <IncompleteStats />
        <IncompletedList />
        <CompletedStats />
        <CompletedList />
      </div>
    </AppProvider>
  );
}

export default App;
