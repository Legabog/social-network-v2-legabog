import React from "react";
import { Switch } from "react-router-dom";
import "./Root.css";

const Root = (props) => {
  return (
    <div className={"app"}>
      <Switch>{props.children}</Switch>
      {props.component}
    </div>
  );
};

export default Root;
