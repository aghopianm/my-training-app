// src/Video.js
import React from 'react';

function Video({ video }) {
  return (
    <div>
      <h3>{video.title}</h3>
      {video.url ? (
        <iframe 
          width="450" 
          height="315" 
          src={video.url} 
          title={video.title} 
          allowFullScreen
        />
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
}


export default Video;