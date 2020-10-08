import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./PasswordField.css";
import RegistrationFormPasswordError from "../../../../common/RegistrationFormErrors/RegistrationFormPasswordError/RegistrationFormPasswordError";

const PasswordField = (props) => {
  const [displayPasswordError, setDisplayPasswordError] = useState("none");

  const toggleDisplayPasswordError = (display) => {
    setDisplayPasswordError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="password__field">
      <input
        type="password"
        id="regpassword"
        className="passwordinput"
        datatype="text"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={props.inputPasswordHandler}
        onBlur={() => {
          props.checkPasswordField(true);
          toggleDisplayPasswordError("none");
        }}
        onFocus={() => {
          props.checkPasswordField(false);
        }}
        style={{
          border:
            props.checkedPassword && props.passwordValidator()
              ? "1px solid red"
              : null,
        }}
      />
      <ErrorIcon
        className="error__icon"
        style={{
          display:
            props.checkedPassword && props.passwordValidator() ? null : "none",
        }}
        onClick={() => {
          toggleDisplayPasswordError();
          focusInput("regpassword");
        }}
      />
      <RegistrationFormPasswordError display={displayPasswordError} />
    </div>
  );
};

export default PasswordField;
