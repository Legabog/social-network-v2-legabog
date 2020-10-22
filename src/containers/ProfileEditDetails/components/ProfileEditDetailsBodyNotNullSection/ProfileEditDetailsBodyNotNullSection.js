import React from "react";
import "./ProfileEditDetailsBodyNotNullSection.css";

export const ProfileEditDetailsBodyNotNullSection = (props) => {
  return (
    <>
      <div className={"profile-edit-details-body-not-null-section"}>
        <props.Icon />
        <div className={"profile-edit-details-body-not-null-section__description"}>
          <span>{props.mainTitle}</span>
        </div>
      </div>
    </>
  );
};

