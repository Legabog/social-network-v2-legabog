import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import "./ProfileUpdateConfirmUpload.css";
import ChangeAvatarSimplePreloader from "../../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const ProfileUpdateConfirmUpload = (props) => {
  return (
    <div className={"profileUpdateConfirmUpload"}>
      <div className={"profileUpdateConfirmUpload__tempAvatar__wrapper"}>
        <div className={"profileUpdateConfirmUpload__tempAvatar"}>
          <img src={props.profileUpdateTempAvatar} alt="description" />
        </div>
      </div>

      <div className={"profileUpdateConfirmUpload__description"}>
        <PublicIcon />
        <span>Your profile picture is public</span>
      </div>
      <div className={"profileUpdateConfirmUpload__buttons__wrapper"}>
        <div className={"profileUpdateConfirmUpload__buttons"}>
          {props.fetchAvatar ? (
            <ChangeAvatarSimplePreloader width={"75px"} height={"36px"} />
          ) : (
            <div
              className={"profileUpdateConfirmUpload__cancelButton"}
              onClick={() => {
                props.toggleDiscardWindow(true);
              }}
            >
              <span>Cancel</span>
            </div>
          )}
          {props.fetchAvatar ? (
            <div className={"profileUpdateConfirmUpload__saveButton__disabled"}>
              <span>Save</span>
            </div>
          ) : (
            <div
              className={"profileUpdateConfirmUpload__saveButton"}
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

export default ProfileUpdateConfirmUpload;
