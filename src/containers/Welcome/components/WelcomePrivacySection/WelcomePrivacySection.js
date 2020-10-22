import React from "react";
import "./WelcomePrivacySection.css";

export const WelcomePrivacySection = (props) => {
  return (
    <div className={"welcome-privacy-section__wrapper"}>
      <div className={"welcome-privacy-section"}>
        <div className={"welcome-privacy-section__description-main"}>
          <span>Get to know your privacy settings</span>
        </div>
        <div className={"welcome-privacy-section__description-secondary"}>
          <span>
            You control how you share your content with other people on this
            Social Network.
          </span>
        </div>
        <div
          className={"welcome-privacy-section__button"}
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

