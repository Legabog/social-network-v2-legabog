import React from "react";
import "./RegistrationBlockError.css";

const RegistrationBlockError = (props) => {
  return (
    <div
      className="registration__error"
      style={{ display: props.registrationError ? null : "none" }}
    >
      <div className="registration__error__main">
        We could not create your account.
        <br />
        We were not able to register you on our Social network.
        <br />
        It is possible that an account with such mail already exists.
      </div>
    </div>
  );
};

export default RegistrationBlockError;
