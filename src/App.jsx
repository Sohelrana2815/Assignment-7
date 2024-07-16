import "./App.css";
import Banner from "./Components/Banner/Banner";
import Layout from "./Components/Layout/Layout";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
        <MainSection></MainSection>
      </Layout>
    </>
  );
}

export default App;
