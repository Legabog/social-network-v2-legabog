import React, { useState } from "react";
import "./ProfileSelectAvatarBackground.css";

import { ProfileSelectAvatarBackgroundBody } from "./components/ProfileSelectAvatarBackgroundBody";
import { ProfileSelectAvatarBackgroundBodyActive } from "./components/ProfileSelectAvatarBackgroundBodyActive";
import { ProfileSelectAvatarBackgroundHeader } from "./components/ProfileSelectAvatarBackgroundHeader";
import { BackDrop } from "pres-components/BackDrop";

export const ProfileSelectAvatarBackground = (props) => {
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
      className={"profile-select-avatar-background-wrapper"}
      style={{
        visibility: props.profileSelectVisibility,
        opacity: props.profileSelectOpacity,
      }}
    >
      <div className={"profile-select-avatar-background"}>
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
