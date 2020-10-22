import React from "react";
import "./ProfileHeaderConfirmRemoveBackgroundHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const ProfileHeaderConfirmRemoveBackgroundHeader = (props) => {
  return (
    <div className={"profileHeaderConfirmRemoveBackground__header"}>
      <div className={"profileHeaderConfirmRemoveBackground__header__title"}>
        <span>Remove Cover Photo</span>
      </div>
      <div
        className={"profileHeaderConfirmRemoveBackground__header__closeIcon"}
      >
        <IconButton
          onClick={() => {
            props.toggleConfirmRemove(false);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

