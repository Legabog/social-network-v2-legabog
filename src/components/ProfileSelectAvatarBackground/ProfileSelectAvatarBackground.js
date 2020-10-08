import React, { useState } from "react";
import BackDrop from "../common/BackDrop/BackDrop";
import "./ProfileSelectAvatarBackground.css";
import ProfileSelectAvatarBackgroundBody from "./ProfileSelectAvatarBackgroundBody/ProfileSelectAvatarBackgroundBody";
import ProfileSelectAvatarBackgroundBodyActive from "./ProfileSelectAvatarBackgroundBodyActive/ProfileSelectAvatarBackgroundBodyActive";
import ProfileSelectAvatarBackgroundHeader from "./ProfileSelectAvatarBackgroundHeader/ProfileSelectAvatarBackgroundHeader";

const ProfileSelectAvatarBackground = (props) => {
  const [selectComponentState, setSelectComponentState] = useState(0);
  const [selectComponentHeaderTitle, setSelectComponentHeaderTitle] = useState(
    "Select Photo"
  );
  const [selectComponentContent, setSelectComponentContent] = useState(0);

  const toggleSelectComponent = (state, title, content) => {
    setSelectComponentState(state);
    setSelectComponentHeaderTitle(title);
    setSelectComponentContent(content);
  };

  return (
    <div
      className={"prifleSelectAvatarBackground__wrapper"}
      style={{
        visibility: props.profileSelectVisibility,
        opacity: props.profileSelectOpacity,
      }}
    >
      <div className={"prifleSelectAvatarBackground"}>
        <ProfileSelectAvatarBackgroundHeader
          selectComponentHeaderTitle={selectComponentHeaderTitle}
          selectComponentState={selectComponentState}
          toggleSelectComponent={toggleSelectComponent}
          {...props}
        />
        {selectComponentState === 0 ? (
          <ProfileSelectAvatarBackgroundBody
            toggleSelectComponent={toggleSelectComponent}
            {...props}
          />
        ) : (
          <ProfileSelectAvatarBackgroundBodyActive
            toggleSelectComponent={toggleSelectComponent}
            selectComponentContent={selectComponentContent}
            {...props}
          />
        )}
      </div>
      <BackDrop
        onClick={() => {
          props.toggleProfileSelectAvatarBackground(
            props.profileSelectVisibility,
            props.profileSelectOpacity
          );
          toggleSelectComponent(0, "Select Photo", 0);
        }}
      />
    </div>
  );
};

export default ProfileSelectAvatarBackground;
