import React from "react";
import "./WelcomePrivacySection.css";

const WelcomePrivacySection = (props) => {
  return (
    <div className={"WelcomePrivacySection__wrapper"}>
      <div className={"WelcomePrivacySection"}>
        <div className={"WelcomePrivacySection__descriptionMain"}>
          <span>Get to know your privacy settings</span>
        </div>
        <div className={"WelcomeSearchSection__descriptionSecondary"}>
          <span>
            You control how you share your content with other people on this
            Social Network.
          </span>
        </div>
        <div
          className={"WelcomePrivacySection__button"}
          onClick={() => {
            props.togglePrivacyGuide(true);
          }}
        >
          <span>Take a personal guide</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePrivacySection;
