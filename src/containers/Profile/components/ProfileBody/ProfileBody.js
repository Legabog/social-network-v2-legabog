import React from "react";
import "./ProfileBody.css";

import { ProfleBodyColumn } from "../ProfleBodyColumn";

export const ProfileBody = (props) => {
  return (
    <div className={"profile__body__wrapper"}>
      <div className={"profile__body"}>
        <ProfleBodyColumn stateColumn={0} flexGrow = {0}  {...props} />
        <ProfleBodyColumn stateColumn={1} flexGrow = {2}  {...props} />
      </div>
    </div>
  );
};

