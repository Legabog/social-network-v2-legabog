import React from "react"
import AddIcon from "@material-ui/icons/Add";
import "./ButtonCreateWrapper.css"

const ButtonCreateWrapper = (props) => {
    return (
        <div className={"button__create__wrapper"}>
        <div
          id="button__create"
          className={
            props.activeButton === 0
              ? "button__create__active"
              : "button__create"
          }
          onClick={() => {
            props.activeButton === 0
              ? props.toggleActiveButton()
              : props.toggleActiveButton(0);
            props.toggleHelpCreate(false);
          }}
          onMouseEnter={() => {
            props.toggleHelpCreate(true);
          }}
          onMouseLeave={() => {
            props.toggleHelpCreate(false);
          }}
        >
          <AddIcon />
        </div>
      </div>
    )
}

export default ButtonCreateWrapper