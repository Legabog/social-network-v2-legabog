import React from "react";
import "./SearchesBlockBodyItem.css";

import { IconButton } from "@material-ui/core";

export const SearchesBlockBodyItem = (props) => {
  return (
    <div className="block__item">
      <div className="block__item__border">
        <div className="block__item__border__icon">
          <props.Icon />
        </div>
        <span>{props.title}</span>
        <IconButton>
          <props.closeIcon />
        </IconButton>
      </div>
    </div>
  );
};

