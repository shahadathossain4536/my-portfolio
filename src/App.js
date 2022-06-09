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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-5">
      <Navbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <ContactFrom></ContactFrom>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
