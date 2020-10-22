import React from "react";
import "./ProfileHeaderBio.css";

export const ProfileHeaderBio = (props) => {
  return (
    <div className={"profile__header__bio"}>
      {props.user === null || props.user.Bio === "" ? (
        <div className={"profile__header__bioUnfilledSpan"}>
          <span onClick={props.toggleClickState}>Add Bio</span>
        </div>
      ) : (
        <>
          <div className={"profile__header__bioFilledSpan"}>
            <span>{props.user.Bio}</span>
          </div>
          <div className={"profile__header__bioUnfilledSpan"}>
            <span onClick={props.toggleClickState}>Edit</span>
          </div>
        </>
      )}
    </div>
  );
};

