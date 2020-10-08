import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderInput.css";

const HeaderInput = (props) => {
  const focusInput = (componentId) => {
    document.getElementById("headerinputsearch").focus();
  };

  return (
    <div
      className={props.activeInput ? "header__input__active" : "header__input"}
    >
      {props.activeInput ? null : (
        <SearchIcon
          onClick={(e) => {
            e.preventDefault();
            focusInput("headerinputsearch");
            props.toggleActiveInput();
          }}
          // onBlur={props.toggleActiveInput}
        />
      )}
      <input
        type="text"
        id="headerinputsearch"
        placeholder="Search Social Network"
        onClick={(e) => {
          e.preventDefault();
          focusInput("headerinputsearch");
          props.toggleActiveInput();
        }}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};

export default HeaderInput;
