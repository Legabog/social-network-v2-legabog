import React from "react";
import "./ProfileUpdateConfirmUpload.css";

import PublicIcon from "@material-ui/icons/Public";

import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";

export const ProfileUpdateConfirmUpload = (props) => {
  return (
    <div className={"profile-update-confirm-upload"}>
      <div className={"profile-update-confirm-upload__temp-avatar-wrapper"}>
        <div className={"profile-update-confirm-upload__temp-avatar"}>
          <img src={props.profileUpdateTempAvatar} alt="description" />
        </div>
      </div>

      <div className={"profile-update-confirm-upload__description"}>
        <PublicIcon />
        <span>Your profile picture is public</span>
      </div>
      <div className={"profile-update-confirm-upload__buttons-wrapper"}>
        <div className={"profile-update-confirm-upload__buttons"}>
          {props.fetchAvatar ? (
            <ChangeAvatarSimplePreloader width={"75px"} height={"36px"} />
          ) : (
            <div
              className={"profile-update-confirm-upload__cancel-button"}
              onClick={() => {
                props.toggleDiscardWindow(true);
              }}
            >
              <span>Cancel</span>
            </div>
          )}
          {props.fetchAvatar ? (
            <div className={"profile-update-confirm-upload__save-button_disabled"}>
              <span>Save</span>
            </div>
          ) : (
            <div
              className={"profile-update-confirm-upload__save-button"}
              onClick={() => {
                props.profileUpdateConditionForAvatar === 0
                  ? props.sendAvatar(
                      props.profileUpdateTempAvatar,
                      props.profileUpdateTempAvatarName,
                      props.activeAccountEmail
                    )
                  : props.changeAvatarHandler(
                      props.profileUpdateTempAvatar,
                      props.activeAccountEmail
                    );
              }}
            >
              <span>Save</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

