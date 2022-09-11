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
        <div className="container">
          <Header title="Remidol" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/grocery"
              element={
                <div className="inner-container">
                  <TaskForm />
                  <IncompletedStats />
                  <IncompletedList />
                  <CompletedStats />
                  <CompletedList />
                </div>
              }
            />
          </Routes>
          <Footer title="Remidol" />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
