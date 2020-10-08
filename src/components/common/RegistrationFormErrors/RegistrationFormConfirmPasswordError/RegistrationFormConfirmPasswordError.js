import React from "react";
import "./RegistrationFormConfirmPasswordError.css";

const RegistrationFormConfirmPasswordError = (props) => {
  return (
    <div className="error__password" style={{ display: props.display }}>
      <div className="error__password__label">
        <div className="error__password__body">
          <div className="error__password__content">
            The password you typed must be the same.
          </div>
          <i className="error__password__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormConfirmPasswordError;
