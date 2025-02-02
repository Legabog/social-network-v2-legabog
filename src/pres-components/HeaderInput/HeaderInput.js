import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderInput.css";

export const HeaderInput = (props) => {
  const focusInput = (componentId) => {
    document.getElementById(componentId).focus();
  };

  const clickSerachIcon = () => {
    props.toggleActiveInput();
    setTimeout(() => {
      focusInput("header-input");
    }, 100);
  };

  const clickInput = () => {
    if (props.activeInput) {
      focusInput("header-input");
    } else {
      props.toggleActiveInput();
      setTimeout(() => {
        focusInput("header-input");
      }, 100);
    }
  };

  return (
    <div
      className={props.activeInput ? "header__input_active" : "header__input"}
    >
      {props.activeInput ? null : <SearchIcon onClick={clickSerachIcon} />}
      <input
        type="text"
        id="header-input"
        placeholder="Search Social Network"
        onClick={clickInput}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};
