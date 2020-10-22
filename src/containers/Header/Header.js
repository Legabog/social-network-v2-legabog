import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Header.css";

import { logoutButton } from "redux/auth-reducer";

import { HeaderLeft } from "./components/HeaderLeft";
import { HeaderCenter } from "./components/HeaderCenter";
import { HeaderRight } from "./components/HeaderRight";

const Header_ = (props) => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter {...props} />
      <HeaderRight {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const Header = compose(
  withRouter,
  connect(mapStateToProps, {
    logoutButton,
  })
)(Header_);
