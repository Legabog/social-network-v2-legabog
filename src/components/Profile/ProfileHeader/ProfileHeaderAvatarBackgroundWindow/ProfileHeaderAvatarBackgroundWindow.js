import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ProfileHeaderAvatarBackgroundWindow.css";

const ProfileHeaderAvatarBackgroundWindow = (props) => {
  return (
    <div
      className={"profile__header__avatarBackground__window__wrapper"}
      style={{
        visibility: props.windowAvatarBackgroundVisibility,
        opacity: props.windowAvatarBackgroundOpacity,
      }}
    >
      <div className={"profile__header__avatarBackground__window"}>
        <div
          className={"profile__header__avatarBackground__windowSection"}
          onClick={() => {
            props.toggleProfileSelectAvatarBackground(
              props.profileSelectVisibility,
              props.profileSelectOpacity
            );
            props.toggleWindowAvatarBackground();
            props.toggleSwitcherAvatarBackgroundURLorBase64(1)
          }}
        >
          <PhotoLibraryIcon />
          <span>Select Photo</span>
        </div>

        <label htmlFor="avatarBackground-uploader">
          <div
            className={"profile__header__avatarBackground__windowSection"}
            onClick={props.toggleWindowAvatarBackground}
          >
            <PublishIcon />
            <span>Upload Photo</span>
          </div>
        </label>

        {props.user === null || props.user.AvatarBackground.activeAvatarBackgroundUrl === "" ? null : (
          <div
            className={"profile__header__avatarBackground__windowSection"}
            onClick={() => {
              props.toggleConfirmRemove(true);
              props.toggleWindowAvatarBackground();
            }}
          >
            <DeleteIcon />
            <span>Remove</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeaderAvatarBackgroundWindow;
