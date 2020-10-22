import React, { useState } from "react";
import { ButtonNotificationsHelp } from "../ButtonNotificationsHelp";
import { ButtonNotificationsMenuWrapper } from "../ButtonNotificationsMenuWrapper";
import { ButtonNotificationsWrapper } from "../ButtonNotificationsWrapper";

export const ButtonNotifications = (props) => {
  // ----------Help Notifications
  const [helpNotificationsOpacity, setHelpNotificationsOpacity] = useState(0);
  const [
    helpNotificationsVisibility,
    setHelpNotificationsVisibility,
  ] = useState("hidden");

  const turnOnNotificationsHelp = () => {
    setHelpNotificationsOpacity(1);
    setHelpNotificationsVisibility("visible");
  };

  const turnOffNotificationsHelp = () => {
    setHelpNotificationsOpacity(0);
    setHelpNotificationsVisibility("hidden");
  };

  const toggleHelpNotifications = (boolean) => {
    boolean ? turnOnNotificationsHelp() : turnOffNotificationsHelp();
  };
  //

  return (
    <>
      <ButtonNotificationsWrapper
        {...props}
        toggleHelpNotifications={toggleHelpNotifications}
      />
      <ButtonNotificationsHelp
        helpNotificationsOpacity={helpNotificationsOpacity}
        helpNotificationsVisibility={helpNotificationsVisibility}
      />

      <ButtonNotificationsMenuWrapper {...props} />
    </>
  );
};

