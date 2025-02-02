import React from "react";
import "./ProfileAddHobbiesBody.css";

import SearchIcon from "@material-ui/icons/Search";

import ProfileAddHobbiesBodyItem from "./ProfileAddHobbiesBodyItem/ProfileAddHobbiesBodyItem";

const ProfileAddHobbiesBody = (props) => {
  switch (props.profileAddHobbiesStateComponent) {
    case 0:
      return (
        <div className={"profile-add-hobbies-body"}>
          <div className={"profile-add-hobbies-body__title"}>
            <span>RECOMMENDED HOBBIES</span>
          </div>
          <div className={"profile-add-hobbies-body__hobbie-container"}>
            {props.profileAddHobbiesSearchListHobbies.map((e, index) => {
              
              if (index === Math.trunc( Math.random() * props.profileAddHobbiesSearchListHobbies.length)) {
                return (
                  <ProfileAddHobbiesBodyItem
                    key={index}
                    Icon={e.icon}
                    description={e.hobbie}
                    {...props}
                  />
                );
              }
              return null
            })}
          </div>

          <div className={"profile-add-hobbies-body__search-wrapper"}>
            <div className={"profile-add-hobbies-body__search"}>
              <div className={"profile-add-hobbies-body__search__icon"}>
                <SearchIcon />
              </div>

              <div className={"profile-add-hobbies-body__search__description"}>
                <span>Search for others</span>
              </div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={"profile-add-hobbies-body"}>
          <div className={"profile-add-hobbies-body__search-input-wrapper"}>
          <div className={"profile-add-hobbies-body__search-input"}>
            <SearchIcon onClick={() => {}} />
            <input
              type={"text"}
              id={"profile-add-hobbies-body__search-input"}
              placeholder={"What do you do for fun?"}
            />
          </div>
          </div>
          
        </div>
      );

    default:
      return null;
  }
};

export default ProfileAddHobbiesBody;
