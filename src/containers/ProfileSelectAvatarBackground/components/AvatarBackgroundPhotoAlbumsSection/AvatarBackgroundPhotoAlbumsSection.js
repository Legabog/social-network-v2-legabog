import React from "react";
import "./AvatarBackgroundPhotoAlbumsSection.css";

export const AvatarBackgroundPhotoAlbumsSection = (props) => {
  return (
    <div className={"profile-select-avatar-background-photo-albums__section"}>
      <img
        src={props.img}
        alt="description"
        onClick={() => {
          props.toggleSelectComponent(1, props.title, props.content);
        }}
      />
      <div
        className={"profile-select-avatar-background-photo-albums__title"}
      >
        <span>{props.title}</span>
      </div>
      <div
        className={
          "profile-select-avatar-background-photo-albums__uploads"
        }
      >
        <span>{props.uploads} Uploads</span>
      </div>
    </div>
  );
};
