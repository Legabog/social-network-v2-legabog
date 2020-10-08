import React from "react";
import "./WelcomePrivacyGuideBody.css";

const WelcomePrivacyGuideBody = (props) => {
  return (
    <div className={"WelcomePrivacyGuideBody__wrapper"}>
      <div className={"WelcomePrivacyGuideBody"}>
        <div className={"WelcomePrivacyGuideBody__title"}>
          <span>{props.title}</span>
        </div>
        <div className={"WelcomePrivacyGuideBody__description"}>
          <span>{props.description}</span>
        </div>
        <div className={"WelcomePrivacyGuideBody__img"}>
          <img src={props.slideUrl} alt="description" />
        </div>
        <div className={"WelcomePrivacyGuideBody__progressBar"}>
          <div
            className={"WelcomePrivacyGuideBody__progressBar__progressLine"}
            style={{
              width:
                props.privacyGuideState === 0
                  ? "33%"
                  : props.privacyGuideState === 1
                  ? "66%"
                  : props.privacyGuideState === 2
                  ? "100%"
                  : null,
              borderRadius: props.privacyGuideState === 2 ? "500px" : null,
            }}
          ></div>
        </div>
        {props.buttonNext ? (
          <div className={"WelcomePrivacyGuideBody__footer"}>
            <div
              className={"WelcomePrivacyGuideBody__buttonNext"}
              onClick={() => {
                if (props.privacyGuideState === 0) {
                  props.togglePrivacyGuideState(1);
                } else {
                  if (props.privacyGuideState === 1) {
                    props.togglePrivacyGuideState(2);
                  }
                }
              }}
            >
              <span>Next</span>
            </div>
          </div>
        ) : (
          <div className={"WelcomePrivacyGuideBody__footer"}>
            <div
              className={"WelcomePrivacyGuideBody__buttonFinish"}
              onClick={() => {
                props.togglePrivacyGuide(false);
                props.togglePrivacyGuideState(0);
              }}
            >
              <span>Finish</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePrivacyGuideBody;
