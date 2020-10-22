import React from "react";
import "./ProfileUpdateDiscardWindowHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const ProfileUpdateDiscardWindowHeader = (props) => {
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

