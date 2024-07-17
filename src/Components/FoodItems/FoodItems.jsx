import PropTypes from "prop-types";

const FoodItems = ({ foodItem, index, handlePreparing }) => {
  const { preparingTime, recipeName, calories } = foodItem;
  return (
    <>
      <tr>
        <th className=" font-semibold">{index + 1}</th>
        <td className=" font-semibold">{recipeName}</td>
        <td className=" font-semibold">{preparingTime}</td>
        <td className=" font-semibold">{calories}</td>
        <td
          onClick={() => handlePreparing(foodItem)}
          className="btn btn-success"
        >
          Preparing
        </td>
      </tr>
    </>
  );
};

FoodItems.propTypes = {
  foodItem: PropTypes.shape({
    recipeName: PropTypes.string.isRequired,
    preparingTime: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired, // Assuming calories is a string
  }).isRequired,
  index: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired, // Function prop for handling preparation
};

export default FoodItems;
