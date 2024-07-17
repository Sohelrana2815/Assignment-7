import PropTypes from "prop-types";
import FoodItems from "../FoodItems/FoodItems";

const SidebarTable = ({ foodItems, handlePreparing }) => {
  return (
    <>
      <div className="overflow-x-auto ml-10">
        <h2 className="text-center text-3xl font-bold">
          Want to cook : {foodItems.length}
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
            {foodItems.map((foodItem, index) => (
              <FoodItems
                key={foodItem.id}
                foodItem={foodItem}
                index={index}
                handlePreparing={handlePreparing}
              ></FoodItems>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

SidebarTable.propTypes = {
  foodItems: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};
export default SidebarTable;
