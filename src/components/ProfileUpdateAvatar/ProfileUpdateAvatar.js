import React, { useState } from "react";
import "./ProfileUpdateAvatar.css";
import BackDrop from "../common/BackDrop/BackDrop";
import ProfileUpdateHeader from "./ProfileUpdateHeader/ProfileUpdateHeader";
import ProfileUpdateBody from "./ProfileUpdateBody/ProfileUpdateBody";
import ChangeAvatarSimplePreloader from "../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";
import ProfileUpdateConfirmUpload from "./ProfileUpdateConfirmUpload/ProfileUpdateConfirmUpload";
import ProfileUpdateDiscardWindow from "./ProfileUpdateDiscardWindow/ProfileUpdateDiscardWindow";

const ProfileUpdateAvatar = (props) => {
  const [discardVisibility, setDiscardVisibility] = useState("hidden");
  const [discardOpacity, setDiscardOpacity] = useState(0);

  const toggleDiscardWindow = (boolean) => {
    if (boolean === true) {
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

export default ProfileUpdateAvatar;
