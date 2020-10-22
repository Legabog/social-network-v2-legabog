import React, { useState } from "react";

import "./ButtonNotificationsMenuWrapper.css";

import CheckIcon from "@material-ui/icons/Check";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SettingsIcon from "@material-ui/icons/Settings";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const ButtonNotificationsMenuWrapper = (props) => {
  const [optionPanel, setOptionalPanel] = useState(false);

  const toggleOptionPanel = (boolean) => {
    boolean ? setOptionalPanel(true) : setOptionalPanel(false);
  };

  return (
    <div
      className={"button-notifications-menu__wrapper"}
      style={
        props.activeButton === 2
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-notifications-menu__header">
        <h1>Notifications</h1>
        <div className="button-notifications-menu__options-icon">
          <MoreHorizIcon
            onClick={() => {
              optionPanel ? toggleOptionPanel(false) : toggleOptionPanel(true);
            }}
          />
        </div>
        <div
          className="button-notifications-menu__options"
          style={{ display: optionPanel ? null : "none" }}
        >
          <div className="button-notifications-menu__arrow-icon">
            <ArrowDropUpIcon />
          </div>
          <div className="options-sections">
            <div
              className="options-sections__wrapper"
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className="options-sections__icon">
                <CheckIcon />
              </div>
              <span>Mark all as read</span>
            </div>

            <div
              className="options-sections__wrapper"
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className="options-sections__icon">
                <SettingsIcon />
              </div>
              <span>Notifications settings</span>
            </div>

            <div
              className="options-sections__wrapper"
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className="options-sections__icon">
                <DesktopWindowsIcon />
              </div>
              <span>Open Notifications</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button-notifications-menu__body">
        <div className="button-notifications-menu__img">
          <img
            src="https://www.facebook.com/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg"
            alt="description"
          />
        </div>

        <div className="button-notifications-menu__description">
          <span>You have no notifications</span>
        </div>
      </div>
    </div>
  );
};

