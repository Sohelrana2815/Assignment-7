import PropTypes from "prop-types";

const SidebarTable = ({ foodItems }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          
          </tbody>
        </table>
      </div>
    </>
  );
};

// {foodItems.map((foodItem, index) => (
//   <FoodItems
//     key={foodItem.id}
//     foodItem={foodItem}
//     index={index}
//   ></FoodItems>
// ))}
SidebarTable.propTypes = {
  foodItems: PropTypes.array.isRequired,
};
export default SidebarTable;
