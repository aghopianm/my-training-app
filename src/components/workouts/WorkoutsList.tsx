import WorkoutCard from "./WorkoutCard";

const WorkoutsList = () => {
  const workouts = [
    { title: "Chest & Back", description: "Build your Chest & Back just like Arnold", link: "/workouts/chest-back" },
    { title: "Leg Workouts", description: "Squat like Ronnie Coleman", link: "/workouts/leg" },
    { title: "Arms & Shoulders", description: "Get as big as Kevin Levrone", link: "/workouts/arms-shoulders" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose a Workout</h2>
      <div className="row">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsList;
