import { Link } from "react-router-dom";

const RecipesList = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose a Recipe</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">High-Protein Meals</h5>
              <p className="card-text">Fuel your gains with protein-packed meals</p>
              <Link to="/recipes/high-protein" className="btn btn-primary">View</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Healthy Snacks</h5>
              <p className="card-text">Stay on track with nutritious snacks</p>
              <Link to="/recipes/healthy-snacks" className="btn btn-primary">View</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Smoothies & Shakes</h5>
              <p className="card-text">Blend up delicious & healthy drinks</p>
              <Link to="/recipes/smoothies" className="btn btn-primary">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
