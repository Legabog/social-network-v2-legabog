import React, { useState } from "react";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import { IconButton } from "@material-ui/core";
import "./GenderField.css";
import RegistrationFormGenderError from "../../../../common/RegistrationFormErrors/RegistrationFormGenderError/RegistrationFormGenderError";
import RegistrationFormGenderInformation from "../../../../common/RegistrationFormGenderInformation/RegistrationFormGenderInformation";

const GenderField = (props) => {
  const [displayGenderError, setDisplayGenderError] = useState("none");
  const [displayGenderInfo, setDisplayGenderInfo] = useState("none");

  const toggleDisplayGenderError = (display) => {
    setDisplayGenderError(display);
  };

  const toggleDisplayGenderInfo = () => {
    displayGenderInfo === "none"
      ? setDisplayGenderInfo()
      : setDisplayGenderInfo("none");
  };

  const focusComponent = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="gender">
      <div className="gender__description">
        Gender
        <IconButton
          id="gender__help__button"
          onBlur={toggleDisplayGenderInfo}
          onFocus={toggleDisplayGenderInfo}
          onClick={(e) => {
            e.preventDefault();
            focusComponent("gender__help__button");
          }}
        >
          <HelpOutlinedIcon style={{ width: "12px", height: "12px" }} />
        </IconButton>
        <ErrorIcon
          className="error__gender"
          style={{
            display: !props.validSex && props.sexValidator() ? null : "none",
          }}
          onClick={() => {
            toggleDisplayGenderError();
            focusComponent("femaleinput");
          }}
        />
      </div>
      <div className="gender__selects">
        <div
          className="gender__female"
          style={{
            border:
              !props.validSex && props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label
            className="gender__female__label"
            htmlFor="gender__female__input"
          >
            Female
          </label>
          <input
            name="gender"
            id="femaleinput"
            className="gender__female__input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(1);
              toggleDisplayGenderError("none");
            }}
          />
        </div>
        <div
          className="gender__male"
          style={{
            border:
              !props.validSex && props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label className="gender__male__label" htmlFor="gender__male__input">
            Male
          </label>
          <input
            name="gender"
            id="maleinput"
            className="gender__male__input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(2);
              toggleDisplayGenderError("none");
            }}
          />
        </div>
        <div
          className="gender__other"
          style={{
            border:
              !props.validSex && props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label
            className="gender__other__label"
            htmlFor="gender__other__input"
          >
            Other
          </label>
          <input
            name="gender"
            id="otherinput"
            className="gender__other__input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(-1);
              toggleDisplayGenderError("none");
            }}
          />
        </div>
      </div>
      <RegistrationFormGenderError display={displayGenderError} />
      <RegistrationFormGenderInformation
        display={displayGenderInfo}
        toggleDisplayGenderInfo={toggleDisplayGenderInfo}
      />
    </div>
  );
};

export default GenderField;
