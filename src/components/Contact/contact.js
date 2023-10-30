import React from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDec">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            className="email"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img className="link" src={FacebookIcon} alt="Facebook" />
            <img className="link" src={TwitterIcon} alt="Twitter" />
            <img className="link" src={YouTubeIcon} alt="YouTube" />
            <img className="link" src={InstagramIcon} alt="Instagram" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
