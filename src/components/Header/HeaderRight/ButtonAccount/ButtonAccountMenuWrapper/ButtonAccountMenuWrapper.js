import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HelpIcon from "@material-ui/icons/Help";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./ButtonAccountMenuWrapper.css";
import { TrendingUpTwoTone } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import ChangeAvatarSimplePreloader from "../../../../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const ButtonAccountMenuWrapper = React.memo((props) => {
  const history = useHistory();

  const [themeSwitcher, switchTheme] = useState(false);

  const toggleSwitcher = () => {
    themeSwitcher ? switchTheme(false) : switchTheme(TrendingUpTwoTone);
  };

  return (
    <div
      className={"button__account__menu__wrapper"}
      style={
        props.activeButton === 3
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__account__menu__header">
        <NavLink to={"/profile"}>
          <div
            className="buttonAccount__section__border"
            onClick={() => {
              props.toggleActiveButton();
            }}
          >
            {props.fetchAvatar ? (
              <ChangeAvatarSimplePreloader width={"60px"} height={"60px"} />
            ) : props.user === null ||
              props.user.Avatars.activeAvatarUrl === "" ? (
              <div className="buttonAccount__section__icon">
                <AccountCircleIcon />
              </div>
            ) : (
              <div className="buttonAccount__section__icon">
                <Avatar
                  style={{ width: "60px", height: "60px" }}
                  src={props.user.Avatars.activeAvatarUrl}
                />
              </div>
            )}

            <div className="buttonAccount__section__accountDescription">
              <div className="buttonAccount__section__accountName">
                <span>
                  {props.user === null
                    ? null
                    : `${props.user.Name} ${props.user.Sername}`}
                </span>
              </div>

              <div className="buttonAccount__section__description">
                <span>See your profile</span>
              </div>
            </div>
          </div>
        </NavLink>

        <hr />

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <AnnouncementIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Give Feedback</span>
            </div>

            <div className="buttonAccount__section__info-secondary">
              <span>Help us improve this Social Network.</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <SettingsIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Settings & Privacy</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Set everything up for yourself.</span>
            </div>
          </div>
          <div className="buttonAccount__section__arrowLeft">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <HelpIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Help & Support</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Ask your questions.</span>
            </div>
          </div>
          <div className="buttonAccount__section__arrowLeft">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="buttonAccount__menu__section" onClick={toggleSwitcher}>
          <div className="buttonAccount__menu__section__icon">
            <Brightness2Icon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Dark mode</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Switcher</span>
            </div>
          </div>
          <div className="buttonAccount__section__switcher">
            <label className="buttonAccount__switch">
              <input
                id="themeSwitcher"
                type="checkbox"
                checked={themeSwitcher}
                onChange={() => {
                  console.log("Switch!!!");
                }}
              />
              <span className="buttonAccount__slider__round"></span>
            </label>
          </div>
        </div>

        <div
          className="buttonAccount__menu__section"
          onClick={() => {
            props.logoutButton();
            history.push("/");
          }}
        >
          <div className="buttonAccount__menu__section__icon">
            <ExitToAppIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Log Out</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Exit from account.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ButtonAccountMenuWrapper;
