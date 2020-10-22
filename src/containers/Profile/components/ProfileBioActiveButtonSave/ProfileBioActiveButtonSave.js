import React from "react";
import "./ProfileBioActiveButtonSave.css";

export const ProfileBioActiveButtonSave = (props) => {
  return (
    <div
      className={"profile__header__bio__activeButtonSave"}
      onClick={(e) => {
        e.preventDefault();
        props.changeBioHandler(props.textAreaSymbols, props.activeAccountEmail, props.toggleClickState);
      }}
    >
      <span>Save</span>
    </div>
  );
};
