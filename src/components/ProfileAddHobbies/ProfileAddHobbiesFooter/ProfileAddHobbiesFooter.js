import React from "react";
import "./ProfileAddHobbiesFooter.css";

import PublicIcon from "@material-ui/icons/Public";

const ProfileAddHobbiesFooter = (props) => {
  return (
    <div className={"profile-add-hobbies-footer"}>
      <div className={"profile-add-hobbies-footer__controll-panel"}>
        <div className={"profile-add-hobbies-footer__public"}>
          <div className={"profile-add-hobbies-footer__public-icon"}>
            <PublicIcon />
          </div>
          <div className={"profile-add-hobbies-footer__public-description"}>
            <span>Hobbies are Public</span>
          </div>
        </div>
        {props.tempHobbies.length === 0 ? null : (
          <div className={"profile-add-hobbies-footer__buttons"}>
            <div
              className={"profile-add-hobbies-footer__cancel-button"}
              onClick={() => {
                props.toggleProfileAddHobbies(
                  props.profileAddHobbiesVisibility,
                  props.profileAddHobbiesOpacity
                );
                props.setTempHobbies([])
              }}
            >
              <span>Cancel</span>
            </div>

            <div
              className={"profile-add-hobbies-footer__update-button"}
              onClick={() => {
                props.toggleProfileAddHobbies(
                  props.profileAddHobbiesVisibility,
                  props.profileAddHobbiesOpacity
                );
                props.setTempHobbies([])
              }}
            >
              <span>Save</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAddHobbiesFooter;
