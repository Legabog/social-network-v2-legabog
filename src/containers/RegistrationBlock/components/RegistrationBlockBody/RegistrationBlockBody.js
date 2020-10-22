import React from "react";
import "./RegistrationBlockBody.css";

import { RegistrationField } from "../RegistrationField";
import { BirthdayField } from "../BirthdayField";
import { GenderField } from "../GenderField";
import { PolicyMessage } from "../PolicyMessage";
import { RegistrationButton } from "../RegistrationButton";
import { RegistrationBlockError } from "pres-components/RegistrationBlockError";

export const RegistrationBlockBody = (props) => {
  return (
    <div className="registration-block__body">
      <RegistrationBlockError registrationError={props.registrationError} />

      <RegistrationField
        {...props}
        type={"text"}
        name={"firstname"}
        placeholder={"First name"}
        value={props.name}
        inputHandler={props.inputNameHandler}
        onFocus={props.checkNameField}
        checked={props.checkedName}
        validator={props.nameValidator}
        // error
        error_text={"What's your name?"}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"surname"}
        placeholder={"Surname"}
        value={props.surname}
        inputHandler={props.inputSurnameHandler}
        onFocus={props.checkSurnameField}
        checked={props.checkedSurname}
        validator={props.surnameValidator}
        // error
        error_text={"What's your surname?"}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"telephone"}
        placeholder={"Telephone number"}
        value={props.telephone}
        inputHandler={props.inputTelephoneHandler}
        onFocus={props.checkTelephoneField}
        checked={props.checkedTelephone}
        validator={props.telephoneValidator}
        // error
        error_text={"Enter telephone number without spaces, started from + 7."}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"email"}
        placeholder={"Email"}
        value={props.email}
        inputHandler={props.inputEmailHandler}
        onFocus={props.checkEmailField}
        checked={props.checkedEmail}
        validator={props.emailValidator}
        // error
        error_text={"Enter your email correctly without spaces."}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        value={props.password}
        inputHandler={props.inputPasswordHandler}
        onFocus={props.checkPasswordField}
        checked={props.checkedPassword}
        validator={props.passwordValidator}
        // error
        error_text={
          "Enter a combination of at least six numbers, letters and punctuation."
        }
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"password"}
        name={"confirmpassword"}
        placeholder={"Confirm password"}
        value={props.confirmPasword}
        inputHandler={props.inputConfirmPasswordHandler}
        onFocus={props.checkConfirmPasswordField}
        checked={props.checkedConfirmPassword}
        validator={props.confirmPasswordValidator}
        // error
        error_text={"The password you typed must be the same."}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <BirthdayField {...props} />
      <GenderField {...props} />
      <PolicyMessage />
      <RegistrationButton {...props} />
    </div>
  );
};

