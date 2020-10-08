import React, { useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();

  const [inputEmail, setInputEmail] = useState("");
  // -------Focus attribute
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const focusedInputEmail = (boolean) => {
    setFocusInputEmail(boolean);
  };
  //

  const [inputPassword, setInputPassword] = useState("");
  // -------Focus attribute
  const [focusInputPassword, setFocusInputPassword] = useState(false);
  const focusedInputPassword = (boolean) => {
    setFocusInputPassword(boolean);
  };
  //

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const loginButtonSignInHandler = (e) => {
    // let qwe = history.push("/login")

    e.preventDefault();
    props.signIn(inputEmail, inputPassword, history, "/login")    
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="login">
      <div className="login__mainblock">
        <div className="login__block">
          <div className="login__description">
            <h1>Social-network by legabog</h1>
            <h2>
              This social network helps you always stay in touch and communicate
              with your friends.
            </h2>
          </div>
          <div className="login__signinblock">
            <div className="login__signinblock__form">
              <form>
                <div className="login__signinblock__inputs">
                  <div className="login__signinblock__inputs_email">
                    <input
                      className="input__email"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={inputEmail}
                      onChange={inputEmailHandler}
                      onFocus={() => {
                        focusedInputEmail(true);
                      }}
                      onBlur={() => {
                        focusedInputEmail(false);
                      }}
                      style={{
                        borderColor: focusInputEmail ? "#1877f2" : null,
                        boxShadow: focusInputEmail ? "0 0 0 2px #e7f3ff" : null,
                      }}
                    />
                  </div>
                  <div className="login__signinblock__inputs_password">
                    <input
                      className="input__password"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={inputPassword}
                      onChange={inputPasswordHandler}
                      onFocus={() => {
                        focusedInputPassword(true);
                      }}
                      onBlur={() => {
                        focusedInputPassword(false);
                      }}
                      style={{
                        borderColor: focusInputPassword ? "#1877f2" : null,
                        boxShadow: focusInputPassword
                          ? "0 0 0 2px #e7f3ff"
                          : null,
                      }}
                    />
                  </div>
                </div>
                <div className="login__signinblock__login__button">
                  <button
                    className="login__button"
                    name="login"
                    type="submit"
                    id="login__button"
                    onClick={loginButtonSignInHandler}
                  >
                    Login
                  </button>
                </div>
                <div className="login__signinblock__restore__password">
                  <a href="/">Forgotten password?</a>
                </div>
                <div className="login__signinblock__hr"></div>
                <div className="login__signinblock__create_account_button">
                  <NavLink
                    className="create__an__account__button"
                    to={"/"}
                    onClick={props.displayRegistrationBlockTrue}
                  >
                    Create an account
                  </NavLink>
                </div>
              </form>
            </div>
            <div className="login__signinblock__help">
              <NavLink to={"/"}>Create a Page</NavLink>
              &nbsp; of a celebrity, music band or company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
