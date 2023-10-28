import React from "react";
import "./projects.css";
import Portfolio1 from "../../assets/project1.png";
import Portfolio2 from "../../assets/project2.webp";
import Portfolio3 from "../../assets/project3.jpg";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat
        rhoncus diam et eleifend. Maecenas mattis.
      </span>
      <div className="projectsImgs">
        <img className="projectsImg" src={Portfolio1} alt="" />
        <img className="projectsImg" src={Portfolio2} alt="" />
        <img className="projectsImg" src={Portfolio3} alt="" />
        {/* <img className="projectsImg" src={Portfolio4} alt="" />
        <img className="projectsImg" src={Portfolio5} alt="" />
        <img className="projectsImg" src={Portfolio6} alt="" /> */}
      </div>
      <button className="projectBtn">See More</button>
    </section>
  );
};

export default Projects;
