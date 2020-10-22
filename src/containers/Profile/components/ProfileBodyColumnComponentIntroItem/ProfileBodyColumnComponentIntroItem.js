import React from "react";
import "./ProfileBodyColumnComponentIntroItem.css";

export const ProfileBodyColumnComponentIntroItem = (props) => {
  return (
      <div className={"profile-body-column-component-intro-item"}>
        <props.Icon />
        <div className={"profile-body-column-component-intro-item__description"}>
          <span>{props.mainTitle}</span>
        </div>
      </div>
  );
};