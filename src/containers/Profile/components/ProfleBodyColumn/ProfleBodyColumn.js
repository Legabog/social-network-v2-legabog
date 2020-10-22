import React from "react";
import "./ProfleBodyColumn.css";

import { ProfileBodyColumnComponent } from "../ProfileBodyColumnComponent";

export const ProfleBodyColumn = (props) => {
  switch (props.stateColumn) {
    case 0:
      return (
        <div
          className={"profile__body__column"}
          style={{ flexGrow: `${props.flexGrow}` }}
        >
          <ProfileBodyColumnComponent stateComponent={0} {...props} />
          <ProfileBodyColumnComponent stateComponent={1} {...props} />
          <ProfileBodyColumnComponent stateComponent={2} {...props} />
        </div>
      );

    case 1:
      return (
        <div
          className={"profile__body__column"}
          style={{ flexGrow: `${props.flexGrow}` }}
        >
          {/* <ProfileBodyColumnComponent stateComponent={0} {...props} />
          <ProfileBodyColumnComponent stateComponent={1} {...props} />
          <ProfileBodyColumnComponent stateComponent={2} {...props} /> */}
        </div>
      );
    default:
      return null;
  }
};

