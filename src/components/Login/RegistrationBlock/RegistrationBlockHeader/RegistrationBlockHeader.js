import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import "./RegistrationBlockHeader.css";
import { IconButton } from "@material-ui/core";

const RegistrationBlockHeader = (props) => {
  return (
    <div className="registrationblock__top">
      <div className="registrationblock__top__main">Sign Up</div>
      <div className="registrationblock__top__description">
        It's quick and easy.
      </div>
      <div className="close__icon">
        <IconButton
          onClick={() => {
            props.displayRegistrationBlockFalse();
            props.setDefaultInputsValues();
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default RegistrationBlockHeader;
