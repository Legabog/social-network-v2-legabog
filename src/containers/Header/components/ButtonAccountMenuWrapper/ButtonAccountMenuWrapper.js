import React, { useState } from "react";
import "./ButtonAccountMenuWrapper.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HelpIcon from "@material-ui/icons/Help";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";

export const ButtonAccountMenuWrapper = React.memo((props) => {
  const [themeSwitcher, switchTheme] = useState(false);

  const toggleSwitcher = () => {
    themeSwitcher ? switchTheme(false) : switchTheme(true);
  };

  return (
    <div
      className={"button-account-menu__wrapper"}
      style={
        props.activeButton === 3
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-account-menu__header">
        <NavLink to={"/profile"}>
          <div
            className="button-account-menu__block"
            onClick={() => {
              props.toggleActiveButton();
            }}
          >
            {props.fetchAvatar ? (
              <ChangeAvatarSimplePreloader width={"60px"} height={"60px"} />
            ) : props.user === null ||
              props.user.Avatars.activeAvatarUrl === "" ? (
              <div className="button-account-menu__icon">
                <AccountCircleIcon />
              </div>
            ) : (
              <div className="button-account-menu__icon">
                <Avatar
                  className={"button-account-menu-avatar"}
                  src={props.user.Avatars.activeAvatarUrl}
                />
              </div>
            )}

            <div className="button-account-menu__block__account-description">
              <div className="button-account-menu__block__account-name">
                <span>
                  {props.user === null
                    ? null
                    : `${props.user.Name} ${props.user.Sername}`}
                </span>
              </div>

              <div className="button-account-menu__block__description">
                <span>See your profile</span>
              </div>
            </div>
          </div>
        </NavLink>

        <hr />

        <div
          className="button-account-menu__section"
          onClick={() => {
            props.toggleActiveButton();
          }}
        >
          <div className="button-account-menu__section-icon">
            <AnnouncementIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>Give Feedback</span>
            </div>

            <div className="button-account-menu__section-info-secondary">
              <span>Help us improve this Social Network.</span>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="button-account-menu__section"
          onClick={() => {
            props.toggleActiveButton();
          }}
        >
          <div className="button-account-menu__section-icon">
            <SettingsIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="buttonAccount__section__info-main">
              <span>Settings & Privacy</span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>Set everything up for yourself.</span>
            </div>
          </div>
          <div className="button-account-menu__section-arrow-left">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div
          className="button-account-menu__section"
          onClick={() => {
            props.toggleActiveButton();
          }}
        >
          <div className="button-account-menu__section-icon">
            <HelpIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>Help & Support</span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>Ask your questions.</span>
            </div>
          </div>
          <div className="button-account-menu__section-arrow-left">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="button-account-menu__section" onClick={toggleSwitcher}>
          <div className="button-account-menu__section-icon">
            <Brightness2Icon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>Dark mode</span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>Switcher</span>
            </div>
          </div>
          <div className="button-account-menu__section-switcher">
            <label className="button-account-menu__switcher">
              <input
                id="themeSwitcher"
                type="checkbox"
                checked={themeSwitcher}
                onChange={toggleSwitcher}
              />
              <span
                className="button-account-menu__slider-round"
                onClick={toggleSwitcher}
              ></span>
            </label>
          </div>
        </div>

        <div
          className="button-account-menu__section"
          onClick={() => {
            console.log(props)
            props.logoutButton();
            props.history.push("/");
          }}
        >
          <div className="button-account-menu__section-icon">
            <ExitToAppIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>Log Out</span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>Exit from account.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
