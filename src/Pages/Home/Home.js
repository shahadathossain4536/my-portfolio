import React from "react";
import About from "./About";
import ContactFrom from "./ContactFrom";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
};

export default Home;
