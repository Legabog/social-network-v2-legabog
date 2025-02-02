import React from "react";
import BackDrop from "../../common/BackDrop/BackDrop";
import "./ProfileUpdateDiscardWindow.css";
import ProfileUpdateDiscardWindowBody from "./ProfileUpdateDiscardWindowBody/ProfileUpdateDiscardWindowBody";
import ProfileUpdateDiscardWindowHeader from "./ProfileUpdateDiscardWindowHeader/ProfileUpdateDiscardWindowHeader";

const ProfileUpdateDiscardWindow = (props) => {
  return (
    <div
      className={"profile-update-discard-window-wrapper"}
      style={{
        visibility: `${props.discardVisibility}`,
        opacity: `${props.discardOpacity}`,
      }}
    >
      <div className={"profile-update-discard-window"}>
        <ProfileUpdateDiscardWindowHeader
          toggleDiscardWindow={props.toggleDiscardWindow}
          {...props}
        />
        <ProfileUpdateDiscardWindowBody
          toggleDiscardWindow={props.toggleDiscardWindow}
          {...props}
        />
      </div>
      <BackDrop onClick={() => {
          props.toggleDiscardWindow(false)
      }}/>
    </div>
  );
};

export default ProfileUpdateDiscardWindow;
