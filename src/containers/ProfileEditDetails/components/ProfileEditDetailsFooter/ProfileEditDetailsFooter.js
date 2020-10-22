import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileEditDetailsFooter.css";

export const ProfileEditDetailsFooter = (props) => {
  return (
    <div className={"profile-edit-details-footer"}>
      <div className={"profile-edit-details-footer__controll-panel"}>
        <div className={"profile-edit-details-footer__buttons"}>
          <div
            className={"profile-edit-details-footer__cancel-button"}
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <span>Cancel</span>
          </div>

          <NavLink
            to="/profile/about"
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <div className={"profile-edit-details-footer__update-button"}>
              <span>Update Your Information</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

