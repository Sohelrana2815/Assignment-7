import "./App.css";
import Banner from "./Components/Banner/Banner";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import RecipeList from "./Components/RecipeList/RecipeList";
import Recipes from "./Components/Recipes/Recipes";
import SidebarTable from "./Components/SidebarTable/SidebarTable";

function App() {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className="flex space-x-10 mt-14">
          <RecipeList></RecipeList>
          <SidebarTable></SidebarTable>
        </div>
      </Layout>
    </>
  );
}

export default App;
