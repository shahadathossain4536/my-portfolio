import React from "react";
import aboutImg from "../../assets/aboutImg.85045063.png";
const About = () => {
  return (
    <div className="my-12 mx-12" id="about">
      <h2 className="text-center text-5xl mb-10">About Me</h2>
      <div className="lg:flex justify-evenly items-center">
        <div className="flex justify-evenly">
          <img className="mb-10 lg:w-1/2" src={aboutImg} alt="" />
        </div>
        <div>
          <p className="text-justify text-xl">
            I am a web developer with proficiency in front-end technologies like
            React, JavaScript, HTML, and CSS and familiarity with back-end
            technologies such as NodeJS and ExpressJS.
          </p>

          <div className="my-5">
            <button className="btn btn-accent mr-3" id="">
              Hire Me
            </button>
            <button className="btn  btn-outline mt-5">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
