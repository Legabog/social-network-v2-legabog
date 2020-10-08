import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./WelcomeSearchSection.css";

const WelcomeSearchSection = (props) => {
  return (
    <div className={"WelcomeSearchSection__wrapper"}>
      <div className={"WelcomeSearchSection"}>
        <div className={"WelcomeSearchSection__descriptionMain"}>
          <span>Find People You Know</span>
        </div>
        <div className={"WelcomeSearchSection__descriptionSecondary"}>
          <span>Search by name or look for email.</span>
        </div>
        <div className={"WelcomeSearchSection__input"}>
          <SearchIcon />
          <input
            type="text"
            id="welcome-component-input"
            placeholder="Search by name or email"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSearchSection;
