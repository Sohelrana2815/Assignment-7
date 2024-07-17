import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import RecipeList from "./Components/RecipeList/RecipeList";
import Recipes from "./Components/Recipes/Recipes";
import SidebarTable from "./Components/SidebarTable/SidebarTable";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentlyCookingTable from "./Components/CurrentlyCookingTable/CurrentlyCookingTable";
function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  // For add a new food item on the table
  const handleAddFoodItems = (foods) => {
    const isExist = foodItems.find((foodItem) => foodItem.id === foods.id);
    if (!isExist) {
      const newFoodItems = [...foodItems, foods];
      setFoodItems(newFoodItems); // Add new food item on the list
    } else {
      toast.warning(`${foods.recipeName} is already in cart!`);
    }
  };

  //  Remove food item from the want to cook table and added in the currently cooking table

  const handlePreparing = (cook) => {
    // console.log("Start cooking", cook);
    const updatedFoodItems = foodItems.filter(
      (cookingItem) => cookingItem.id !== cook.id
    );
    const updatedCookingItems = [...cookingItems, cook];

    // update the total time and calories

    const time = parseInt(cook.preparingTime) || 0;
    const calories = parseInt(cook.calories) || 0;
    // update totals
    setTotalTime((prevTim) => prevTim + time);
    setTotalCalories((prevCalories) => prevCalories + calories);

    setFoodItems(updatedFoodItems);
    setCookingItems(updatedCookingItems);
  };
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className="md:flex space-x-10 mt-14">
          <RecipeList handleAddFoodItems={handleAddFoodItems}></RecipeList>

          <div className="flex flex-col space-y-10">
            <SidebarTable
              foodItems={foodItems}
              handlePreparing={handlePreparing}
            ></SidebarTable>
            <CurrentlyCookingTable
              cookingItems={cookingItems}
              totalTime={totalTime}
              totalCalories={totalCalories}
            ></CurrentlyCookingTable>
          </div>
        </div>
      </Layout>
      <ToastContainer transition={Bounce} theme="dark" autoClose="4000" />
    </>
  );
}

export default App;
