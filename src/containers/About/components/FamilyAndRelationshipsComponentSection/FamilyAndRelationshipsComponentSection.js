import React, { useState } from "react";
import "./FamilyAndRelationshipsComponentSection.css";

import _ from "lodash/core";

import { FamilyAndRelationshipsComponentAddButton } from "../FamilyAndRelationshipsComponentAddButton";
import { FamilyAndRelationshipsComponentNotNullSection } from "../FamilyAndRelationshipsComponentNotNullSection";
import { FamilyAndRelationshipsComponentSectionActiveInputs } from "../FamilyAndRelationshipsComponentSectionActiveInputs";

export const FamilyAndRelationshipsComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"FamilyAndRelationshipsComponent__section"}>
          {props.titleBold ? (
            <div className={"FamilyAndRelationshipsComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <FamilyAndRelationshipsComponentAddButton
                {...props}
                toggleActiveComponent={toggleActiveComponent}
              />
            ) : (
              props.componentArguments.map((e, index) => {
                let resultTitle = "";

                for (const [key, value] of Object.entries(e)) {
                  resultTitle += `${key}: «${value}». `;
                }

                return (
                  <FamilyAndRelationshipsComponentNotNullSection
                    {...props}
                    index={index}
                    key={_.uniqueId(e)}
                    toggleActiveComponent={toggleActiveComponent}
                    mainTitle={resultTitle}
                  />
                );
              })
            )
          ) : props.componentArguments === "" ? (
            <FamilyAndRelationshipsComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <FamilyAndRelationshipsComponentNotNullSection
              mainTitle={props.componentArguments}
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          )}
        </div>
      );

    case true:
      return (
        <>
          {props.titleBold ? (
            <div className={"FamilyAndRelationshipsComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          <FamilyAndRelationshipsComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};
