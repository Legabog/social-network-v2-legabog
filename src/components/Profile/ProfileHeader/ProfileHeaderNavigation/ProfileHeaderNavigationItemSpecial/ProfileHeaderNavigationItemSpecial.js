import React from "react";
import "./ProfileHeaderNavigationItemSpecial.css";

const ProfileHeaderNavigationItemSpecial = (props) => {
  // const [listOfNavlinks, setListsOfNavlinks] = useState(0);

  // const toggleListOfNavlinks = (value) => {
  //   setListsOfNavlinks();
  // };

  return (
    <div className={"profile__header__navigation__special__wrapper"}>
      <div className={"profile__header__navigation__special__item"}>
        <span>{props.title}</span>
        <div className={"profile__header__navigation__special__itemIcon"}>
          {props.icon && <props.icon />}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderNavigationItemSpecial;
