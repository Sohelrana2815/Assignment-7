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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
