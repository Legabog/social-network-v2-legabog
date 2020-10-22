import React from "react";
import "./ProfileEditDetails.css";

import { BackDrop } from "pres-components/BackDrop/BackDrop";
import { ProfileEditDetailsHeader } from "./components/ProfileEditDetailsHeader";
import { ProfileEditDetailsBody } from "./components/ProfileEditDetailsBody";
import { ProfileEditDetailsFooter } from "./components/ProfileEditDetailsFooter";

export const ProfileEditDetails = (props) => {
  return (
    <div
      className={"profile-edit-details__wrapper"}
      style={{
        visibility: props.profileEditDetailsVisibility,
        opacity: props.profileEditDetailsOpacity,
      }}
    >
      <div className={"profile-edit-details"}>
        <ProfileEditDetailsHeader {...props} />
        <ProfileEditDetailsBody {...props} />
        <ProfileEditDetailsFooter {...props} />
      </div>
      <BackDrop
        onClick={() => {
          props.toggleProfileEditDetails(
            props.profileEditDetailsVisibility,
            props.profileEditDetailsOpacity
          );
        }}
      />
    </div>
  );
};

