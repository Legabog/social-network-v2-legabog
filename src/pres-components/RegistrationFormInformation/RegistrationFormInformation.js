import React from "react";
import { NavLink } from "react-router-dom";
import "./RegistrationFormInformation.css";

export const RegistrationFormInformation = (props) => {
  const NavLinkClickHandler = (e) => {
    e.preventDefault();
    props.toggleDisplayBirthdayInfo();
  };

  return (
    <div
      className="registration-form-inforamtion"
      style={{ display: props.display }}
    >
      <div
        className="registration-form-inforamtion__body"
        style={{
          marginTop: `${props.info_marginTop}`,
          marginLeft: `${props.info_marginLeft}`,
        }}
      >
        <div className="registration-form-inforamtion__block">
          <div className="registration-form-inforamtion__block__content">
            {props.info_text}
          </div>
          <div className="registration-form-inforamtion__block__footer">
            <NavLink
              to="/"
              className="registration-form-inforamtion__button"
              onClick={NavLinkClickHandler}
            >
              Close
            </NavLink>
          </div>
        </div>
        <i
          className="registration-form-inforamtion__icon"
          style={{ marginTop: `${props.info_e_marginTop}` }}
        ></i>
      </div>
    </div>
  );
};

