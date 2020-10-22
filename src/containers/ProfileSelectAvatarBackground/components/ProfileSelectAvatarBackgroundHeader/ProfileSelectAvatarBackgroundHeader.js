import React from "react";
import "./ProfileSelectAvatarBackgroundHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const ProfileSelectAvatarBackgroundHeader = (props) => {
  return (
    <>
      {props.selectComponentState === 0 ? (
        <div className={"profile-select-avatar-background-header"}>
          <div className={"profile-select-avatar-background-header__title"}>
            <span>{props.selectComponentHeaderTitle}</span>
          </div>
          <div className={"profile-select-avatar-background-header__close-icon"}>
            <IconButton
              onClick={() => {
                props.toggleProfileSelectAvatarBackground(
                  props.profileSelectVisibility,
                  props.profileSelectOpacity
                );
                props.toggleSelectComponent(0, "Select Photo", 0);
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className={"profile-select-avatar-background-header"}>
          <div className={"profile-select-avatar-background-header__back-icon"}>
          <IconButton
          onClick={() => {
            props.toggleSelectComponent(0, "Select Photo");
          }}
          >
            <ArrowBackIcon />
          </IconButton>
          </div>
          <div className={"profile-select-avatar-background-header__title"}>
            <span>{props.selectComponentHeaderTitle}</span>
          </div>
          <div className={"profile-select-avatar-background-header__close-icon"}>
            <IconButton
              onClick={() => {
                props.toggleProfileSelectAvatarBackground(
                  props.profileSelectVisibility,
                  props.profileSelectOpacity
                );
                props.toggleSelectComponent(0, "Select Photo", 0);
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

