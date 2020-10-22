import React, { useState } from "react";
import { ButtonMessangerWrapper } from "../ButtonMessangerWrapper";
import { ButtonMessangerHelp } from "../ButtonMessangerHelp";
import { ButtonMessangerMenuWrapper } from "../ButtonMessangerMenuWrapper";

export const ButtonMessanger = (props) => {
  
  // ----------Help Messanger
  const [helpMessangerOpacity, setHelpMessangerOpacity] = useState(0);
  const [helpMessangerVisibility, setHelpMessangerVisibility] = useState(
    "hidden"
  );

  const turnOnMessangerHelp = () => {
    setHelpMessangerOpacity(1);
    setHelpMessangerVisibility("visible");
  };

  const turnOffMessangerHelp = () => {
    setHelpMessangerOpacity(0);
    setHelpMessangerVisibility("hidden");
  };

  const toggleHelpMessanger = (boolean) => {
    boolean ? turnOnMessangerHelp() : turnOffMessangerHelp();
  };
  //

  return (
    <>
      <ButtonMessangerWrapper
        {...props}
        toggleHelpMessanger={toggleHelpMessanger}
      />
      <ButtonMessangerHelp
        helpMessangerOpacity={helpMessangerOpacity}
        helpMessangerVisibility={helpMessangerVisibility}
      />
      <ButtonMessangerMenuWrapper {...props} />
    </>
  );
};
