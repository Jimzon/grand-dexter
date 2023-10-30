import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactContent">
        <h2 className="contactTitle">About Me</h2>
        <p className="contactPara">
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
      <div className="aboutImgDiv">
        <img className="aboutImg" src="" alt="" />
      </div>
    </section>
  );
};

export default Contact;
