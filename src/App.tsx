import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./styles/main.css";
import "./styles/responsive.css";
import Home from "./views/Home/Home";
import MoreInfo from "./views/MoreInfo/MoreInfo";
import PrivateSale from "./views/PrivateSale/PrivateSale";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="presale" element={<PrivateSale />} />
            <Route path="more-info" element={<MoreInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
