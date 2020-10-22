import React, { useState } from "react";
import "./ProfileUpdateAvatar.css";


import { ProfileUpdateHeader } from "./components/ProfileUpdateHeader";
import { ProfileUpdateBody } from "./components/ProfileUpdateBody";
import { ProfileUpdateConfirmUpload } from "./components/ProfileUpdateConfirmUpload";
import { ProfileUpdateDiscardWindow } from "./components/ProfileUpdateDiscardWindow";
import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";
import { BackDrop } from "pres-components/BackDrop";

export const ProfileUpdateAvatar = (props) => {
  const [discardVisibility, setDiscardVisibility] = useState("hidden");
  const [discardOpacity, setDiscardOpacity] = useState(0);

  const toggleDiscardWindow = (boolean) => {
    if (boolean) {
      setDiscardVisibility("visible");
      setDiscardOpacity(1);
    } else {
      setDiscardVisibility("hidden");
      setDiscardOpacity(0);
    }
  };

  return (
    <div
      className={"profile-update-avatar-wrapper"}
      style={{
        visibility: props.profileUpdateVisibility,
        opacity: props.profileUpdateOpacity,
      }}
    >
      <div className={"profile-update-avatar"}>
        <ProfileUpdateHeader
          toggleDiscardWindow={toggleDiscardWindow}
          {...props}
        />

        {props.profileUpdateStateComponent === 0 ? (
          props.fetchProfileAvatars ? (
            <ChangeAvatarSimplePreloader height={"100px"} />
          ) : (
            <ProfileUpdateBody {...props} />
          )
        ) : props.profileUpdateStateComponent === 1 ? (
          <ProfileUpdateConfirmUpload
            toggleDiscardWindow={toggleDiscardWindow}
            {...props}
          />
        ) : null}
      </div>

      <ProfileUpdateDiscardWindow
        toggleDiscardWindow={toggleDiscardWindow}
        discardVisibility={discardVisibility}
        discardOpacity={discardOpacity}
        {...props}
      />

      <BackDrop
        onClick={(e) => {
          e.preventDefault();
          props.profileUpdateStateComponent === 1
            ? toggleDiscardWindow(true)
            : props.closeHandlerProfileUpdate();
        }}
      />
    </div>
  );
};

