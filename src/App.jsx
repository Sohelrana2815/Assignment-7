import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import RecipeList from "./Components/RecipeList/RecipeList";
import Recipes from "./Components/Recipes/Recipes";
import SidebarTable from "./Components/SidebarTable/SidebarTable";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const handleAddFoodItems = (food) => {
    const newFoodItems = [...foodItems, food];
    setFoodItems(newFoodItems);
  };

  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className="md:flex space-x-10 mt-14">
          <RecipeList handleAddFoodItems={handleAddFoodItems}></RecipeList>
          {foodItems.length > 0 && (
            <SidebarTable foodItems={foodItems}></SidebarTable>
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
