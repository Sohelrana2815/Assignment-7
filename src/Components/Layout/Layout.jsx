import PropTypes from "prop-types";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="w-full lg:max-w-[1600px] mx-auto mt-10">{children}</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
