import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import "./ProfileEditDetailsHeader.css";

const ProfileEditDetailsHeader = (props) => {
  return (
    <>
      <div className={"profile-edit-details__wrapper-header"}>
        <div className={"profile-edit-details__wrapper-header__title"}>
          <span>Edit Details</span>
        </div>
        <div className={"profile-edit-details__wrapper-header__close-icon"}>
          <IconButton
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ProfileEditDetailsHeader;
