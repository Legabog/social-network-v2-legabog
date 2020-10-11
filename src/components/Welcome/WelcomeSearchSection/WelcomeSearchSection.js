import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./WelcomeSearchSection.css";

const WelcomeSearchSection = (props) => {

  const focusComponent = (id) => {
    document.getElementById(id).focus()
  }

  return (
    <div className={"welcome-search-section__wrapper"}>
      <div className={"welcome-search-section"}>
        <div className={"welcome-search-section__description-main"}>
          <span>Find People You Know</span>
        </div>
        <div className={"welcome-search-section__description-secondary"}>
          <span>Search by name or look for email.</span>
        </div>
        <div className={"welcome-search-section__input"}>
          <SearchIcon onClick={() => {
            focusComponent("welcome-component-input")
          }}/>
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
