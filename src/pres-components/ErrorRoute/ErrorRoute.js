import React from "react";
import "./ErrorRoute.css";
import { NavLink } from "react-router-dom";

export const ErrorRoute = (props) => {
  return (
    <div className="error-route">
      <div className="error-route__header">
        <h1>Oops, this page is not available</h1>
      </div>
      <div className="error-route__body">
        <h2>
          You may have used an invalid link or a page may have been deleted.
        </h2>
      </div>

      <div className="error-route__button-back">
        <NavLink className="button-back" to={""}>
          Go to home
        </NavLink>
      </div>
    </div>
  );
};

