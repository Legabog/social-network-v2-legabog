import React from "react";
import "./ProfileHeaderAvatarWindow.css";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

export const ProfileHeaderAvatarWindow = (props) => {
  return (
    <div
      className={"profile__header__avatar__window__wrapper"}
      style={{
        visibility: props.windowAvatarVisibility,
        opacity: props.windowAvatarOpacity,
      }}
    >
      <div className={"profile__header__avatar__window"}>
        <div className={"profile__header__avatar__windowSection"}>
          <AccountBoxIcon />
          <span>View Profile Picture</span>
        </div>

          <div
            className={"profile__header__avatar__windowSection"}
            onClick={() => {
              props.toggleProfileUpdateAvatar(
                props.profileUpdateVisibility,
                props.profileUpdateOpacity
              );
              props.toggleWindowAvatar();
            }}
          >
            <PhotoLibraryIcon />
            <span>Update Profile Picture</span>
          </div>
      </div>
    </div>
  );
};

