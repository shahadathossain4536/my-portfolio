import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Pages/Home/About";

import ContactFrom from "./Pages/Home/ContactFrom";
import Footer from "./Pages/Home/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Project from "./Pages/Project/Project";
import CryptoComputer from "./Pages/Project/CryptoComputer";
import BuraqBikeWarehouse from "./Pages/Project/BuraqBikeWarehouse";
import TheFinancial360 from "./Pages/Project/TheFinancial360";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-5">
      <Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/project/:id" element={<Project></Project>}></Route>
          <Route
            path="/cryptoComputer"
            element={<CryptoComputer></CryptoComputer>}
          ></Route>
          <Route
            path="/buraqBikeWarehouse"
            element={<BuraqBikeWarehouse></BuraqBikeWarehouse>}
          ></Route>
          <Route
            path="/theFinancial360"
            element={<TheFinancial360></TheFinancial360>}
          ></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
