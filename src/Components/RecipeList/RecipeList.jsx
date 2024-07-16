import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data :", error));
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-3/5 gap-6 space-y-6 p-4 border-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
