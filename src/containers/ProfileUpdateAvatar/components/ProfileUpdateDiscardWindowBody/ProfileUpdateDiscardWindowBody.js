import React from "react";
import "./ProfileUpdateDiscardWindowBody.css";

export const ProfileUpdateDiscardWindowBody = (props) => {
  return (
    <div className={"profile-update-discard-window-body"}>
      <div className={"profile-update-discard-window-body__description"}>
        <span>Are you sure want to discard your changes?</span>
      </div>
      <div className={"profile-update-discard-window-body__control-panel"}>
        <div className={"profile-update-discard-window-body__buttons"}>
          <div
            className={"profile-update-discard-window-body__cancel-button"}
            onClick={() => {
              props.toggleDiscardWindow(false)
          }}
          >
            <span>Cancel</span>
          </div>
          <div className={"profile-update-discard-window-body__save-button"}
          onClick={() => {
            props.toggleDiscardWindow(false)
            props.closeHandlerProfileUpdate()
        }}
          >
            <span>Discard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

