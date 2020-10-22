import React, { useState } from "react";
import "./HeaderInput.css";

import SearchIcon from "@material-ui/icons/Search";


export const HeaderInput = (props) => {

  const [inputValue, setInputValue] = useState("")

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div
      className={props.activeInput ? "header__input_active" : "header__input"}
    >
      {props.activeInput ? null : <SearchIcon onClick={props.toggleActiveInput} />}
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        ref={props.inputRef}
        placeholder="Search Social Network"
        onClick={props.toggleActiveInput}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};
