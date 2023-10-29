import React from "react";
import AboutPic from "../../assets/dexter.png";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          feugiat rhoncus diam et eleifend. Maecenas mattis.
        </span>
        <p className="introPara">
          I'm a skill web developer and UI/UX designer
        </p>
        <a href="" />
      </div>
      <img className="bg" src={AboutPic} alt="" />
      Hire Me
    </section>
  );
};

export default About;
