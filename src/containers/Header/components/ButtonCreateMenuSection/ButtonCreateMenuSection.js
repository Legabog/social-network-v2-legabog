import React from "react";
import "./ButtonCreateMenuSection.css";

export const ButtonCreateMenuSection = (props) => {
  return (
    <div
      className="button-create-menu__section"
      onClick={() => {
        props.toggleActiveButton();
      }}
    >
      <div className="button-create-menu__icon">
        <props.Icon />
      </div>

      <div className="button-create-menu__description">
        <div className="button-create-menu__category">
          <span>{props.category}</span>
        </div>
        <div className="button-create-menu__help">
          <span>{props.help}</span>
        </div>
      </div>
    </div>
  );
};
