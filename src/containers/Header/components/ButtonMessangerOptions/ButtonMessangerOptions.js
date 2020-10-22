import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./ButtonMessangerOptions.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ButtonMessangerOptions = (props) => {
  // ----------Help Link
  const [helpButtonOpacity, setHelpButtonOpacity] = useState(0);
  const [helpButtonVisibility, setHelpButtonVisibility] = useState("hidden");

  const turnOnLinkHelp = () => {
    setHelpButtonOpacity(1);
    setHelpButtonVisibility("visible");
  };

  const turnOffLinkHelp = () => {
    setHelpButtonOpacity(0);
    setHelpButtonVisibility("hidden");
  };

  const toggleHelpLink = (boolean) => {
    boolean ? turnOnLinkHelp() : turnOffLinkHelp();
  };
  //

  return (
    <div
      onClick={() => {
        toggleHelpLink(false);
      }}
      onMouseEnter={() => {
        toggleHelpLink(true);
      }}
      onMouseLeave={() => {
        toggleHelpLink(false);
      }}
    >
      <NavLink to={"/messages"}>
        <div className="menu__header__button__messanger">
          <MoreHorizIcon />
        </div>
      </NavLink>

      <div
        className="menu__header__options__help"
        style={{
          opacity: helpButtonOpacity,
          visibility: helpButtonVisibility,
        }}
      >
        <span>Options</span>
      </div>
    </div>
  );
};

