import PropTypes from "prop-types";

const FoodItems = ({ foodItem, index }) => {
  const { preparingTime, recipeName, calories, recipeImageUrl } = foodItem;
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={recipeImageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {recipeName}
          <br />
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

FoodItems.propTypes = {
  foodItem: PropTypes.array.isRequired,
};

export default FoodItems;
