import React from "react";
import "./RegistrationFormBirthdayError.css";

const RegistrationFormBirthdayError = (props) => {
  return (
    <div className="error__birthday" style={{ display: props.display }}>
      <div className="error__birthday__label">
        <div className="error__birthday__body">
          <div className="error__birthday__content">
            It looks like you've entered the wrong info. Please make sure that
            you use your real date of birth.
          </div>
          <i className="error__birthday__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormBirthdayError;
