import React from "react";
import "./projects.css";
import Portfolio1 from "../../assets/project1.png";
import Portfolio2 from "../../assets/project2.webp";
import Portfolio3 from "../../assets/project3.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat
        rhoncus diam et eleifend. Maecenas mattis.
      </span>
      <div className="projectsImgs">
        <div className="projectDiv">
          <img className="projectsImg" src={Portfolio1} alt="projects" />
          <span>Ecommerce</span>
        </div>
        <div className="projectDiv">
          <img className="projectsImg" src={Portfolio2} alt="projects" />
          <span>Accounting</span>
        </div>
        <div className="projectDiv">
          <img className="projectsImg" src={Portfolio3} alt="projects" />
          <span>Mobile App</span>
        </div>
      </div>
      <button className="projectBtn">See More</button>
    </section>
  );
};

export default Projects;
