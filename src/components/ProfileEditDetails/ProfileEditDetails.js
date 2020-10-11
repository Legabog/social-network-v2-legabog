import React from "react";
import "./ProfileEditDetails.css";

import BackDrop from "../common/BackDrop/BackDrop";
import ProfileEditDetailsHeader from "./ProfileEditDetailsHeader/ProfileEditDetailsHeader";
import ProfileEditDetailsBody from "./ProfileEditDetailsBody/ProfileEditDetailsBody";
import ProfileEditDetailsFooter from "./ProfileEditDetailsFooter/ProfileEditDetailsFooter";

const ProfileEditDetails = (props) => {
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

export default ProfileEditDetails;
