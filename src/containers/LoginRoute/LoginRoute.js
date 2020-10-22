import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./LoginRoute.css";

import { signIn } from "redux/auth-reducer";
import { displayRegistrationBlockTrue } from "redux/registration-block-reducer";

import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

const LoginRoute_ = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const loginButtonSignInHandler = (e) => {
    props.signIn(inputEmail, inputPassword, props.history, "/login");
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="login-route__wrapper">
      <div className="login-route">
        <div className="login-route__header">
          <h1>Social network by legabog</h1>
        </div>
        <div className="login-route__body">
          <div className="login-route__body__header">
            <span>
              <div>Log in to Social network by legabog</div>
            </span>
          </div>
          <div className="login-route__body__form">
            <div className="login-route__body__input">
              <div className="login-route__body__input_error">
                <input
                  type="text"
                  name="email"
                  id="login-route-email"
                  placeholder="Email"
                  className="login-route__input"
                  value={inputEmail}
                  onChange={inputEmailHandler}
                  style={{
                    borderColor: props.loginError ? "red" : null,
                  }}
                />
                <WarningRoundedIcon
                  className="login-route__warning-icon"
                  style={{
                    display: props.loginError ? null : "none",
                  }}
                />
              </div>
              <div
                className="login-route__error-info"
                style={{ display: props.loginError ? null : "none" }}
              >
                The email address or phone number that you've entered doesn't
                match any account.
                <NavLink
                  to={"/login"}
                  onClick={props.displayRegistrationBlockTrue}
                >
                  Sign up for an account.
                </NavLink>
              </div>
            </div>

            <div className="login-route__body__input">
              <input
                type="password"
                name="password"
                id="login-route-password"
                placeholder="Password"
                className="login-route__input"
                value={inputPassword}
                onChange={inputPasswordHandler}
              />
            </div>

            <div className="login-route__body__button">
              <button
                className="button-signin"
                name="login"
                type="submit"
                id="loginButton"
                onClick={loginButtonSignInHandler}
              >
                Login
              </button>
            </div>
            <div className="login-route__body__restore-account">
              <NavLink to={"/login"}>Forgotten account?</NavLink>
            </div>
            <div className="login-route__body__or">
              <span className="or">or</span>
            </div>

            <div className="login-route__body__button">
              <NavLink
                className="button-create-account"
                to={"/login"}
                onClick={props.displayRegistrationBlockTrue}
              >
                Create an account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError,
});

export const LoginRoute = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
    displayRegistrationBlockTrue,
  })
)(LoginRoute_);
