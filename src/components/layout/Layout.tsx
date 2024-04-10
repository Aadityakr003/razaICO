import {Outlet} from "react-router-dom";
import Footer from "../global/Footer/Footer";
import Navbar from "../global/Navbar/Navbar";
import Topper from "../global/Topper/Topper";

function Layout() {
  return (
    <div>
      <div className="hidden md:block">
        <Topper />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
