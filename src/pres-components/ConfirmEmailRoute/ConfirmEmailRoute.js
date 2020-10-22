import React from "react";
import "./ConfirmEmailRoute.css";
import { NavLink } from "react-router-dom";

export const ConfirmEmailRoute = (props) => {
  return (
    <div className="confirm-email-route__wrapper">
      <div className="confirm-email-route">
        <div className="confirm-email-route__header">
          <h1>Verify your account</h1>
          <hr />
        </div>
        <div className="confirm-email-route__body">
          <h2>
            To complete registration, you have received an e-mail message.
            <br />
            Go to the specified url.
          </h2>
        </div>
        <div className="confirm-email-route__button-back">
          <NavLink
            className="button-back"
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

