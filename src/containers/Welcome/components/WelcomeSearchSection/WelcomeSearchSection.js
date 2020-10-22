import React, { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./WelcomeSearchSection.css";

export const WelcomeSearchSection = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const blurInput = () => {
    inputRef.current.blur();
  };

  return (
    <div className={"welcome-search-section__wrapper"}>
      <div className={"welcome-search-section"}>
        <div className={"welcome-search-section__description-main"}>
          <span>Find People You Know</span>
        </div>
        <div className={"welcome-search-section__description-secondary"}>
          <span>Search by name or look for email.</span>
        </div>
        <div className={"welcome-search-section__input"}>
          <SearchIcon onClick={focusInput} />
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={changeInputHandler}
            onFocus={focusInput}
            onBlur={blurInput}
            id="welcome-component-input"
            placeholder="Search by name or email"
          />
        </div>
      </div>
    </div>
  );
};
