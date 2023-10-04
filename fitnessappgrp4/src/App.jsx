import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import PastWorkouts from './components/pages/pastWorkouts';
import CurrentWorkouts from './components/pages/currentWorkouts';
import FutureWorkouts from './components/pages/futureWorkouts';
import Home from './components/pages/home';

export function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="pastWorkouts" element={<PastWorkouts />} />
            <Route path="currentWorkouts" element={<CurrentWorkouts />} />
            <Route path="futureWorkouts" element={<FutureWorkouts />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
