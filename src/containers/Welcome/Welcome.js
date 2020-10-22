import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Welcome.css";

import {
  togglePrivacyGuide,
  togglePrivacyGuideState,
} from "redux/welcome-component-reducer";

import { WelcomePrivacyGuide } from "./components/WelcomePrivacyGuide";
import { WelcomePrivacySection } from "./components/WelcomePrivacySection";
import { WelcomeSearchSection } from "./components/WelcomeSearchSection";

const Welcome_ = (props) => {
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

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  privacyGuideState: state.welcomeComponentReducer.privacyGuideState,
  privacyGuideVisibility:
    state.welcomeComponentReducer.privacyGuideVisibility,
  privacyGuideOpacity: state.welcomeComponentReducer.privacyGuideOpacity,
});

export const Welcome = compose(
  withRouter,
  connect(mapStateToProps, {
    togglePrivacyGuide,
    togglePrivacyGuideState
  })
)(Welcome_);
