import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => (
  <div
    className="backdrop"
    style={{ zIndex: `${props.zIndex}` }}
    onClick={props.onClick}
  ></div>
);

export default BackDrop;
