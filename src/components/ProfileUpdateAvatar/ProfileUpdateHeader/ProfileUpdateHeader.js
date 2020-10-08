import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./ProfileUpdateHeader.css";

const ProfileUpdateHeader = (props) => {
  return (
    <>
      <div className={"prifleUpdateAvatar__header"}>
        <div className={"prifleUpdateAvatar__header__title"}>
          <span>Update Profile Avatar</span>
        </div>
        <div className={"prifleUpdateAvatar__header__closeIcon"}>
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
        <div className={"prifleUpdateAvatar__header__controllPanel"}>
          <label htmlFor="avatar-uploader">
            <div className={"prifleUpdateAvatar__header__uploadPhoto"}>
              <AddIcon />
              <span>Upload Photo</span>
            </div>
          </label>

          {/* <div className={"prifleUpdateAvatar__header__addFrame"}>
          <VignetteIcon />
          <span>Add Frame</span>
        </div>
        <div className={"prifleUpdateAvatar__header__editButton"}>
          <EditIcon />
        </div> */}
        </div>
      ) : null}
    </>
  );
};

export default ProfileUpdateHeader;
