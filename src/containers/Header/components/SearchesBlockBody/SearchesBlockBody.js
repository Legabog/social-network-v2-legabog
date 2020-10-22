import React from "react";
import "./SearchesBlockBody.css";

import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { SearchesBlockBodyItem } from "../SearchesBlockBodyItem/";

export const SearchesBlockBody = (props) => {
  return (
    <div className="searches-block__body">
      <div className="searches-block__body__header">
        <h4>Recent Searches</h4>
        <span>Edit</span>
      </div>
      <div className="searches-block__body__block">
        <SearchesBlockBodyItem
          title={"games"}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
        <SearchesBlockBodyItem
          title={"video streams"}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
        <SearchesBlockBodyItem
          title={"coronovirus updates"}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
      </div>
    </div>
  );
};

