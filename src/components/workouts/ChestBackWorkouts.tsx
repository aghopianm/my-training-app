import VideoList from "../VideoList";

function ChestBackWorkouts() {
  const videos = [
    {
      id: 1,
      title: "Incline Dumbell Benchpress",
      url: "https://www.youtube.com/embed/5CECBjd7HLQ",
    },
    {
      id: 2,
      title: "Barbell Row",
      url: "https://www.youtube.com/embed/6FZHJGzMFEc",
    },
    {
      id: 3,
      title: "Cable Chest Fly",
      url: "https://www.youtube.com/embed/4mfLHnFL0Uw",
    },
    {
      id: 4,
      title: "Chest Supported Row",
      url: "https://www.youtube.com/embed/0UBRfiO4zDs",
    },
    {
      id: 5,
      title: "Seated Chest Press",
      url: "https://www.youtube.com/embed/NwzUje3z0qY",
    },
    {
      id: 6,
      title: "Lat Pullover",
      url: "https://www.youtube.com/embed/G9uNaXGTJ4w",
    },
  ];

  return (
    <div>
      <h2>Chest & Back Workouts</h2>
      <VideoList videos={videos} emptyHeading="No videos available" />
    </div>
  );
}

export default ChestBackWorkouts;
