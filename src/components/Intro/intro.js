import React from "react";
import "./intro.css";
import "./introBtn.css";
import IntroBtn from "./introBtn";
import Navbar from "../NavBar/navbar";

const Intro = () => {
  return (
    <section id="intro">
      <Navbar />
      <div className="introContent">
        <span className="introText">You are now entering in my domain</span>
        <span className="introName">
          I am Grand <span className="granDexter">Dexter Echalico...</span>
        </span>
        <h1 className="introMain">Welcome to my World!</h1>
        <IntroBtn />
      </div>
    </section>
  );
};

export default Intro;
