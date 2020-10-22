import React from "react";
import "./ProfileAddHobbiesHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import addHobbies from "assets/images/addHobies.png";

export const ProfileAddHobbiesHeader = (props) => {
  switch (props.profileAddHobbiesStateComponent) {
    case 0:
      return (
        <div className={"profile-add-hobbies-header-wrapper"}>
          <div className={"profile-add-hobbies-header"}>
            <div className={"profile-add-hobbies-header__img"}>
              <img src={addHobbies} alt="description" />
            </div>

            <div className={"profile-add-hobbies-header__close-icon"}>
              <IconButton
                onClick={() => {
                  props.setTempHobbies([]);
                  props.toggleProfileAddHobbies(
                    props.profileAddHobbiesVisibility,
                    props.profileAddHobbiesOpacity
                  );
                }}
              >
                <CloseOutlinedIcon />
              </IconButton>
            </div>
          </div>

          <div className={"profile-add-hobbies-header__title"}>
            <div className={"profile-add-hobbies-header__title-main"}>
              <span>Add Hobbies</span>
            </div>
            <div className={"profile-add-hobbies-header__title-secondary"}>
              <span>
                What do you love to do? Choose from the popular hobbies below or
                add others.
              </span>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={"profile-add-hobbies-header-wrapper"}>
          <div className={"profile-add-hobbies-header__close-icon_state-2"}>
            <IconButton
              onClick={() => {
                props.setTempHobbies([]);
                props.toggleProfileAddHobbies(
                  props.profileAddHobbiesVisibility,
                  props.profileAddHobbiesOpacity
                );
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </div>

          <div className={"profile-add-hobbies-header__title"}>
            <div className={"profile-add-hobbies-header__title-main"}>
              <span>Hobbies</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

