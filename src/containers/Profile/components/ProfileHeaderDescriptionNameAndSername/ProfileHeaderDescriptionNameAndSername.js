import React from "react";
import "./ProfileHeaderDescriptionNameAndSername.css";

export const ProfileHeaderNameAndSername = (props) => {
  return (
    <div className={"profile__header__description__nameAndSername"}>
      <h1>
        {props.user === null
          ? null
          : `${props.user.Name} ${props.user.Sername}`}
      </h1>
    </div>
  );
};

