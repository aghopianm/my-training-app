import {RecipeCard} from ".";

const RecipesList = () => {
  const recipes = [
    { title: "High-Protein Meals", description: "Fuel your gains with protein-packed meals", link: "/recipes/high-protein" },
    { title: "Healthy Snacks", description: "Stay on track with nutritious snacks", link: "/recipes/healthy-snacks" },
    { title: "Smoothies & Shakes", description: "Blend up delicious & healthy drinks", link: "/recipes/smoothies" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose a Recipe</h2>
      <div className="row">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesList;

