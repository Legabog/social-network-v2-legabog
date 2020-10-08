import React from "react";
import BackDrop from "../../../../common/BackDrop/BackDrop";
import "./ProfileHeaderConfirmRemoveBackground.css";
import ProfileHeaderConfirmRemoveBackgroundBody from "./ProfileHeaderConfirmRemoveBackgroundBody/ProfileHeaderConfirmRemoveBackgroundBody";
import ProfileHeaderConfirmRemoveBackgroundHeader from "./ProfileHeaderConfirmRemoveBackgroundHeader/ProfileHeaderConfirmRemoveBackgroundHeader";

const ProfileHeaderConfirmRemoveBackground = (props) => {
  return (
    <div
      className={"profileHeaderConfirmRemoveBackground__wrapper"}
      style={{
        visibility: `${props.confirmRemoveVisibility}`,
        opacity: `${props.confirmRemoveOpacity}`,
      }}
    >
      <div className={"profileHeaderConfirmRemoveBackground"}>
        <ProfileHeaderConfirmRemoveBackgroundHeader
          toggleConfirmRemove={props.toggleConfirmRemove}
          {...props}
        />
        <ProfileHeaderConfirmRemoveBackgroundBody
          toggleConfirmRemove={props.toggleConfirmRemove}
          {...props}
        />
      </div>
      <BackDrop
        onClick={() => {
          props.toggleConfirmRemove(false);
        }}
      />
    </div>
  );
};

export default ProfileHeaderConfirmRemoveBackground;
