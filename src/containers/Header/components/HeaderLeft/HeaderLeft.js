import React, { useState, useRef } from "react";
import "./HeaderLeft.css";

import { HeaderInput } from "pres-components/HeaderInput/";
import { HeaderLogo } from "pres-components/HeaderLogo/";
import { SearchesBlock } from "../SearchesBlock";

export const HeaderLeft = (props) => {
  const [activeInput, setActiveInput] = useState(false);
  const inputRef = useRef();

  const toggleActiveInput = () => {
    activeInput ? setActiveInput(false) : setActiveInput(true);
    setTimeout(() => {
      activeInput ? inputRef.current.blur() : inputRef.current.focus();
    }, 10);
  };

  return activeInput ? (
    <div className="header__left_active">
      <div className="header__left_active__head">
        <HeaderLogo
          activeInput={activeInput}
          toggleActiveInput={toggleActiveInput}
        />
        <HeaderInput
          inputRef={inputRef}
          activeInput={activeInput}
          toggleActiveInput={toggleActiveInput}
        />
      </div>
      <div className="header__left_active__body">
        <SearchesBlock />
      </div>
    </div>
  ) : (
    <div className="header__left">
      <HeaderLogo
        activeInput={activeInput}
        toggleActiveInput={toggleActiveInput}
      />
      <HeaderInput
        inputRef={inputRef}
        activeInput={activeInput}
        toggleActiveInput={toggleActiveInput}
      />
    </div>
  );
};
