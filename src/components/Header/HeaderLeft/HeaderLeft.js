import React, { useState } from "react";
import HeaderInput from "../../common/HeaderInput/HeaderInput";
import HeaderLogo from "../../common/HeaderLogo/HeaderLogo";
import "./HeaderLeft.css";
import HeaderActiveCovidSection from "./HeaderActiveCovidSection/HeaderActiveCovidSection";

const HeaderLeft = (props) => {
  const [activeInput, setActiveInput] = useState(false);

  const toggleActiveInput = () => {
    activeInput ? setActiveInput(false) : setActiveInput(true);
  };

  return activeInput ? (
    <div className="header__left__active">
      <div className="header__left__active__head">
        <HeaderLogo
          activeInput={activeInput}
          toggleActiveInput={toggleActiveInput}
        />
        <HeaderInput
          activeInput={activeInput}
          toggleActiveInput={toggleActiveInput}
        />
      </div>
      <div className="header__left__active__body">
        <HeaderActiveCovidSection />
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
