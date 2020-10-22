import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ButtonAccountWrapper.css";
import { Avatar } from "@material-ui/core";
import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";

export const ButtonAccountWrapper = React.memo((props) => {
  return (
    <div className={"button-account__wrapper"}>
      {props.fetchAvatar ? (
        <ChangeAvatarSimplePreloader />
      ) : (
        <div
          className={
            props.activeButton === 3
              ? "button-account_active"
              : "button-account"
          }
          onClick={() => {
            props.activeButton === 3
              ? props.toggleActiveButton()
              : props.toggleActiveButton(3);
            props.toggleAccountHelp(false);
          }}
          onMouseEnter={() => {
            props.toggleAccountHelp(true);
          }}
          onMouseLeave={() => {
            props.toggleAccountHelp(false);
          }}
        >
          {props.user === null || props.user.Avatars.activeAvatarUrl === "" ? (
            <AccountCircleIcon />
          ) : (
            <Avatar src={props.user.Avatars.activeAvatarUrl} />
          )}
        </div>
      )}
    </div>
  );
});

