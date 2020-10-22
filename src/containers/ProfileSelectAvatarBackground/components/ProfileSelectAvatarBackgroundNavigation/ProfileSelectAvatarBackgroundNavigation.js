import React from "react";
import "./ProfileSelectAvatarBackgroundNavigation.css";

export const ProfileSelectAvatarBackgroundNavigation = (props) => {
  return (
    <div className={"profile-select-avatar-background-navigation"}>
      <div
        className={
          props.navigationState === 0
            ? "profile-select-avatar-background-navigation__selector_active"
            : "profile-select-avatar-background-navigation__selector"
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
            ? "profile-select-avatar-background-navigation__selector_active"
            : "profile-select-avatar-background-navigation__selector"
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

