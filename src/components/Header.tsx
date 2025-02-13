
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <h1 className="display-4 text-center">My Fitness App</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/workouts">Workouts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;
