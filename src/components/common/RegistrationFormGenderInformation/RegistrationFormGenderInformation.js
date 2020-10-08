import React from "react";
import { NavLink } from "react-router-dom";
import "./RegistrationFormGenderInformation.css";

const RegistrationFormGenderInformation = (props) => {
  const NavLinkClickHandler = (e) => {
    e.preventDefault();
    props.toggleDisplayGenderInfo();
  };

  return (
    <div className="information__gwrapper" style={{ display: props.display }}>
      <div className="information__gbody">
        <div className="information__gform">
          <div className="information__gform__content">
            You can change who sees your gender on your profile later. Select
            Other to choose another gender, or if you'd rather not say.
          </div>
          <div className="information__gform__footer">
            <NavLink
              to="/"
              className="information__gbutton"
              onClick={NavLinkClickHandler}
            >
              Close
            </NavLink>
          </div>
        </div>
        <i className="information__gicon"></i>
      </div>
    </div>
  );
};

export default RegistrationFormGenderInformation;
