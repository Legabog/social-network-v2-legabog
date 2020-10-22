import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import "./ProfileHeaderBioActive.css";
import { useState } from "react";

import { ProfileBioActiveButtonSave } from "../ProfileBioActiveButtonSave";

export const ProfileHeaderBioActive = (props) => {
  const [textAreaSymbols, setTextAreaSymbols] = useState(
    props.user === null ? "" : props.user.Bio
  );
  const [validationForSymbols] = useState(101);

  const textAreaChangeHandler = (e) => {
    setTextAreaSymbols(e.target.value);
  };

  return (
    <div className={"profile__header__bio__active"}>
      <div className={"profile__header__bio__activeTextarea"}>
        <textarea
          value={textAreaSymbols}
          onChange={textAreaChangeHandler}
          placeholder={"Describe who are you"}
        ></textarea>
      </div>
      <div className={"profile__header__bio__activeSpan"}>
        <span>
          {validationForSymbols - textAreaSymbols.length} characters remaining
        </span>
      </div>

      <div className={"profile__header__bio__activePanel"}>
        <PublicIcon />
        <span>Public</span>

        <div className={"profile__header__bio__activeButtons"}>
          <div
            className={"profile__header__bio__activeButtonCancel"}
            onClick={props.toggleClickState}
          >
            <span>Cancel</span>
          </div>

          {textAreaSymbols.trim() === "" || textAreaSymbols.length > 101 ? (
            <div className={"profile__header__bio__activeButtonSave-disabled"}>
              <span>Save</span>
            </div>
          ) : (
            <ProfileBioActiveButtonSave
              {...props}
              textAreaSymbols={textAreaSymbols}
            />
          )}
        </div>
      </div>
    </div>
  );
};

