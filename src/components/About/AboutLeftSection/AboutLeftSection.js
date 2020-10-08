import React from "react";
import "./AboutLeftSection.css";
import AboutLeftSectionNavBar from "./AboutLeftSectionNavBar/AboutLeftSectionNavBar";

const AboutLeftSection = (props) => {

    

  return (
    <div className={"AboutLeftSection"}>
        <div className={"AboutLeftSection__header"}>
        <span>About</span>
        </div>
        <AboutLeftSectionNavBar {...props}/>
    </div>
  );
};

export default AboutLeftSection;
