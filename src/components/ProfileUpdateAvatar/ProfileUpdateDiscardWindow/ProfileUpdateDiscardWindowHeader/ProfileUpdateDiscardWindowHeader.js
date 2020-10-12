import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import "./ProfileUpdateDiscardWindowHeader.css";

const ProfileUpdateDiscardWindowHeader = (props) => {
  return (
    <div className={"profile-update-discard-window-header"}>
      <div className={"profile-update-discard-window-header__title"}>
        <span>Discard Changes</span>
      </div>
      <div className={"profile-update-discard-window-header__close-icon"}>
        <IconButton
          onClick={() => {
            props.toggleDiscardWindow(false);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProfileUpdateDiscardWindowHeader;
