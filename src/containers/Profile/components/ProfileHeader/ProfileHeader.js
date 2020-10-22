import React, { useState } from "react";
import "./ProfileHeader.css";

import { ProfileHeaderNavigation } from "../ProfileHeaderNavigation";
import { ProfileHeaderAvatarBackground } from "../ProfileHeaderAvatarBackground";
import { ProfileHeaderAvatar } from "../ProfileHeaderAvatar";
import { ProfileHeaderButtonAddBackground } from "../ProfileHeaderButtonAddBackground";
import { ProfileHeaderAvatarWindow } from "../ProfileHeaderAvatarWindow";
import { ProfileHeaderDescription } from "../ProfileHeaderDescription";
import { ProfileHeaderAvatarBackgroundWindow } from "../ProfileHeaderAvatarBackgroundWindow";
import { ProfileHeaderConfirmChangeAvatarBackground } from "../ProfileHeaderConfirmChangeAvatarBackground";
import { ProfileHeaderConfirmRemoveBackground } from "../ProfileHeaderConfirmRemoveBackground";

export const ProfileHeader = (props) => {
  // Window Avatar

  const [windowAvatarVisibility, setWindowAvatarVisibility] = useState(
    "hidden"
  );

  const [windowAvatarOpacity, setWindowAvatarOpacity] = useState(0);

  const toggleWindowAvatar = () => {
    windowAvatarVisibility === "hidden"
      ? setWindowAvatarVisibility("visible")
      : setWindowAvatarVisibility("hidden");

    windowAvatarOpacity === 0
      ? setWindowAvatarOpacity(1)
      : setWindowAvatarOpacity(0);
  };

  //

  // Window Background

  const [
    windowAvatarBackgroundVisibility,
    setWindowAvatarBackgroundVisibility,
  ] = useState("hidden");

  const [
    windowAvatarBackgroundOpacity,
    setWindowAvatarBackgroundOpacity,
  ] = useState(0);

  const toggleWindowAvatarBackground = () => {
    windowAvatarBackgroundVisibility === "hidden"
      ? setWindowAvatarBackgroundVisibility("visible")
      : setWindowAvatarBackgroundVisibility("hidden");

    windowAvatarBackgroundOpacity === 0
      ? setWindowAvatarBackgroundOpacity(1)
      : setWindowAvatarBackgroundOpacity(0);
  };

  //

  // Confirm Remove Background

  const [confirmRemoveVisibility, setConfirmRemoveVisibility] = useState(
    "hidden"
  );
  const [confirmRemoveOpacity, setConfirmRemoveOpacity] = useState("hidden");

  const toggleConfirmRemove = (boolean) => {
    boolean
      ? setConfirmRemoveVisibility("visible")
      : setConfirmRemoveVisibility("hidden");

    boolean ? setConfirmRemoveOpacity(1) : setConfirmRemoveOpacity(0);
  };

  //

  return (
    <div className={"profile__header"}>
      <div className={"profile__header__pos"}>
        <ProfileHeaderAvatarBackground
          {...props}
        />
        <ProfileHeaderAvatar
          {...props}
          toggleWindowAvatar={toggleWindowAvatar}
        />
        <ProfileHeaderButtonAddBackground
          toggleWindowAvatarBackground={toggleWindowAvatarBackground}
        />
        <ProfileHeaderAvatarBackgroundWindow
          {...props}
          toggleConfirmRemove={toggleConfirmRemove}
          toggleWindowAvatarBackground={toggleWindowAvatarBackground}
          windowAvatarBackgroundVisibility={windowAvatarBackgroundVisibility}
          windowAvatarBackgroundOpacity={windowAvatarBackgroundOpacity}
        />
        <ProfileHeaderConfirmChangeAvatarBackground
          {...props}
        />

        <ProfileHeaderConfirmRemoveBackground
          {...props}
          toggleConfirmRemove={toggleConfirmRemove}
          confirmRemoveVisibility={confirmRemoveVisibility}
          confirmRemoveOpacity={confirmRemoveOpacity}
        />
      </div>

      <ProfileHeaderAvatarWindow
        {...props}
        toggleWindowAvatar={toggleWindowAvatar}
        windowAvatarVisibility={windowAvatarVisibility}
        windowAvatarOpacity={windowAvatarOpacity}
      />

      <ProfileHeaderDescription {...props} />

      <div className={"profile__header__hr"}>
        <hr />
        <div className={"profile__header__lastBlock"}></div>
      </div>

      <ProfileHeaderNavigation {...props}/>
    </div>
  );
};

