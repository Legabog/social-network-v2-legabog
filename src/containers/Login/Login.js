import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

import { signIn } from "redux/auth-reducer";
import { displayRegistrationBlockTrue } from "redux/registration-block-reducer";

const Login_ = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const [focusInputPassword, setFocusInputPassword] = useState(false);

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const focusInput = (ref) => {
    if (ref === inputEmailRef) {
      setFocusInputEmail(true);
      ref.current.focus();
    } else {
      setFocusInputPassword(true);
      ref.current.focus();
    }
  };

  const blurInput = (ref) => {
    if (ref === inputEmailRef) {
      setFocusInputEmail(false);
      ref.current.blur();
    } else {
      setFocusInputPassword(false);
      ref.current.blur();
    }
  };

  const loginButtonSignInHandler = (e) => {
    props.signIn(inputEmail, inputPassword, props.history, "/login");
    setInputEmail("");
    setInputPassword("");
    setFocusInputEmail(false);
    setFocusInputPassword(false);
  };

  return (
    <div className="login">
      <div className="login__main-block">
        <div className="login__block">
          <div className="login__description">
            <h1>Social-network by legabog</h1>
            <h2>
              This social network helps you always stay in touch and communicate
              with your friends.
            </h2>
          </div>
          <div className="login__signin-block">
            <div className="login__signin-block__form">
              <form>
                <div className="login__signin-block__inputs">
                  <div className="login__signin-block__input">
                    <input
                      className="signin-block__input"
                      type="text"
                      name="email"
                      id="login-email"
                      ref={inputEmailRef}
                      placeholder="Email"
                      value={inputEmail}
                      onChange={inputEmailHandler}
                      onFocus={() => focusInput(inputEmailRef)}
                      onBlur={() => blurInput(inputEmailRef)}
                      style={{
                        borderColor: focusInputEmail ? "#1877f2" : null,
                        boxShadow: focusInputEmail ? "0 0 0 2px #e7f3ff" : null,
                      }}
                    />
                  </div>
                  <div className="login__signin-block__input">
                    <input
                      className="signin-block__input"
                      type="password"
                      name="password"
                      id="login-password"
                      placeholder="Password"
                      value={inputPassword}
                      ref={inputPasswordRef}
                      onChange={inputPasswordHandler}
                      onFocus={() => focusInput(inputPasswordRef)}
                      onBlur={() => blurInput(inputPasswordRef)}
                      style={{
                        borderColor: focusInputPassword ? "#1877f2" : null,
                        boxShadow: focusInputPassword
                          ? "0 0 0 2px #e7f3ff"
                          : null,
                      }}
                    />
                  </div>
                </div>
                <div className="login__signin-block__button">
                  <button
                    className="button-signin"
                    name="login"
                    type="submit"
                    id="login__button"
                    onClick={loginButtonSignInHandler}
                  >
                    Login
                  </button>
                </div>
                <div className="login__signin-block__restore-password">
                  <a href="/">Forgotten password?</a>
                </div>
                <div className="login__signin-block__hr"></div>
                <div className="login__signin-block__button">
                  <NavLink
                    className="button-create-account"
                    to={"/"}
                    onClick={props.displayRegistrationBlockTrue}
                  >
                    Create an account
                  </NavLink>
                </div>
              </form>
            </div>
            <div className="login__signin-block__help">
              <NavLink to={"/"}>Create a Page</NavLink>
              &nbsp; of a celebrity, music band or company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export const Login = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
    displayRegistrationBlockTrue,
  })
)(Login_);
