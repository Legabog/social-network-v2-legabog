import React from "react";
import "./SearchesBlock.css";

import SearchesBlockHeader from "./SearchesBlockHeader/SearchesBlockHeader";
import SearchesBlockBody from "./SearchesBlockBody/SearchesBlockBody";

const SearchesBlock = (props) => {
  return (
    <div className="searches-block">
      <SearchesBlockHeader />
      <SearchesBlockBody />
    </div>
  );
};

export default SearchesBlock;
