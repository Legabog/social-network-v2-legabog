import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./RegistrationBlock.css";
import is from "is_js";

import {
  displayRegistrationBlockTrue,
  displayRegistrationBlockFalse,
} from "redux/registration-block-reducer";

import { signUp } from "redux/auth-reducer";

import { BackDrop } from "pres-components/BackDrop";
import { RegistrationBlockHeader } from "./components/RegistrationBlockHeader";
import { RegistrationBlockBody } from "./components/RegistrationBlockBody";

const RegistrationBlock_ = (props) => {
  // ----------Name input
  const [name, setName] = useState("");
  const [checkedName, setCheckedName] = useState(false);

  const checkNameField = (boolean) => {
    setCheckedName(boolean);
  };
  //

  // ---------Surname input
  const [surname, setSurname] = useState("");
  const [checkedSurname, setCheckedSurname] = useState(false);

  const checkSurnameField = (boolean) => {
    setCheckedSurname(boolean);
  };
  //

  // ----------Telephone input
  const [telephone, setTelephone] = useState("");
  const [checkedTelephone, setCheckedTelephone] = useState(false);

  const checkTelephoneField = (boolean) => {
    if (
      !boolean &&
      (is.empty(telephone) ||
        telephone.trim().split("")[0] !== "+" ||
        telephone.trim().split("")[1] !== "7")
    ) {
      setTelephone("+7");
    }
    setCheckedTelephone(boolean);
  };
  //

  // ----------Email input

  const [email, setEmail] = useState("");
  const [checkedEmail, setCheckedEmail] = useState(false);

  const checkEmailField = (boolean) => {
    setCheckedEmail(boolean);
  };
  //

  // ----------Password input
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState(false);

  const checkPasswordField = (boolean) => {
    setCheckedPassword(boolean);
  };
  //

  // -----------Confirm password input
  const [confirmPasword, setConfirmPassword] = useState("");
  const [checkedConfirmPassword, setCheckedConfirmPassword] = useState(false);

  const checkConfirmPasswordField = (boolean) => {
    setCheckedConfirmPassword(boolean);
  };
  //
  // ----------Birthday input

  const [bday, setBday] = useState("00");
  const [mday, setMday] = useState("00");
  const [yday, setYday] = useState("0000");
  const [checkedBirthdayInput, setCheckedBirthday] = useState(false);

  const checkBirthdayField = (boolean) => {
    setCheckedBirthday(boolean);
  };
  //

  // ---------Gender input

  const [sex, setSex] = useState(0);
  const [validSex, setValidSex] = useState(true);

  const validSexInput = (boolean) => {
    setValidSex(boolean);
  };
  //

  // --------Inputs handlers
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputSurnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const inputTelephoneHandler = (e) => {
    setTelephone(e.target.value.replace(/[^0-9+]/, ""));
  };

  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const inputConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  // ---------Selects handlers

  const bdayHandler = (e) => {
    setBday(e.target.value);
  };

  const mdayHandler = (e) => {
    setMday(e.target.value);
  };

  const ydayHandler = (e) => {
    setYday(e.target.value);
  };

  const sexHandler = (e) => {
    setSex(e);
  };

  //----------Validation of inputs

  const spacesValidator = (inputValue) => {
    return inputValue.trim() !== "";
  };

  const nameValidator = () => {
    return is.empty(name) || !spacesValidator(name);
  };

  const surnameValidator = () => {
    return is.empty(surname) || !spacesValidator(surname);
  };

  const telephoneValidator = () => {
    return (
      is.empty(telephone) ||
      !spacesValidator(telephone) ||
      telephone.trim().split("")[0] !== "+" ||
      telephone.trim().split("")[1] !== "7" ||
      telephone.trim().split("").length !== 12
    );
  };

  const emailValidator = () => {
    return is.empty(email) || !spacesValidator(email) || !is.email(email);
  };

  const passwordValidator = () => {
    return (
      is.empty(password) ||
      !spacesValidator(password) ||
      password.trim().split("").length < 6
    );
  };

  const confirmPasswordValidator = () => {
    return is.empty(password) || confirmPasword !== password;
  };

  const birthdayValidator = () => {
    return bday === "00" || mday === "00" || yday === "0000";
  };

  const sexValidator = () => {
    return sex !== 1 && sex !== 2 && sex !== -1;
  };

  const validationInputsFields = () => {
    nameValidator() ? checkNameField(true) : checkNameField(false);
    surnameValidator() ? checkSurnameField(true) : checkSurnameField(false);
    telephoneValidator()
      ? checkTelephoneField(true)
      : checkTelephoneField(false);
    emailValidator() ? checkEmailField(true) : checkEmailField(false);
    passwordValidator() ? checkPasswordField(true) : checkPasswordField(false);
    confirmPasswordValidator()
      ? checkConfirmPasswordField(true)
      : checkConfirmPasswordField(false);
    birthdayValidator() ? checkBirthdayField(true) : checkBirthdayField(false);
    sexValidator() ? validSexInput(false) : validSexInput(true);
  };

  const validationResult = () => {
    if (nameValidator()) {
      return null;
    } else {
      if (surnameValidator()) {
        return null;
      } else {
        if (telephoneValidator()) {
          return null;
        } else {
          if (emailValidator()) {
            return null;
          } else {
            if (passwordValidator()) {
              return null;
            } else {
              if (birthdayValidator()) {
                return null;
              } else {
                if (sex === 0) {
                  return null;
                } else {
                  if (confirmPasswordValidator()) {
                    return null;
                  } else {
                    props.signUp(
                      name,
                      surname,
                      telephone,
                      email,
                      password,
                      bday,
                      mday,
                      yday,
                      sex,
                      props.history
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  // ----------Set default input values
  const setDefaultInputsValues = () => {
    setName("");
    setCheckedName(false);

    setSurname("");
    setCheckedSurname(false);

    setTelephone("");
    setCheckedTelephone(false);

    setEmail("");
    setCheckedEmail(false);

    setPassword("");
    setCheckedPassword(false);

    setConfirmPassword("");
    setCheckedConfirmPassword(false);

    document.getElementById("birthday-field__select-day").selectedIndex = 0;
    document.getElementById("birthday-field__select-month").selectedIndex = 0;
    document.getElementById("birthday-field__select-year").selectedIndex = 0;
    setCheckedBirthday(false);

    sexHandler(0);
    document.getElementById("gender-field-input-female").checked = false;
    document.getElementById("gender-field-input-male").checked = false;
    document.getElementById("gender-field-input-other").checked = false;
    setValidSex(true);
  };

  //

  return (
    <div
      className="registration-block__wrapper"
      style={{
        visibility: `${props.visibilityRegistrationBlock}`,
        opacity: `${props.opacityRegistrationBlock}`,
      }}
    >
      <div className="registration-block__main-wrapper">
        <div className="registration-block__main-block">
          <div className="registration-block">
            <RegistrationBlockHeader
              displayRegistrationBlockFalse={
                props.displayRegistrationBlockFalse
              }
              setDefaultInputsValues={setDefaultInputsValues}
            />

            <hr />

            <RegistrationBlockBody
              {...props}
              name={name}
              inputNameHandler={inputNameHandler}
              checkNameField={checkNameField}
              checkedName={checkedName}
              nameValidator={nameValidator}
              // -------------------------
              surname={surname}
              inputSurnameHandler={inputSurnameHandler}
              checkSurnameField={checkSurnameField}
              checkedSurname={checkedSurname}
              surnameValidator={surnameValidator}
              // ------------------------
              telephone={telephone}
              inputTelephoneHandler={inputTelephoneHandler}
              checkTelephoneField={checkTelephoneField}
              checkedTelephone={checkedTelephone}
              telephoneValidator={telephoneValidator}
              // ------------------------
              email={email}
              inputEmailHandler={inputEmailHandler}
              checkEmailField={checkEmailField}
              checkedEmail={checkedEmail}
              emailValidator={emailValidator}
              // ------------------------
              password={password}
              inputPasswordHandler={inputPasswordHandler}
              checkPasswordField={checkPasswordField}
              checkedPassword={checkedPassword}
              passwordValidator={passwordValidator}
              // ------------------------
              confirmPasword={confirmPasword}
              inputConfirmPasswordHandler={inputConfirmPasswordHandler}
              checkConfirmPasswordField={checkConfirmPasswordField}
              checkedConfirmPassword={checkedConfirmPassword}
              confirmPasswordValidator={confirmPasswordValidator}
              // ------------------------
              bday={bday}
              mday={mday}
              yday={yday}
              bdayHandler={bdayHandler}
              mdayHandler={mdayHandler}
              ydayHandler={ydayHandler}
              checkedBirthdayInput={checkedBirthdayInput}
              birthdayValidator={birthdayValidator}
              checkBirthdayField={checkBirthdayField}
              // ------------------------
              sex={sex}
              sexHandler={sexHandler}
              validSexInput={validSexInput}
              validSex={validSex}
              sexValidator={sexValidator}
              // ------------------------
              validationInputsFields={validationInputsFields}
              validationResult={validationResult}
            />
          </div>
        </div>
      </div>
      <BackDrop />
    </div>
  );
};

const mapStateToProps = (state) => ({
  registrationFetching: state.authReducer.registrationFetching,
  registrationError: state.authReducer.registrationError,
  // registration block reducer
  visibilityRegistrationBlock:
    state.registrationBlockReducer.visibilityRegistrationBlock,
  opacityRegistrationBlock:
    state.registrationBlockReducer.opacityRegistrationBlock,
});

export const RegistrationBlock = compose(
  withRouter,
  connect(mapStateToProps, {
    signUp,
    displayRegistrationBlockTrue,
    displayRegistrationBlockFalse,
  })
)(RegistrationBlock_);
