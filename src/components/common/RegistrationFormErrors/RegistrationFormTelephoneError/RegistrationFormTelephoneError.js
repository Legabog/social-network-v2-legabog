import React from "react";
import "./RegistrationFormTelephoneError.css";

const RegistrationFormTelephoneError = (props) => {
  return (
    <div className="error__telephone" style={{ display: props.display }}>
      <div className="error__telephone__label">
        <div className="error__telephone__body">
          <div className="error__telephone__content">
            Enter telephone number without spaces, starting from +7.
          </div>
          <i className="error__telephone__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormTelephoneError;
