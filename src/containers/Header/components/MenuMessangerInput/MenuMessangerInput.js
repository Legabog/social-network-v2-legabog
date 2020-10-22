import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import "./MenuMessangerInput.css";

export const MenuMessangerInput = (props) => {

  const focusInput = (id) => {
    document.getElementById(id).focus();
  };
  
  return (
    <div
      className="button-messanger-menu__input__wrapper"
    >
      {props.ButtonMessangerMenuInput ? (
        <IconButton
          style={{
            width: "40px",
            height: "40px",
            marginTop: "10px",
            marginRight: "5px",
          }}
          onClick={(e) => {
            e.preventDefault();
            props.toggleButtonMessangerMenuInput(false);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : null}
      <div
        className={
          props.ButtonMessangerMenuInput
            ? "button-messanger-menu__input_active"
            : "button-messanger-menu__input"
        }
        onClick={(e) => {
          focusInput("button-messanger-menu-input");
          props.toggleButtonMessangerMenuInput(true);
        }}
      >
        {props.ButtonMessangerMenuInput ? null : (
          <SearchIcon
            onClick={(e) => {
              focusInput("button-messanger-menu-input");
              props.toggleButtonMessangerMenuInput(true);
            }}
          />
        )}
        <input
          type="text"
          id="button-messanger-menu-input"
          placeholder="Search Messanger"
          onBlur={() => {
            props.toggleButtonMessangerMenuInput(false);
          }}
        />
      </div>
    </div>
  );
};

