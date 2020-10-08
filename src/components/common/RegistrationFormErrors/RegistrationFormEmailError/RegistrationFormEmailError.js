import React from "react";
import "./RegistrationFormEmailError.css";

const RegistrationFormEmailError = (props) => {
  return (
    <div className="error__name" style={{ display: props.display }}>
      <div className="error__name__label">
        <div className="error__name__body">
          <div className="error__name__content">
            Enter your email correctly without spaces.
          </div>
          <i className="error__name__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormEmailError;
