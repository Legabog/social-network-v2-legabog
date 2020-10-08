import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./Surname.css";
import RegistrationFormSurnameError from "../../../../common/RegistrationFormErrors/RegistrationFormSurnameError/RegistrationFormSurnameError";

const SurnameField = (props) => {
  const [displaySurnameError, setDisplaySurnameError] = useState("none");

  const toggleDisplaySurnameError = (display) => {
    setDisplaySurnameError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="sernamefield">
      <input
        type="text"
        id="surname"
        className="sernameinput"
        data-type="text"
        name="secondname"
        placeholder="Surname"
        value={props.surname}
        onChange={props.inputSurnameHandler}
        onBlur={() => {
          props.checkSurnameField(true);
          toggleDisplaySurnameError("none");
        }}
        onFocus={() => {
          props.checkSurnameField(false);
        }}
        style={{
          border:
            props.checkedSurname && props.surnameValidator()
              ? "1px solid red"
              : null,
        }}
      />
      <ErrorIcon
        className="error__icon"
        style={{
          display:
            props.checkedSurname && props.surnameValidator() ? null : "none",
        }}
        onClick={() => {
            toggleDisplaySurnameError();
            focusInput("surname");
          }}
      />
      <RegistrationFormSurnameError display={displaySurnameError}/>
    </div>
  );
};

export default SurnameField;
