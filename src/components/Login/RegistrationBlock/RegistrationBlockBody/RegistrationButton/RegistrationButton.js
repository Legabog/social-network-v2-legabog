import React from "react";
import "./RegistrationButton.css";

const RegistrationButton = (props) => {
  return (
    <div className="registration__button">
      <button
        type="submit"
        className="regbutton"
        onClick={() => {
          props.validationInputsFields();
          props.validationResult();
        }}
      >
        Sign Up
      </button>
      <span
        className="registration__loader"
        style={{
          display: props.registrationFetching ? null : "none",
        }}
      >
        <img
          className="regloader"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif"
          alt="loader"
        />
      </span>
    </div>
  );
};

export default RegistrationButton;
