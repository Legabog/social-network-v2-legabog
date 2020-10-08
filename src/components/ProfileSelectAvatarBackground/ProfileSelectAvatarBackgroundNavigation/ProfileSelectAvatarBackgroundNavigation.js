import React from "react";
import "./ProfileSelectAvatarBackgroundNavigation.css";

const ProfileSelectAvatarBackgroundNavigation = (props) => {
  return (
    <div className={"prifleSelectAvatarBackground__navigation"}>
      <div
        className={
          props.navigationState === 0
            ? "prifleSelectAvatarBackground__selector-active"
            : "prifleSelectAvatarBackground__selector"
        }
        onClick={() => {
          props.setNavigationState(0);
        }}
      >
        <span>Recent Photos</span>
      </div>

      <div
        className={
          props.navigationState === 1
            ? "prifleSelectAvatarBackground__selector-active"
            : "prifleSelectAvatarBackground__selector"
        }
        onClick={() => {
          props.setNavigationState(1);
        }}
      >
        <span>Photo Albums</span>
      </div>
    </div>
  );
};

export default ProfileSelectAvatarBackgroundNavigation;
