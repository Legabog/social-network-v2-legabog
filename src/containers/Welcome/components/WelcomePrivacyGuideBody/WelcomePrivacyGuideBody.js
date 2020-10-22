import React from "react";
import "./WelcomePrivacyGuideBody.css";

export const WelcomePrivacyGuideBody = (props) => {
  return (
    <div className={"welcome-privacy-guide-body__wrapper"}>
      <div className={"welcome-privacy-guide-body"}>
        <div className={"welcome-privacy-guide-body__title"}>
          <span>{props.title}</span>
        </div>
        <div className={"welcome-privacy-guide-body__description"}>
          <span>{props.description}</span>
        </div>
        <div className={"welcome-privacy-guide-body__img"}>
          <img src={props.slideUrl} alt="description" />
        </div>
        <div className={"welcome-privacy-guide-body__progress-bar"}>
          <div
            className={"welcome-privacy-guide-body__progress-line"}
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
          <div className={"welcome-privacy-guide-body__footer"}>
            <div
              className={"welcome-privacy-guide-body__button-next"}
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
          <div className={"welcome-privacy-guide-body__footer"}>
            <div
              className={"welcome-privacy-guide-body__button-finish"}
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

