import React from "react";
import "./ConfirmedEmailRoute.css";
import { NavLink } from "react-router-dom";

export const ConfirmedEmailRoute = (props) => {
  return (
    <div className="confirmed-email-route__wrapper">
      <div className="confirmed-email-route">
        <div className="confirmed-email-route__header">
          <h1>Thank you for registration</h1>
          <hr />
        </div>
        <div className="confirmed-email-route__body">
          <h2>
            Finally, your account was created.
            <br />
            Now, you can log in.
          </h2>
        </div>
        <div className="confirmed-email-route__button-back">
          <NavLink className="button-back" to={"/login"}>
            Log in page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

