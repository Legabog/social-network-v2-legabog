import React from "react";
import "./Welcome.css";
import WelcomePrivacyGuide from "./WelcomePrivacyGuide/WelcomePrivacyGuide";
import WelcomePrivacySection from "./WelcomePrivacySection/WelcomePrivacySection";
import WelcomeSearchSection from "./WelcomeSearchSection/WelcomeSearchSection";

const Welcome = (props) => {
  return (
    <div className={"welcome__wrapper"}>
      <div className={"welcome"}>
        <span>
          Welcome to Social Network by legabog,{" "}
          {props.user === null || props.user.Name === ""
            ? null
            : props.user.Name}
        </span>
      </div>

      <WelcomeSearchSection />
      <WelcomePrivacySection {...props}/>
      <WelcomePrivacyGuide {...props}/>
    </div>
  );
};

export default Welcome;
