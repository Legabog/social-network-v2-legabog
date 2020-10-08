import React from "react";
import BackDrop from "../../common/BackDrop/BackDrop";
import "./WelcomePrivacyGuide.css";
import WelcomePrivacyGuideBody from "./WelcomePrivacyGuideBody/WelcomePrivacyGuideBody";
import WelcomePrivacyGuideHeader from "./WelcomePrivacyGuideHeader/WelcomePrivacyGuideHeader";

const WelcomePrivacyGuide = (props) => {
  return (
    <div
      className={"WelcomePrivacyGuide__wrapper"}
      style={{
        visibility: `${props.privacyGuideVisibility}`,
        opacity: `${props.privacyGuideOpacity}`,
      }}
    >
      <div className={"WelcomePrivacyGuide"}>
        {props.privacyGuideState === 0 ? (
          <WelcomePrivacyGuideHeader {...props} />
        ) : props.privacyGuideState === 1 ? (
          <WelcomePrivacyGuideHeader arrowBack={true} {...props} />
        ) : props.privacyGuideState === 2 ? (
          <WelcomePrivacyGuideHeader arrowBack={true} {...props} />
        ) : null}

        {props.privacyGuideState === 0 ? (
          <WelcomePrivacyGuideBody
            title={"How Tagging Works"}
            description={`Tagging is an easy way to let people know when they're in photos. A
          tag creates a link to the person's timeline and may share your post
          with their friends.`}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_1.jpg?alt=media"
            }
            buttonNext={true}
            {...props}
          />
        ) : props.privacyGuideState === 1 ? (
          <WelcomePrivacyGuideBody
            title={"Your Privacy Shortcuts"}
            description={`You can find the latest privacy updates, important settings and account tools by clicking the dropdown menu at the top of the page.`}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacu-Guide-Slide_2.jpg?alt=media"
            }
            buttonNext={true}
            {...props}
          />
        ) : props.privacyGuideState === 2 ? (
          <WelcomePrivacyGuideBody
            title={"Sharing with Apps, Games and Websites"}
            description={`Control which apps and websites you've connected to Facebook can access your informaiton.`}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_3.jpg?alt=media"
            }
            buttonNext={false}
            {...props}
          />
        ) : null}
      </div>
      <BackDrop
        zIndex={100}
        onClick={() => {
          props.togglePrivacyGuide(false);
          props.togglePrivacyGuideState(0);
        }}
      />
    </div>
  );
};

export default WelcomePrivacyGuide;
