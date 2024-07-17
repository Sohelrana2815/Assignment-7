import PropTypes from "prop-types";
const CookingTableRow = ({ cookingItem, index }) => {
  const { recipeName, preparingTime, calories } = cookingItem;

  return (
    <>
      <tr>
        <th className="text-base font-semibold">{index + 1}</th>
        <td className="text-base font-semibold">{recipeName}</td>
        <td className="text-base font-semibold">{preparingTime}</td>
        <td className="text-base font-semibold">{calories}</td>
      </tr>
    </>
  );
};
CookingTableRow.propTypes = {
  cookingItem: PropTypes.shape({
    recipeName: PropTypes.string.isRequired,
    preparingTime: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired, // Assuming calories is a string
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CookingTableRow;
