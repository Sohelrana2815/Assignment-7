import PropTypes from "prop-types";

import CookingTableRow from "../CookingTableRow/CookingTableRow";

const CurrentlyCookingTable = ({ cookingItems, totalCalories, totalTime }) => {
  return (
    <div className="overflow-x-auto ml-10">
      <h2 className="text-center text-3xl font-bold">
        Currently cooking : {cookingItems.length}{" "}
      </h2>
      <div className="divider w-3/4 mx-auto"></div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg">#</th>
            <th className="text-lg">Name</th>
            <th className="text-lg">Time</th>
            <th className="text-lg">Calories</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cookingItems.map((cookingItem, index) => (
            <CookingTableRow
              key={cookingItem.id}
              cookingItem={cookingItem}
              index={index}
            ></CookingTableRow>
          ))}
        </tbody>
      </table>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="mt-4 ml-10">
        <table className="w-full">
          <tbody>
            <tr>
              <td>Total Time:</td>
              <td>{totalTime} minutes</td>
            </tr>
            <tr>
              <td>Total Calories:</td>
              <td>{totalCalories} kcal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyCookingTable.propTypes = {
  cookingItems: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};
export default CurrentlyCookingTable;
