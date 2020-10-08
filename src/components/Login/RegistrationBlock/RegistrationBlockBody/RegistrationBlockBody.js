import React from "react";
import RegistrationBlockError from "../../../common/RegistrationFormErrors/RegistrationBlockError/RegistrationBlockError";
import "./RegistrationBlockBody.css";
import NameField from "./NameField/NameField";
import SurnameField from "./SurnameField/Surname";
import TelephoneField from "./TelephoneField/TelephoneField";
import EmailField from "./EmailField/EmailField";
import PasswordField from "./PasswordField/PasswordField";
import BirthdayField from "./BirthdayField/BirthdayField";
import GenderField from "./GenderField/GenderField";
import PolicyMessage from "./PolicyMessage/PolicyMessage";
import RegistrationButton from "./RegistrationButton/RegistrationButton";
import ConfirmPasswordField from "./ConfirmPasswordField/ConfirmPasswordField";

const RegistrationBlockBody = (props) => {
  return (
    <div className="registrationblock__body">
      <RegistrationBlockError registrationError={props.registrationError} />
      <div className="fullname__field">
        <NameField {...props} />
        <SurnameField {...props} />
      </div>
      <TelephoneField {...props} />
      <EmailField {...props} />
      <PasswordField {...props} />
      <ConfirmPasswordField {...props}/>
      <BirthdayField {...props} />
      <GenderField {...props} />
      <PolicyMessage />
      <RegistrationButton {...props} />
    </div>
  );
};

export default RegistrationBlockBody;
