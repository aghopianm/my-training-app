import { Link } from "react-router-dom";

interface WorkoutCardProps {
  title: string;
  description: string;
  link: string;
}

const WorkoutCard = ({ title, description, link }: WorkoutCardProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={link} className="btn btn-primary">Go</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
