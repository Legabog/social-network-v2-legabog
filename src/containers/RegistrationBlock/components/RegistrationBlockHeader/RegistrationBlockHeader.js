import React from "react";
import "./RegistrationBlockHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const RegistrationBlockHeader = (props) => {
  return (
    <div className="registration-block__header">
      <div className="registration-block__header__description">Sign Up</div>
      <div className="registration-block__header__sub-description">
        It's quick and easy.
      </div>
      <div className="registration-block__header__close-icon">
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

