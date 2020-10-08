import React from "react";
import "./About.css";
import AboutLeftSection from "./AboutLeftSection/AboutLeftSection";
import AboutRightSection from "./AboutRightSection/AboutRightSection";

const About = (props) => {
  return (
    <div className={"about__wrapper"}>
      <div className={"about"}>
        <AboutLeftSection {...props} />
        <AboutRightSection {...props} />
      </div>
    </div>
  );
};

export default About;
