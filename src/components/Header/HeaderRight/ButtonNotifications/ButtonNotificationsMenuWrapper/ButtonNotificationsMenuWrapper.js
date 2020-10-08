import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SettingsIcon from "@material-ui/icons/Settings";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./ButtonNotificationsMenuWrapper.css";

const ButtonNotificationsMenuWrapper = (props) => {
  const [optionPanel, setOptionalPanel] = useState(false);

  const toggleOptionPanel = (boolean) => {
    boolean ? setOptionalPanel(true) : setOptionalPanel(false);
  };

  return (
    <div
      className={"button__notifications__menu__wrapper"}
      style={
        props.activeButton === 2
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__notifications__menu__header">
        <h1>Notifications</h1>
        <div className="button__notifications__menu__options">
          <MoreHorizIcon
            onClick={() => {
              optionPanel ? toggleOptionPanel(false) : toggleOptionPanel(true);
            }}
          />
        </div>
        <div
          className="notificationsOptions"
          style={{ display: optionPanel ? null : "none" }}
        >
          <div className="notificationsOptions__icon">
            <ArrowDropUpIcon  />
          </div>
          <div className="options__sections">
            <div className="options__section__border">
              <div className="options__section__icon">
                <CheckIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>Mark all as read</span>
            </div>

            <div className="options__section__border">
              <div className="options__section__icon">
                <SettingsIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>Notifications settings</span>
            </div>

            <div className="options__section__border">
              <div className="options__section__icon">
                <DesktopWindowsIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>Open Notifications</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button__notifications__menu__body">
        <div className="notifications__menu__body__img">
          <img
            src="https://www.facebook.com/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg"
            alt="description"
          />
        </div>

        <div className="notifications__menu__body__description">
          <span>You have no notifications</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonNotificationsMenuWrapper;
