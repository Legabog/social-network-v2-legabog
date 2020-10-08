import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./EmailField.css";
import RegistrationFormEmailError from "../../../../common/RegistrationFormErrors/RegistrationFormEmailError/RegistrationFormEmailError";

const EmailField = (props) => {
  const [displayEmailError, setDisplayEmailError] = useState("none");

  const toggleDisplayEmailError = (display) => {
    setDisplayEmailError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="email__field">
      <input
        type="text"
        id="regemail"
        className="emailinput"
        datatype="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.inputEmailHandler}
        onBlur={() => {
          props.checkEmailField(true);
          toggleDisplayEmailError("none");
        }}
        onFocus={() => {
          props.checkEmailField(false);
        }}
        style={{
          border:
            props.checkedEmail && props.emailValidator()
              ? "1px solid red"
              : null,
        }}
      />
      <ErrorIcon
        className="error__icon"
        style={{
          display: props.checkedEmail && props.emailValidator() ? null : "none",
        }}
        onClick={() => {
          toggleDisplayEmailError();
          focusInput("regemail");
        }}
      />
      <RegistrationFormEmailError display={displayEmailError} />
    </div>
  );
};

export default EmailField;
