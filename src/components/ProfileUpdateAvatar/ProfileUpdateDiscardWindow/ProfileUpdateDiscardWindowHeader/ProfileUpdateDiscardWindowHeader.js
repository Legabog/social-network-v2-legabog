import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import "./ProfileUpdateDiscardWindowHeader.css";

const ProfileUpdateDiscardWindowHeader = (props) => {
  return (
    <div className={"profileUpdateDiscardWindow__header"}>
      <div className={"profileUpdateDiscardWindow__header__title"}>
        <span>Discard Changes</span>
      </div>
      <div className={"profileUpdateDiscardWindow__header__closeIcon"}>
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
