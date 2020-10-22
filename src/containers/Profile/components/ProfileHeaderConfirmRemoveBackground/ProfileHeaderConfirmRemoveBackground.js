import React from "react";
import "./ProfileHeaderConfirmRemoveBackground.css";

import { ProfileHeaderConfirmRemoveBackgroundBody } from "../ProfileHeaderConfirmRemoveBackgroundBody";
import { ProfileHeaderConfirmRemoveBackgroundHeader } from "../ProfileHeaderConfirmRemoveBackgroundHeader";
import { BackDrop } from "pres-components/BackDrop";

export const ProfileHeaderConfirmRemoveBackground = (props) => {
  return (
    <div
      className={"profileHeaderConfirmRemoveBackground__wrapper"}
      style={{
        visibility: `${props.confirmRemoveVisibility}`,
        opacity: `${props.confirmRemoveOpacity}`,
      }}
    >
      <div className={"profileHeaderConfirmRemoveBackground"}>
        <ProfileHeaderConfirmRemoveBackgroundHeader
          toggleConfirmRemove={props.toggleConfirmRemove}
          {...props}
        />
        <ProfileHeaderConfirmRemoveBackgroundBody
          toggleConfirmRemove={props.toggleConfirmRemove}
          {...props}
        />
      </div>
      <BackDrop
        onClick={() => {
          props.toggleConfirmRemove(false);
        }}
      />
    </div>
  );
};

