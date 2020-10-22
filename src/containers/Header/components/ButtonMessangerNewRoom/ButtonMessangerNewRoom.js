import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import "./ButtonMessangerNewRoom.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ButtonMessangerNewRoom = (props) => {
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
          <VideoCallIcon />
        </div>
      </NavLink>

      <div
        className="menu__header__newRoom__help"
        style={{
          opacity: helpButtonOpacity,
          visibility: helpButtonVisibility,
        }}
      >
        <span>Create new room</span>
      </div>
    </div>
  );
};

