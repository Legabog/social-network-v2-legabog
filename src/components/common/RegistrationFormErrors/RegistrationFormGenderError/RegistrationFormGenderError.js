import React from "react";
import "./RegistrationFormGenderError.css";

const RegistrationFormGenderError = (props) => {
  return (
    <div className="error__gender__form" style={{ display: props.display }}>
      <div className="error__gender__form__label">
        <div className="error__gender__form__body">
          <div className="error__gender__form__content">
            Please choose a gender. You can change who can see this later.
          </div>
          <i className="error__gender__form__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormGenderError;
