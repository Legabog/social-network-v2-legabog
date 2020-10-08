import React from "react";
import "./AvatarBackgroundPhotoAlbumsSection.css";

const AvatarBackgroundPhotoAlbumsSection = (props) => {
  return (
    <div className={"prifleSelectAvatarBackground__photoAlbums__section"}>
      <img
        src={props.img}
        alt="description"
        onClick={() => {
          props.toggleSelectComponent(1, props.title, props.content);
        }}
      />
      <div
        className={"prifleSelectAvatarBackground__photoAlbums__section__title"}
      >
        <span>{props.title}</span>
      </div>
      <div
        className={
          "prifleSelectAvatarBackground__photoAlbums__section__uploads"
        }
      >
        <span>{props.uploads} Uploads</span>
      </div>
    </div>
  );
};

export default AvatarBackgroundPhotoAlbumsSection;
