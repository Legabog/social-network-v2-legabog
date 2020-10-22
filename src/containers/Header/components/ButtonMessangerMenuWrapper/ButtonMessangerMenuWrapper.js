import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonMessangerMenuWrapper.css";

import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import { MenuMessangerInput } from "../MenuMessangerInput";
import { ButtonMessangerPanelItem } from "../ButtonMessangerPanelItem";

export const ButtonMessangerMenuWrapper = (props) => {
  const [ButtonMessangerMenuInput, setButtonMessangerMenuInput] = useState(
    false
  );

  const toggleButtonMessangerMenuInput = (boolean) => {
    boolean
      ? setButtonMessangerMenuInput(true)
      : setButtonMessangerMenuInput(false);
  };

  return (
    <div
      className={"button-messanger-menu__wrapper"}
      style={
        props.activeButton === 1
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-messanger-menu__header">
        <h2>Messanger</h2>
        <div className="button-messanger-menu__panel">
          <ButtonMessangerPanelItem
            item_help={"See All in messanger"}
            help_width={"170px"}
            help_marginLeft={"-130px"}
            Icon={ZoomOutMapIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={"Create new room"}
            help_width={"150px"}
            help_marginLeft={"-110px"}
            Icon={VideoCallIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={"New message"}
            help_width={"120px"}
            help_marginLeft={"-80px"}
            Icon={CreateOutlinedIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={"Options"}
            help_width={"70px"}
            help_marginLeft={"-30px"}
            Icon={MoreHorizIcon}
            {...props}
          />
        </div>
      </div>
      <div className="button-messanger-menu__body">
        <MenuMessangerInput
          ButtonMessangerMenuInput={ButtonMessangerMenuInput}
          toggleButtonMessangerMenuInput={toggleButtonMessangerMenuInput}
        />

        <div className="button-messanger-menu__searches">
          {ButtonMessangerMenuInput ? (
            <>
              <span>No Found</span>
              <div className="button-messanger-menu__description">
                <span>
                  We couldn't find any matches for "." Try checking for typos or
                  using complete words.
                </span>
              </div>
            </>
          ) : (
            <>
              <span>No messages found.</span>
              <hr />
              <NavLink
                to={"/messages"}
                onClick={() => {
                  props.toggleActiveButton();
                }}
              >
                See All in Messanger
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

