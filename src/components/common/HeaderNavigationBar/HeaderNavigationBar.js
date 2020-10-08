import React, { useEffect, useState } from "react";
import "./HeaderNavigationBar.css";
import HeaderNavigationBarHome from "./HeaderNavigationBarHome/HeaderNavigationBarHome";
import HeaderNavigationBarFriends from "./HeaderNavigationBarFriends/HeaderNavigationBarFriends";
import HeaderNavigationBarGroups from "./HeaderNavigationBarGroups/HeaderNavigationBarGroups";
import { NavLink, useLocation } from "react-router-dom";

const HeaderNavigationBar = (props) => {
  // ----------Help Home
  const [helpHomeOpacity, setHelpHomeOpacity] = useState(0);
  const [helpHomeVisibility, setHelpHomeVisibility] = useState("hidden");

  const turnOnHomeHelp = () => {
    setHelpHomeOpacity(1);
    setHelpHomeVisibility("visible");
  };

  const turnOffHomeHelp = () => {
    setHelpHomeOpacity(0);
    setHelpHomeVisibility("hidden");
  };

  const toggleHelpHome = (boolean) => {
    boolean ? turnOnHomeHelp() : turnOffHomeHelp();
  };

  // ----------Help Friends
  const [helpFriendsOpacity, setHelpFriendsOpacity] = useState(0);
  const [helpFriendsVisibility, setHelpFriendsVisibility] = useState("hidden");

  const turnOnFriendsHelp = () => {
    setHelpFriendsOpacity(1);
    setHelpFriendsVisibility("visible");
  };

  const turnOffFriendsHelp = () => {
    setHelpFriendsOpacity(0);
    setHelpFriendsVisibility("hidden");
  };

  const toggleHelpFriends = (boolean) => {
    boolean ? turnOnFriendsHelp() : turnOffFriendsHelp();
  };

  // ----------Help Groups
  const [helpGroupsOpacity, setHelpGroupsOpacity] = useState(0);
  const [helpGroupsVisibility, setHelpGroupsVisibility] = useState("hidden");

  const turnOnGroupsHelp = () => {
    setHelpGroupsOpacity(1);
    setHelpGroupsVisibility("visible");
  };

  const turnOffGroupsHelp = () => {
    setHelpGroupsOpacity(0);
    setHelpGroupsVisibility("hidden");
  };

  const toggleHelpGroups = (boolean) => {
    boolean ? turnOnGroupsHelp() : turnOffGroupsHelp();
  };

  //-----------Active link focus

  const location = useLocation();

  const [activeLink, setActiveLink] = useState();

  const toggleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleActiveLinkAfterRender = () => {
    if (location.pathname === "/") {
      toggleActiveLink("/");
    } else {
      if (location.pathname === "/friends") {
        toggleActiveLink("/friends");
      } else {
        if (location.pathname === "/groups") {
          toggleActiveLink("/groups");
        } else {
          toggleActiveLink(location.pathname);
        }
      }
    }
  };

  //

  useEffect(() => {
    toggleActiveLinkAfterRender();
  });

  return (
    <div className="header__navigation__bar">
      <NavLink to={"/"}>
        <HeaderNavigationBarHome
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelpHome={toggleHelpHome}
        />
      </NavLink>

      <div
        className="header__option__home__help"
        style={{ opacity: helpHomeOpacity, visibility: helpHomeVisibility }}
      >
        <span>Home</span>
      </div>

      <NavLink to={"/friends"}>
        <HeaderNavigationBarFriends
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelpFriends={toggleHelpFriends}
        />
      </NavLink>

      <div
        className="header__option__friends__help"
        style={{
          opacity: helpFriendsOpacity,
          visibility: helpFriendsVisibility,
        }}
      >
        <span>Friends</span>
      </div>

      <NavLink to={"/groups"}>
        <HeaderNavigationBarGroups
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelpGroups={toggleHelpGroups}
        />
      </NavLink>

      <div
        className="header__option__groups__help"
        style={{ opacity: helpGroupsOpacity, visibility: helpGroupsVisibility }}
      >
        <span>Groups</span>
      </div>
    </div>
  );
};

export default HeaderNavigationBar;
