import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./LoginRoute.css";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

const LoginRoute = (props) => {
  let history = useHistory();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const loginButtonSignInHandler = (e) => {
    e.preventDefault();
    props.signIn(inputEmail, inputPassword, history, "/login");
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="loginRoute__wrapper">
      <div className="loginRoute__body">
        <div className="loginRoute__header">
          <h1>Social network by legabog</h1>
        </div>
        <div className="loginRoute__form">
          <div className="loginRoute__form__header">
            <span>
              <div>Log in to Social network by legabog</div>
            </span>
          </div>
          <div className="loginRoute__form__body">
            <div className="loginRoute__email">
              <div className="loginRoute__errorIcon">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="loginRoute__einput"
                  value={inputEmail}
                  onChange={inputEmailHandler}
                  style={{
                    borderColor: props.loginError ? "red" : null,
                  }}
                />
                <WarningRoundedIcon
                  className="warning__icon"
                  style={{
                    display: props.loginError ? null : "none",
                  }}
                />
              </div>
              <div
                className="error__info"
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

            <div className="loginRoute__password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="loginRoute__passinput"
                value={inputPassword}
                onChange={inputPasswordHandler}
              />
            </div>

            <div className="loginRoute__loginButton">
              <button
                className="loginButton"
                name="login"
                type="submit"
                id="loginButton"
                onClick={loginButtonSignInHandler}
              >
                Login
              </button>
            </div>
            <div className="loginRoute__forgottenAccount">
              <NavLink to={"/login"}>Forgotten account?</NavLink>
            </div>
            <div className="loginRoute__or">
              <span className="or">or</span>
            </div>

            <div className="login__signinblock__create_account_button">
              <NavLink
                className="create__an__account__button"
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

export default LoginRoute;
