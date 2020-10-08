import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./TelephoneField.css";
import RegistrationFormTelephoneError from "../../../../common/RegistrationFormErrors/RegistrationFormTelephoneError/RegistrationFormTelephoneError";

const TelephoneField = (props) => {
  const [displayTelephoneError, setDisplayTelephoneError] = useState("none");

  const toggleDisplayTelephoneError = (display) => {
    setDisplayTelephoneError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="telephone__field">
      <input
        type="text"
        id="telephone"
        className="telephoneinput"
        datatype="text"
        name="telephone"
        placeholder="Telephone number"
        value={props.telephone}
        onChange={props.inputTelephoneHandler}
        onBlur={() => {
          props.checkTelephoneField(true);
          toggleDisplayTelephoneError("none");
        }}
        onFocus={() => {
          props.checkTelephoneField(false);
        }}
        style={{
          border:
            props.checkedTelephone && props.telephoneValidator()
              ? "1px solid red"
              : null,
        }}
      />
      <ErrorIcon
        className="error__icon"
        style={{
          display:
            props.checkedTelephone && props.telephoneValidator()
              ? null
              : "none",
        }}
        onClick={() => {
            toggleDisplayTelephoneError();
            focusInput("telephone");
          }}
      />
      <RegistrationFormTelephoneError display={displayTelephoneError}/>
    </div>
  );
};

export default TelephoneField;
