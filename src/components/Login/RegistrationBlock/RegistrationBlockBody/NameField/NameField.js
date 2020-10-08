import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import RegistrationFormNameError from "../../../../common/RegistrationFormErrors/RegistrationFormNameError/RegistrationFormNameError";
import "./NameField.css";

const NameField = (props) => {
  const [displayNameError, setDisplayNameError] = useState("none");

  const toggleDisplayNameError = (display) => {
    setDisplayNameError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="namefield">
      <input
        type="text"
        className="nameinput"
        data-type="text"
        name="firstname"
        id="firstname"
        placeholder="First name"
        value={props.name}
        onChange={props.inputNameHandler}
        onBlur={() => {
          props.checkNameField(true);
          toggleDisplayNameError("none");
        }}
        onFocus={() => {
          props.checkNameField(false);
        }}
        style={{
          border:
            props.checkedName && props.nameValidator() ? "1px solid red" : null,
        }}
      />

      <ErrorIcon
        className="error__icon"
        style={{
          display: props.checkedName && props.nameValidator() ? null : "none",
        }}
        onClick={() => {
          toggleDisplayNameError();
          focusInput("firstname");
        }}
      />
      <RegistrationFormNameError display={displayNameError} />
    </div>
  );
};

export default NameField;
