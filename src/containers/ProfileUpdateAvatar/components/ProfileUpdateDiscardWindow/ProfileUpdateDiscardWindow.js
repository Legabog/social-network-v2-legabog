import React from "react";
import "./ProfileUpdateDiscardWindow.css";

import { ProfileUpdateDiscardWindowBody } from "../ProfileUpdateDiscardWindowBody";
import { ProfileUpdateDiscardWindowHeader } from "../ProfileUpdateDiscardWindowHeader";
import { BackDrop } from "pres-components/BackDrop/BackDrop";

export const ProfileUpdateDiscardWindow = (props) => {
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

