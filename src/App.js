import { AppProvider } from './Context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './grocery/components/Header';
import IncompletedList from './grocery/components/IncompletedList';
import IncompletedStats from './grocery/components/IncompletedStats';
import CompletedStats from './grocery/components/CompletedStats';
import CompletedList from './grocery/components/CompletedList';
import TaskForm from './grocery/components/TaskForm';
import Footer from './grocery/components/Footer';

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
