import React, { useState } from "react";
import { ButtonCreateWrapper } from "../ButtonCreateWrapper";
import { ButtonCreateHelp } from "../ButtonCreateHelp";
import { ButtonCreateMenuWrapper } from "../ButtonCreateMenuWrapper";

export const ButtonCreate = (props) => {
  // ----------Help Create
  const [helpCreateOpacity, setHelpCreateOpacity] = useState(0);
  const [helpCreateVisibility, setHelpCreateVisibility] = useState("hidden");

  const turnOnCreateHelp = () => {
    setHelpCreateOpacity(1);
    setHelpCreateVisibility("visible");
  };

  const turnOffCreateHelp = () => {
    setHelpCreateOpacity(0);
    setHelpCreateVisibility("hidden");
  };

  const toggleHelpCreate = (boolean) => {
    boolean ? turnOnCreateHelp() : turnOffCreateHelp();
  };
  //

  

  return (
    <>
      <ButtonCreateWrapper {...props} toggleHelpCreate={toggleHelpCreate} />
      <ButtonCreateHelp
        helpCreateOpacity={helpCreateOpacity}
        helpCreateVisibility={helpCreateVisibility}
      />
      <ButtonCreateMenuWrapper {...props}/>
    </>
  );
};

