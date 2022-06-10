import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const url = `http://localhost:5000/projects/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div>
      <div className="flex justify-evenly">
        <h2>{project.name}</h2>
        <a href={project.liveLink} target="_blank">
          <button className="btn ">Live Site</button>
        </a>
        <a href={project.serverLink} target="_blank">
          <button className="btn ">Server GitHub</button>
        </a>
        <a href={project.clientLink} target="_blank">
          <button className="btn">Client GitHub</button>
        </a>
      </div>

      {/* home */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* home */}
    </div>
  );
};

export default Project;
