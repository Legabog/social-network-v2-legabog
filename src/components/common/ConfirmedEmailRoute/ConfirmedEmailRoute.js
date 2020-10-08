import React from "react";
import "./ConfirmedEmailRoute.css";
import { NavLink } from "react-router-dom";

const ConfirmedEmailRoute = (props) => {
  return (
    <div className="confirmedEmailRoute">
      <div className="confirmedEmailRoute__wrapper">
        <div className="confirmedEmailRoute__header">
          <h1>Thank you for registration</h1>
          <hr />
        </div>
        <div className="confirmedEmailRoute__body">
          <h2>
            Finally, your account was created.
            <br />
            Now, you can log in.
          </h2>
        </div>
        <div className="confirmedEmailRoute__buttonBack">
          <NavLink className="buttonBack" to={"/login"}>
            Log in page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedEmailRoute;
