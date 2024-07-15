import "./App.css";
import Banner from "./Components/Banner/Banner";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Banner></Banner>
      </Layout>
    </>
  );
}

export default App;
