import React from "react";
import "./ProfileUpdateDiscardWindowBody.css";

const ProfileUpdateDiscardWindowBody = (props) => {
  return (
    <div className={"profileUpdateDiscardWindow__body"}>
      <div className={"profileUpdateDiscardWindow__body__description"}>
        <span>Are you sure want to discard your changes?</span>
      </div>
      <div className={"profileUpdateDiscardWindow__body__controlPanel"}>
        <div className={"profileUpdateDiscardWindow__body__buttons"}>
          <div
            className={"profileUpdateDiscardWindow__body__cancelButton"}
            onClick={() => {
              props.toggleDiscardWindow(false)
          }}
          >
            <span>Cancel</span>
          </div>
          <div className={"profileUpdateDiscardWindow__body__saveButton"}
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

export default ProfileUpdateDiscardWindowBody;
