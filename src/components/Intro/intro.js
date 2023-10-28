import React from "react";
import "./intro.css";
import "./introBtn.css";
import { Link } from "react-scroll";
import IntroBtn from "./introBtn";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introText">You are now entering in my domain</span>
        <span className="introName">
          I am Grand <span className="dexter">Dexter Echalico...</span>
        </span>
        <h1 className="introMain">Welcome to my World!</h1>
        <IntroBtn />
      </div>
    </section>
  );
};

export default Intro;
