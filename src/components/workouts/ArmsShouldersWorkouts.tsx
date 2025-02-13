import VideoList from "../VideoList";

function ArmsShouldersWorkouts() {
  const videos = [
    {
      id: 1,
      title: "Preacher Curl",
      url: "https://www.youtube.com/embed/sxA__DoLsgo",
    },
    {
      id: 2,
      title: "Overhead Press",
      url: "https://www.youtube.com/embed/G2qpTG1Eh40",
    },
    {
      id: 3,
      title: "Skull Crushers",
      url: "https://www.youtube.com/embed/l3rHYPtMUo8",
    },
    {
      id: 4,
      title: "Hammer Curl",
      url: "https://www.youtube.com/embed/CFBZ4jN1CMI",
    },
    {
      id: 5,
      title: "Lateral Raises",
      url: "https://www.youtube.com/embed/OuG1smZTsQQ",
    },
    {
      id: 6,
      title: "Pushdowns",
      url: "https://www.youtube.com/embed/6Fzep104f0s",
    },
    {
      id: 7,
      title: "Cable Curls",
      url: "https://www.youtube.com/embed/9ZUCFkp-5BI",
    },
    {
      id: 8,
      title: "Face Pulls",
      url: "https://www.youtube.com/embed/-MODnZdnmAQ",
    },
    {
      id: 9,
      title: "Overhead Extensions",
      url: "https://www.youtube.com/embed/1u18yJELsh0",
    },
  ];

  return (
    <div>
      <h2>Arms & Shoulders</h2>
      <VideoList videos={videos} emptyHeading="No videos available" />
    </div>
  );
}

export default ArmsShouldersWorkouts;
