import React from "react";
import "./SearchesBlockHeader.css";

import SearchIcon from "@material-ui/icons/Search";

export const SearchesBlockHeader = (props) => {
  return (
    <>
      <div className="searches-block__header">
        <h4>Updates on COVID-19</h4>
      </div>
      <div className="searches-block__border">
        <div className="searches-block__border__icon">
          <SearchIcon />
        </div>
        <span>coronavirus updates</span>
      </div>
    </>
  );
};

