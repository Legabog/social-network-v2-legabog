import React, { useState } from "react";
import "./FamilyAndRelationshipsComponentNotNullSection.css";

import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

export const FamilyAndRelationshipsComponentNotNullSection = (props) => {
  
  const [editWindowVisibility, setEditWindowVisibility] = useState("hidden");
  const [editWindowOpacity, setEditWindowOpacity] = useState(0);

  const toggleEditWindow = (boolean) => {
    boolean
      ? setEditWindowVisibility("visible")
      : setEditWindowVisibility("hidden");

    boolean ? setEditWindowOpacity(1) : setEditWindowOpacity(0);
  };

  return (
    <>
      <div className={"FamilyAndRelationshipsComponentNotNullSection"}>
        <props.Icon />
        <div
          className={"FamilyAndRelationshipsComponentNotNullSection__description"}
        >
          <span>{props.mainTitle}</span>
        </div>
        <div
          className={"FamilyAndRelationshipsComponentNotNullSection__publicIcon"}
        >
          <PublicIcon />
        </div>
        <div className={"FamilyAndRelationshipsComponentNotNullSection__edit"}>
          <MoreHorizIcon
            onClick={() => {
              editWindowVisibility === "hidden"
                ? toggleEditWindow(true)
                : toggleEditWindow(false);
            }}
          />
        </div>
      </div>

      <div
        className={"FamilyAndRelationshipsComponentNotNullSection__editWindow"}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={
            "FamilyAndRelationshipsComponentNotNullSection__editWindowSection"
          }
          onClick={() => {
            props.toggleActiveComponent(true);
            toggleEditWindow(false);
          }}
        >
          <AddIcon />
          <span>{props.editTitle}</span>
        </div>

        <div
          className={
            "FamilyAndRelationshipsComponentNotNullSection__editWindowSection"
          }
          onClick={() => {
            props.addReducer(
              [props.index],
              props.deleteReducer,
              props.activeAccountEmail,
              props.toggleActiveComponent(false)
            );
            toggleEditWindow(false);
          }}
        >
          <DeleteOutlineOutlinedIcon />
          <span>{props.deleteTitle}</span>
        </div>
      </div>
    </>
  );
};

