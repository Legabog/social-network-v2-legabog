import React from "react";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import "./ButtonMessangerLink.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ButtonMessangerLink = (props) => {
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
          <ZoomOutMapIcon />
        </div>
      </NavLink>

      <div
        className="menu__header__link__help"
        style={{
          opacity: helpButtonOpacity,
          visibility: helpButtonVisibility,
        }}
      >
        <span>See All in messanger</span>
      </div>
    </div>
  );
};

