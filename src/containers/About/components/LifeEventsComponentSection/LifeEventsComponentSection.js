import React, { useState } from "react";
import "./LifeEventsComponentSection.css";

import _ from "lodash/core";

import { LifeEventsComponentAddButton } from "../LifeEventsComponentAddButton";
import { LifeEventsComponentNotNullSection } from "../LifeEventsComponentNotNullSection";
import { LifeEventsComponentSectionActiveInputs } from "../LifeEventsComponentSectionActiveInputs";

export const LifeEventsComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"LifeEventsComponentSection__section"}>
          {props.titleBold ? (
            <div className={"LifeEventsComponentSection__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <LifeEventsComponentAddButton
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
                  <LifeEventsComponentNotNullSection
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
            <LifeEventsComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <LifeEventsComponentNotNullSection
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
            <div className={"LifeEventsComponentSection__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          <LifeEventsComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};
