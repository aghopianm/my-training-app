import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { WorkoutsList, ChestBackWorkouts, LegWorkouts, ArmsShouldersWorkouts } from "./components/workouts";
import { RecipesList, HighProteinRecipes, HealthySnacks, Smoothies } from "./components/recipes";


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
