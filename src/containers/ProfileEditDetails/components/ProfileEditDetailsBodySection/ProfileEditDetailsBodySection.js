import React from "react";
import "./ProfileEditDetailsBodySection.css";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import SettingsIcon from "@material-ui/icons/Settings";

import _ from "lodash/core";

import { ProfileEditDetailsAddButton } from "../ProfileEditDetailsAddButton";
import { ProfileEditDetailsBodyNotNullSection } from "../ProfileEditDetailsBodyNotNullSection";

export const ProfileEditDetailsBodySection = (props) => {
  return (
    <div className={"profile-edit-details-body__section"}>
      <div className={"profile-edit-details-body__section-title"}>
        <span>{props.titleBold}</span>
      </div>

      {props.fullUserInfoAbout === null ? null : Array.isArray(
          props.componentArguments
        ) ? (
        props.componentArguments.length === 0 ? (
          <ProfileEditDetailsAddButton addIcon={ControlPointIcon} {...props} />
        ) : (
          props.componentArguments.map((e, index) => {
            let resultTitle = "";

            for (const [key, value] of Object.entries(e)) {
              resultTitle += `${key}: «${value}» `;
            }

            return (
              <React.Fragment key={_.uniqueId(e)}>
                <ProfileEditDetailsBodyNotNullSection
                  {...props}
                  index={index}
                  mainTitle={resultTitle}
                />
                <ProfileEditDetailsAddButton
                  addIcon={ControlPointIcon}
                  {...props}
                />
              </React.Fragment>
            );
          })
        )
      ) : props.componentArguments === "" ? (
        <ProfileEditDetailsAddButton addIcon={SettingsIcon} {...props} />
      ) : (
        <>
          <ProfileEditDetailsBodyNotNullSection
            {...props}
            mainTitle={props.componentArguments}
          />
          <ProfileEditDetailsAddButton addIcon={SettingsIcon} {...props} />
        </>
      )}
    </div>
  );
};
