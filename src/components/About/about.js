import React from "react";
import "./about.css";
import AboutPic from "../../assets/dexter.png";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <h2 className="aboutTitle">About Me</h2>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          feugiat rhoncus diam et eleifend. Maecenas mattis.
        </p>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          feugiat rhoncus diam et eleifend. Maecenas mattis.
        </p>
        <div className="resumeDiv">
          <p className="resume">View my</p>
          <a href="" className="dexter">
            <span>Resume</span>
          </a>
        </div>
      </div>
      <img className="aboutImg" src={AboutPic} alt="" />
    </section>
  );
};

export default About;
