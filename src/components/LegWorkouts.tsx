import React from 'react';
import VideoList from './VideoList';

function LegWorkouts() {
  const videos = [
    { id: 1, title: 'Squats', url: 'https://www.youtube.com/embed/i7J5h7BJ07g' },
    { id: 2, title: 'Romanian Deadlift', url: 'https://www.youtube.com/embed/xAL7lHwj30E' },
    { id: 3, title: 'Leg Extensions', url: 'https://www.youtube.com/embed/m0FOpMEgero' },
    { id: 4, title: 'Leg Curl', url: 'https://www.youtube.com/embed/Orxowest56U' },
    { id: 5, title: 'Cable Crunches', url: 'https://www.youtube.com/embed/6GMKPQVERzw' },
  ];

  return (
    <div>
      <h2>Leg Workouts</h2>
      <VideoList videos={videos} emptyHeading="No videos available" />
    </div>
  );
}

export default LegWorkouts;