import Video from "./Video";

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Exercises" : "Exercise";
    heading = count + " " + noun;
  }
  return (
    <section>
      <h3>{heading}</h3>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}

export default VideoList;
