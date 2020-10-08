import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import "./MenuMessangerInput.css";

const MenuMessangerInput = (props) => {

  const focusInput = () => {
    document.getElementById("menuMessangerInput").focus();
  };
  
  return (
    <div
      className="menuMessanger__input__wrapper"
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
            ? "menuMessanger__input__active"
            : "menuMessanger__input"
        }
        onClick={(e) => {
          focusInput("headerinputsearch");
          props.toggleButtonMessangerMenuInput(true);
        }}
      >
        {props.ButtonMessangerMenuInput ? null : (
          <SearchIcon
            onClick={(e) => {
              focusInput("menuMessangerInput");
              props.toggleButtonMessangerMenuInput(true);
            }}
          />
        )}
        <input
          type="text"
          id="menuMessangerInput"
          placeholder="Search Messanger"
        />
      </div>
    </div>
  );
};

export default MenuMessangerInput;
