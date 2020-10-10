import React from "react";
import "./HeaderNavigationBarHelp.css";

const HeaderNavigationBarHelp = (props) => {
  return (
    <div
      className="header-navigation-bar__help"
      style={{
        opacity: props.helpOpacity,
        visibility: props.helpVisibility,
        marginLeft: `${props.helpMarginLeft}`,
      }}
    >
      <span>{props.title}</span>
    </div>
  );
};

export default HeaderNavigationBarHelp;
