import Video from "./Video";

function VideoList({ videos, showTitles = true }) {
  return (
    <section>
      {videos.map((video) => (
        <div key={video.id}>
          {showTitles && <h3>{video.title}</h3>} {/* Only show if showTitles is true */}
          <iframe width="560" height="315" src={video.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </section>
  );
}

export default VideoList;
