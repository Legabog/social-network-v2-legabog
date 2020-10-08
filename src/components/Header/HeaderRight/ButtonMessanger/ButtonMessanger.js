import React, { useState } from "react";
import ButtonMessangerWrapper from "./ButtonMessangerWrapper/ButtonMessangerWrapper";
import ButtonMessangerHelp from "./ButtonMessangerHelp/ButtonMessangerHelp";
import ButtonMessangerMenuWrapper from "./ButtonMessangerMenuWrapper/ButtonMessangerMenuWrapper";

const ButtonMessanger = (props) => {
  
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

export default ButtonMessanger;
