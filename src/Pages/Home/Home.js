import React from "react";
import image from "../../assets/my-bg2.png";
import resume from "../../assets/shahadat-hossain-resume-fornt-end-web-developer.pdf";

const Home = () => {
  return (
    <div className="lg:flex justify-around items-center ">
      <div>
        <h2 className="text-xl my-3">Hi, I am</h2>
        <h1 className="uppercase text-5xl my-4 ">Shahadat Hossain</h1>
        <div>
          <button className="btn btn-accent mr-3 text-white">Hire Me</button>
          <a href={resume} download>
            <button className="btn  btn-outline">Download Resume</button>
          </a>
        </div>
      </div>
      <div>
        <img className="" src={image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Home;
