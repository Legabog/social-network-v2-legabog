import React from "react";
import "./BackDrop.css";

export const BackDrop = (props) => (
  <div
    className="backdrop"
    style={{ zIndex: `${props.zIndex}` }}
    onClick={props.onClick}
  ></div>
);

