import React, { useState } from "react";
import "./HeaderRight.css";

import ButtonFindFriends from "./ButtonFindFriends/ButtonFindFriends";
import ButtonCreate from "./ButtonCreate/ButtonCreate";
import ButtonMessanger from "./ButtonMessanger/ButtonMessanger";
import ButtonNotifications from "./ButtonNotifications/ButtonNotifications";
import ButtonAccount from "./ButtonAccount/ButtonAccount";

const HeaderRight = (props) => {
  const [activeButton, setActiveButton] = useState();

  const toggleActiveButton = (num) => {
    setActiveButton(num);
  };

  return (
    <div className="header__right">
      <ButtonFindFriends {...props} />

      <ButtonCreate
        {...props}
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonMessanger
        {...props}
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonNotifications
        {...props}
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonAccount
        {...props}
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />
    </div>
  );
};

export default HeaderRight;
