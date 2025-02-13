import { Link } from "react-router-dom";

interface RecipeCardProps {
  title: string;
  description: string;
  link: string;
}

const RecipeCard = ({ title, description, link }: RecipeCardProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={link} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
