import React from "react";
import "./header.css";
import CV from "../../assests/cv/CV.pdf";
import ME from "../../assests/photos/me-no-background.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Pubudu Premathilaka</h1>
        <h5 className="text-light">Full-Stack Software Engineer</h5>
        <div className="cta">
          <a className="btn" href={CV} download>
            Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Let's Connect
          </a>
        </div>
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
