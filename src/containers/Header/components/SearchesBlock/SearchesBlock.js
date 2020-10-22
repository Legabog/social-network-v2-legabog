import React from "react";
import "./SearchesBlock.css";

import { SearchesBlockHeader } from "../SearchesBlockHeader";
import { SearchesBlockBody } from "../SearchesBlockBody";

export const SearchesBlock = (props) => {
  return (
    <div className="searches-block">
      <SearchesBlockHeader />
      <SearchesBlockBody />
    </div>
  );
};

