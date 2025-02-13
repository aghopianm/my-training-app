import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ChestBackWorkouts from "./components/ChestBackWorkouts";
import LegWorkouts from "./components/LegWorkouts";
import ArmsShouldersWorkouts from "./components/ArmsShouldersWorkouts";
import WorkoutsList from "./components/WorkoutsList";
import RecipesList from "./components/RecipesList";
import HighProteinRecipes from "./components/HighProteinRecipes";
import HealthySnacks from "./components/HealthySnacks";
import Smoothies from "./components/Smoothies";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<WorkoutsList />} />
        <Route path="/workouts/chest-back" element={<ChestBackWorkouts />} />
        <Route path="/workouts/leg" element={<LegWorkouts />} />
        <Route path="/workouts/arms-shoulders" element={<ArmsShouldersWorkouts />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/recipes/high-protein" element={<HighProteinRecipes />} />
        <Route path="/recipes/healthy-snacks" element={<HealthySnacks />} />
        <Route path="/recipes/smoothies" element={<Smoothies />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
