import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Pages/Home/About";
import Projects from "./Pages/Home/Projects";
import ContactFrom from "./Pages/Home/ContactFrom";
import Footer from "./Pages/Home/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";

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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
