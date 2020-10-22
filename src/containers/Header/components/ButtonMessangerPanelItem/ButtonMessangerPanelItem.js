import React from "react";
import "./ButtonMessangerPanelItem.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ButtonMessangerPanelItem = (props) => {
  // ----------Help Link
  const [helpItemOpacity, setHelpItemOpacity] = useState(0);
  const [helpItemVisibility, setHelpItemVisibility] = useState("hidden");

  const turnOnItemHelp = () => {
    setHelpItemOpacity(1);
    setHelpItemVisibility("visible");
  };

  const turnOffItemHelp = () => {
    setHelpItemOpacity(0);
    setHelpItemVisibility("hidden");
  };

  const toggleHelp = (boolean) => {
    boolean ? turnOnItemHelp() : turnOffItemHelp();
  };
  //

  return (
    <div
      onClick={() => {
        toggleHelp(false);
      }}
      onMouseEnter={() => {
        toggleHelp(true);
      }}
      onMouseLeave={() => {
        toggleHelp(false);
      }}
    >
      <NavLink
        to={"/messages"}
        onClick={() => {
          props.toggleActiveButton();
        }}
      >
        <div className="button-messanger-menu__panel-item">
          <props.Icon />
        </div>
      </NavLink>

      <div
        className="button-messanger-menu__panel-item-help"
        style={{
          opacity: helpItemOpacity,
          visibility: helpItemVisibility,
          width: `${props.help_width}`,
          marginLeft: `${props.help_marginLeft}`,
        }}
      >
        <span>{props.item_help}</span>
      </div>
    </div>
  );
};
