import React from "react";
import "./ConfirmEmailRoute.css";
import { NavLink } from "react-router-dom";

const ConfirmEmailRoute = (props) => {
  return (
    <div className="confirmEmailRoute">
      <div className="confirmEmailRoute__wrapper">
        <div className="confirmEmailRoute__header">
          <h1>Verify your account</h1>
          <hr />
        </div>
        <div className="confirmEmailRoute__body">
          <h2>
            To complete registration, you have received an e-mail message.
            <br />
            Go to the specified url.
          </h2>
        </div>
        <div className="confirmEmailRoute__buttonBack">
          <NavLink
            className="buttonBack"
            to={""}
            onClick={props.displayRegistrationBlockFalse}
          >
            Back to main page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailRoute;
