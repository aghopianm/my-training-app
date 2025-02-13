import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ChestBackWorkouts from "./components/ChestBackWorkouts";
import LegWorkouts from "./components/LegWorkouts";
import ArmsShouldersWorkouts from "./components/ArmsShouldersWorkouts";
import WorkoutsList from "./components/WorkoutsList";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<h2>Welcome to My Fitness App</h2>} />
        <Route path="/workouts" element={<WorkoutsList />} />
        <Route path="/workouts/chest-back" element={<ChestBackWorkouts />} />
        <Route path="/workouts/leg" element={<LegWorkouts />} />
        <Route path="/workouts/arms-shoulders" element={<ArmsShouldersWorkouts />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
