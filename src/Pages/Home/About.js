import React from "react";
import aboutImg from "../../assets/aboutImg.85045063.png";
const About = () => {
  return (
    <div className="my-12 mx-12">
      <h2 className="text-center text-5xl mb-10">About Me</h2>
      <div className="lg:flex justify-evenly items-center">
        <div>
          <img className="mb-10" src={aboutImg} alt="" />
        </div>
        <div>
          <p className="text-justify">
            Hello! I'm Fahim, a programmer with a good level of expertise in
            Front-End Web Development. I'm currently studying at Imperial
            College of Engineering pursuing a degree BSc Engineering in Computer
            Science & Engineering under Rajshahi University. I'm a tech lover
            and like to write blogs about programming and web development. I'm
            interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web
            development. I am a hardworking, confident, enthusiastic Web
            developer and I want to utilize my knowledge and personal skills in
          </p>
          <p className="pt-6 text-justify">
            Web Development. Also eagerly wants to serve a professional
            organization to the best of my knowledge with true dedication, hard
            work, and commitment. I am down to earth honest, confident, fun
            loving and caring as well.
          </p>
          <div className="my-5">
            <button className="btn btn-accent mr-3">Hire Me</button>
            <button className="btn  btn-outline mt-5">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
