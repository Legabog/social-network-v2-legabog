import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./ProfileSelectAvatarBackgroundHeader.css";

const ProfileSelectAvatarBackgroundHeader = (props) => {
  return (
    <>
      {props.selectComponentState === 0 ? (
        <div className={"prifleSelectAvatarBackground__header"}>
          <div className={"prifleSelectAvatarBackground__header__title"}>
            <span>{props.selectComponentHeaderTitle}</span>
          </div>
          <div className={"prifleSelectAvatarBackground__header__closeIcon"}>
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
        <div className={"prifleSelectAvatarBackground__header"}>
          <div className={"prifleSelectAvatarBackground__header__backIcon"}>
          <IconButton
          onClick={() => {
            props.toggleSelectComponent(0, "Select Photo");
          }}
          >
            <ArrowBackIcon />
          </IconButton>
          </div>
          <div className={"prifleSelectAvatarBackground__header__title"}>
            <span>{props.selectComponentHeaderTitle}</span>
          </div>
          <div className={"prifleSelectAvatarBackground__header__closeIcon"}>
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

export default ProfileSelectAvatarBackgroundHeader;
