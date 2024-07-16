import { FaClock, FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  const {
    recipeName,
    shortDescription,
    recipeImageUrl,
    ingredients,
    preparingTime,
    calories,
  } = recipe;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={recipeImageUrl} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipeName}</h2>
          <p>{shortDescription}</p>
          <div className="divider"></div>
          <h2>Ingredients: {ingredients.length}</h2>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient}</li>
          ))}
          <div className="flex mt-4">
            <p className="flex items-center">
              <FaClock className="mr-3" /> {preparingTime}
            </p>
            <p className="flex items-center">
              <FaFire className="mr-3" />
              {calories}
            </p>
          </div>
          <div className="card-actions mt-6">
            <button className="btn btn-success rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    recipeImageUrl: PropTypes.string.isRequired,
    recipeName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    preparingTime: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default RecipeCard;
