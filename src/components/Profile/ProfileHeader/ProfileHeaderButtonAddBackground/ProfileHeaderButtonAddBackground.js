import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeaderButtonAddBackground.css";

const ProfileHeaderButtonAddBackground = (props) => {
  return (
    <div
      className={"profile__header__buttonAddCover"}
      style={{
        display: props.windowConfirmBackgroundOpacity === 1 ? "none" : null,
      }}
      onClick={props.toggleWindowAvatarBackground}
    >
      <PhotoCameraIcon />
      <span>Add Cover Photo</span>
    </div>
  );
};

export default ProfileHeaderButtonAddBackground;
