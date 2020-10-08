import React from "react";
import "./RegistrationFormNameError.css";

const RegistrationFormNameError = (props) => {
  return (
    <div className="error__name" style={{ display: props.display }}>
      <div className="error__name__label">
        <div className="error__name__body">
          <div className="error__name__content">What's your name?</div>
          <i className="error__name__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormNameError;
