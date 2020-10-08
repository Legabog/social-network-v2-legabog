import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonMessangerMenuWrapper.css";
import ButtonMessangerLink from "./ButtonMessangerLink/ButtonMessangerLink";
import ButtonMessangerNewRoom from "./ButtonMessangerNewRoom/ButtonMessangerNewRoom";
import ButtonMessangerNewMessage from "./ButtonMessangerNewMessage/ButtonMessangerNewMessage";
import ButtonMessangerOptions from "./ButtonMessangerOptions/ButtonMessangerOptions";
import MenuMessangerInput from "./MenuMessangerInput/MenuMessangerInput";

const ButtonMessangerMenuWrapper = (props) => {
  const [ButtonMessangerMenuInput, setButtonMessangerMenuInput] = useState(
    false
  );

  const toggleButtonMessangerMenuInput = (boolean) => {
    boolean
      ? setButtonMessangerMenuInput(true)
      : setButtonMessangerMenuInput(false);
  };

  return (
    <div
      className={"button__messanger__menu__wrapper"}
      style={
        props.activeButton === 1
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__messanger__menu__header">
        <h2>Messanger</h2>
        <div className="menu__header__panel">
          <ButtonMessangerLink />
          <ButtonMessangerNewRoom />
          <ButtonMessangerNewMessage />
          <ButtonMessangerOptions />
        </div>
      </div>
      <div className="button__create__menu__body">
        <MenuMessangerInput
          ButtonMessangerMenuInput={ButtonMessangerMenuInput}
          toggleButtonMessangerMenuInput={toggleButtonMessangerMenuInput}
        />

        <div className="button__create__menu__searches">
          {ButtonMessangerMenuInput ? (
            <>
              <span>No Found</span>
              <div className="button__create__menu__searches__description">
                <span>
                  We couldn't find any matches for "." Try checking for typos or
                  using complete words.
                </span>
              </div>
            </>
          ) : (
            <>
              <span>No messages found.</span>
              <hr />
              <NavLink to={"/messages"}>See All in Messanger</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonMessangerMenuWrapper;
