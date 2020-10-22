import React from "react";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import "./ButtonMessangerNewMessage.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ButtonMessangerNewMessage = (props) => {
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
        <CreateOutlinedIcon />
        </div>
      </NavLink>

      <div
        className="menu__header__newMessage__help"
        style={{
          opacity: helpButtonOpacity,
          visibility: helpButtonVisibility,
        }}
      >
        <span>New message</span>
      </div>
    </div>
  );
};
