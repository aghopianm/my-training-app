import { Link } from "react-router-dom";

const WorkoutsList = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose a Workout</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Chest & Back</h5>
              <p className="card-text">Build your Chest & Back just like Arnold</p>
              <Link to="/workouts/chest-back" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Leg Workouts</h5>
              <p className="card-text">Squat like Ronnie Coleman</p>
              <Link to="/workouts/leg" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Arms & Shoulders</h5>
              <p className="card-text">Get as big as Kevin Levrone</p>
              <Link to="/workouts/arms-shoulders" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsList;
