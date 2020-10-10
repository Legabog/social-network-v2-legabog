import React, { useState } from "react";
import "./HeaderLeft.css";
import HeaderInput from "../../common/HeaderInput/HeaderInput";
import HeaderLogo from "../../common/HeaderLogo/HeaderLogo";
import SearchesBlock from "./SearchesBlock/SearchesBlock";

const HeaderLeft = (props) => {
  const [activeInput, setActiveInput] = useState(false);

  const toggleActiveInput = () => {
    activeInput ? setActiveInput(false) : setActiveInput(true);
  };

  return activeInput ? (
    <div className="header__left_active">
      <div className="header__left_active__head">
        <HeaderLogo
          activeInput={activeInput}
          toggleActiveInput={toggleActiveInput}
        />
        <HeaderInput
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
        activeInput={activeInput}
        toggleActiveInput={toggleActiveInput}
      />
    </div>
  );
};

export default HeaderLeft;
