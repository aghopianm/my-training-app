import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ChestBackWorkouts from './components/ChestBackWorkouts';
import LegWorkouts from './components/LegWorkouts';

function App() {
  return (
    <Router>
      <div>
        <h1>My Fitness App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to My Fitness App</h2>} />
          <Route
            path="/workouts"
            element={
              <>
                <h2>Workouts</h2>
                <Link to="/workouts/chest-back">Chest & Back Workouts</Link>
                <br />
                <Link to="/workouts/leg">Leg Workouts</Link>
              </>
            }
          />
          <Route path="/workouts/chest-back" element={<ChestBackWorkouts />} />
          <Route path="/workouts/leg" element={<LegWorkouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
