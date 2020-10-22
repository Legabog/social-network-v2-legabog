import React from "react";
import "./ProfileUpdateHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export const ProfileUpdateHeader = (props) => {
  return (
    <>
      <div className={"profile-update-avatar-header"}>
        <div className={"profile-update-avatar-header__title"}>
          <span>Update Profile Avatar</span>
        </div>
        <div className={"profile-update-avatar-header__close-icon"}>
          <IconButton
            onClick={() => {
              props.profileUpdateStateComponent === 0
                ? props.closeHandlerProfileUpdate()
                : props.toggleDiscardWindow(true);
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>

      {props.profileUpdateStateComponent === 0 ? (
        <div className={"profile-update-avatar-header__controll-panel"}>
          <label htmlFor="avatar-uploader">
            <div className={"profile-update-avatar-header__upload-photo"}>
              <AddIcon />
              <span>Upload Photo</span>
            </div>
          </label>
        </div>
      ) : null}
    </>
  );
};

