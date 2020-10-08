import React from "react";
import "./RegistrationFormSurnameError.css";

const RegistrationFormSurnameError = (props) => {
  return (
    <div className="error__surname" style={{ display: props.display }}>
      <div className="error__surname__label">
        <div className="error__surname__body">
          <div className="error__surname__content">What's your surname?</div>
          <i className="error__surname__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormSurnameError;
