import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderInput.css";

export const HeaderInput = (props) => {
  const focusInput = (componentId) => {
    document.getElementById(componentId).focus();
  };

  return (
    <div
      className={props.activeInput ? "header__input_active" : "header__input"}
    >
      {props.activeInput ? null : (
        <SearchIcon
          onClick={(e) => {
            e.preventDefault();
            props.toggleActiveInput();
            setTimeout(() => {
              focusInput("header-input");
            }, 100);
          }}
        />
      )}
      <input
        type="text"
        id="header-input"
        placeholder="Search Social Network"
        onClick={(e) => {
          e.preventDefault();
          if (props.activeInput) {
            focusInput("header-input");
          } else {
            props.toggleActiveInput();
            setTimeout(() => {
              focusInput("header-input");
            }, 100);
          }
        }}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};
