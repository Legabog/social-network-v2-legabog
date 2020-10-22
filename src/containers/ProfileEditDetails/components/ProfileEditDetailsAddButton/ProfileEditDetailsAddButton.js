import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileEditDetailsAddButton.css";

export const ProfileEditDetailsAddButton = (props) => {
  return (
    <>
      <NavLink to={props.navLink}>
        <div
          className={"profile-edit-details__add-button"}
          onClick={() => {
            props.toggleProfileEditDetails(
              props.profileEditDetailsVisibility,
              props.profileEditDetailsOpacity
            );
          }}
        >
          <props.addIcon />
          <div className={"profile-edit-details__add-button__description"}>
            <span>{props.title}</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

