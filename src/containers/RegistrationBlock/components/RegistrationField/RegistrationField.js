import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./RegistrationField.css";

import { RegistrationFieldError } from "pres-components/RegistrationFieldError";

export const RegistrationField = (props) => {

  const [displayError, setDisplayError] = useState("none");

  const toggleDisplayError = (display) => {
    setDisplayError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="registration-block__input">
      <input
        type={props.type}
        className={`registration-block__input-${props.name}`}
        data-type="text"
        name={props.name}
        id={`registration-block__input-${props.name}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.inputHandler}
        onBlur={() => {
          props.onFocus(true);
          toggleDisplayError("none");
        }}
        onFocus={() => {
          props.onFocus(false);
        }}
        style={{
          border:
            props.checked && props.validator() ? "1px solid red" : null,
        }}
      />

      <ErrorIcon
        className="registration-block__input__error-icon"
        style={{
          display: props.checked && props.validator() ? null : "none",
        }}
        onClick={() => {
          toggleDisplayError();
          focusInput(`registration-block__input-${props.name}`);
        }}
      />
      <RegistrationFieldError {...props} display={displayError} />
    </div>
  );
};
