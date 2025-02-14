
import VideoList from "../VideoList";

const HighProteinRecipes = () => {

  const videos = {
    lemonPastaChicken: [
      {
        id: 1,
        title: "Lemon Pasta & Chicken Recipe",
        url: "https://www.youtube.com/embed/dQS4INgtwnc",
      },
    ],
    anotherRecipe: [
      {
        id: 2,
        title: "Another High Protein Recipe",
        url: "https://www.youtube.com/embed/example2",
      },
    ],
  };

    return (
      <div className="container mt-5">
        <h2>High-Protein Recipes</h2>
        <h3>Here are some high-protein meal ideas to fuel your fitness journey.</h3>
        <ol>
          <li>
            <h4>Lemon Pasta & Chicken</h4>
            <ul>
              <li>Lemon</li>
              <li>Pasta (100 - 120g, weighed dry)</li>
              <li>Chicken Breast or Thigh (200g, raw weight)</li>
              <li>Parmesan</li>
            </ul>
            <br />
            <VideoList videos={videos.lemonPastaChicken} showTitles={false} />
          </li>
        </ol>
      </div>
    );
  };
  
  export default HighProteinRecipes;
  