import React from "react";
import { NavLink } from "react-router-dom";
import "./RegistrationFormBirthdayInformation.css";

const RegistrationFormBirthdayInformation = (props) => {
  const NavLinkClickHandler = (e) => {
    e.preventDefault();
    props.toggleDisplayBirthdayInfo();
  };

  return (
    <div className="information__wrapper" style={{ display: props.display }}>
      <div className="information__body">
        <div className="information__form">
          <div className="information__form__content">
            Providing your date of birth helps make sure that you get the right
            experience for your age. If you want to change who sees this, go to
            the About section of your Profile. For more details, please visit
            our Data Policy.
          </div>
          <div className="information__form__footer">
            <NavLink
              to="/"
              className="information__button"
              onClick={NavLinkClickHandler}
            >
              Close
            </NavLink>
          </div>
        </div>
        <i className="information__icon"></i>
      </div>
    </div>
  );
};

export default RegistrationFormBirthdayInformation;
