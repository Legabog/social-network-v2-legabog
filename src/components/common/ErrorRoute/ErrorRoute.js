import React from "react";
import "./ErrorRoute.css";
import { NavLink } from "react-router-dom";

const ErrorRoute = (props) => {
  return (
    <div className="errorRoute">
        <div className="errorRoute__header">
            <h1>Oops, this page is not available</h1>
        </div>
        <div className="errorRoute__body">
            <h2>You may have used an invalid link or a page may have been deleted.</h2>
        </div>

        <div className="errorRoute__button__back">
            <NavLink className="button__back" to={""}>Go to home</NavLink>
        </div>
    </div>
  );
};

export default ErrorRoute;
