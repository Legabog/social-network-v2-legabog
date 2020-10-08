import React from "react";
import "./RegistrationFormPasswordError.css";

const RegistrationFormPasswordError = (props) => {
  return (
    <div className="error__password" style={{ display: props.display }}>
      <div className="error__password__label">
        <div className="error__password__body">
          <div className="error__password__content">
            Enter a combination of at least six numbers, letters and
            punctuation.
          </div>
          <i className="error__password__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormPasswordError;
