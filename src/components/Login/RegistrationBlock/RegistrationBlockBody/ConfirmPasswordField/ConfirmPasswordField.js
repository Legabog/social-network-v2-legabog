import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./ConfirmPasswordField.css";
import RegistrationFormConfirmPasswordError from "../../../../common/RegistrationFormErrors/RegistrationFormConfirmPasswordError/RegistrationFormConfirmPasswordError";

const ConfirmPasswordField = (props) => {
  const [
    displayConfirmPasswordError,
    setDisplayConfirmPasswordError,
  ] = useState("none");

  const toggleDisplayConfirmPasswordError = (display) => {
    setDisplayConfirmPasswordError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="confirmpassword__field">
      <input
        type="password"
        id="regconfirmpassword"
        className="confirmpasswordinput"
        datatype="text"
        name="confirmpassword"
        placeholder="Confirm password"
        value={props.confirmPasword}
        onChange={props.inputConfirmPasswordHandler}
        onBlur={() => {
          props.checkConfirmPasswordField(true);
          toggleDisplayConfirmPasswordError("none");
        }}
        onFocus={() => {
          props.checkConfirmPasswordField(false);
        }}
        style={{
          border:
            props.checkedConfirmPassword && props.confirmPasswordValidator()
              ? "1px solid red"
              : null,
        }}
      />
      <ErrorIcon
        className="error__icon"
        style={{
          display:
            props.checkedConfirmPassword && props.confirmPasswordValidator()
              ? null
              : "none",
        }}
        onClick={() => {
          toggleDisplayConfirmPasswordError();
          focusInput("regconfirmpassword");
        }}
      />
      <RegistrationFormConfirmPasswordError
        display={displayConfirmPasswordError}
      />
    </div>
  );
};

export default ConfirmPasswordField;
