import React from "react";
import "./ProfileHeaderConfirmRemoveBackgroundBody.css";

export const ProfileHeaderConfirmRemoveBackgroundBody = (props) => {
  return (
    <div className={"profileHeaderConfirmRemoveBackground__body"}>
      <div
        className={"profileHeaderConfirmRemoveBackground__body__description"}
      >
        <span>Are you sure you want to remove your cover photo?</span>
      </div>
      <div
        className={"profileHeaderConfirmRemoveBackground__body__controlPanel"}
      >
        <div className={"profileHeaderConfirmRemoveBackground__body__buttons"}>
          <div
            className={
              "profileHeaderConfirmRemoveBackground__body__cancelButton"
            }
            onClick={() => {
              props.toggleConfirmRemove(false);
            }}
          >
            <span>Cancel</span>
          </div>
          <div
            className={"profileHeaderConfirmRemoveBackground__body__saveButton"}
            onClick={() => {
              props.removeAvatarBackgroundHandler(props.activeAccountEmail);
              props.toggleConfirmRemove(false);
            }}
          >
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
