import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNavigationBar.css";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { HeaderNavigationBarHelp } from "pres-components/HeaderNavigationBarHelp";
import { HeaderNavigationBarItem } from "pres-components/HeaderNavigationBarItem";

export const HeaderNavigationBar = (props) => {
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

  const [activeLink, setActiveLink] = useState();

  const toggleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleActiveLinkAfterRender = () => {
    if (props.location.pathname === "/") {
      toggleActiveLink("/");
    } else {
      if (props.location.pathname === "/friends") {
        toggleActiveLink("/friends");
      } else {
        if (props.location.pathname === "/groups") {
          toggleActiveLink("/groups");
        } else {
          toggleActiveLink(props.location.pathname);
        }
      }
    }
  };

  //

  useEffect(() => {
    toggleActiveLinkAfterRender();
  });

  return (
    <div className="header-navigation-bar">
      <NavLink to={"/"}>
        <HeaderNavigationBarItem
          link={"/"}
          activeLink={activeLink}
          activeIcon={HomeIcon}
          Icon={HomeOutlinedIcon}
          toggleActiveLink={toggleActiveLink}
          toggleHelp={toggleHelpHome}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={"Home"}
        helpOpacity={helpHomeOpacity}
        helpVisibility={helpHomeVisibility}
        helpMarginLeft={"-260px"}
      />

      <NavLink to={"/friends"}>
        <HeaderNavigationBarItem
          link={"/friends"}
          activeLink={activeLink}
          activeIcon={SupervisorAccountIcon}
          Icon={SupervisorAccountIcon}
          toggleActiveLink={toggleActiveLink}
          toggleHelp={toggleHelpFriends}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={"Friends"}
        helpOpacity={helpFriendsOpacity}
        helpVisibility={helpFriendsVisibility}
        helpMarginLeft={"-10px"}
      />

      <NavLink to={"/groups"}>
        <HeaderNavigationBarItem
          link={"/groups"}
          activeLink={activeLink}
          activeIcon={SupervisedUserCircleIcon}
          Icon={SupervisedUserCircleIcon}
          toggleActiveLink={toggleActiveLink}
          toggleHelp={toggleHelpGroups}
        />
      </NavLink>

      <HeaderNavigationBarHelp
        title={"Groups"}
        helpOpacity={helpGroupsOpacity}
        helpVisibility={helpGroupsVisibility}
        helpMarginLeft={"240px"}
      />
    </div>
  );
};

