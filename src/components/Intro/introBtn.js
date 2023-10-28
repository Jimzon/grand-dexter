import React from "react";
import { Link } from "react-scroll";

const IntroBtn = () => {
  return (
    <div className="introBtnDiv">
      <Link>
        <button className="btnPortfolio">Portfolio</button>
      </Link>
      <Link>
        <button className="btnContact">Contact Me</button>
      </Link>
    </div>
  );
};

export default IntroBtn;
