import { AppProvider } from './Context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import IncompletedList from './components/IncompletedList';
import IncompletedStats from './components/IncompletedStats';
import CompletedStats from './components/CompletedStats';
import CompletedList from './components/CompletedList';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header title="Remidol" />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/grocery"
              element={
                <>
                  <TaskForm />
                  <IncompletedStats />
                  <IncompletedList />
                  <CompletedStats />
                  <CompletedList />
                </>
              }
            />
          </Routes>
        </div>
        <Footer title="Remidol" />
      </Router>
    </AppProvider>
  );
}

export default App;
