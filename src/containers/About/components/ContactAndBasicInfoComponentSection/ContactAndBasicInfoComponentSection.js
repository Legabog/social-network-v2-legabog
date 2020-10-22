import React, { useState } from "react";
import "./ContactAndBasicInfoComponentSection.css";

import _ from "lodash/core";

import { ContactAndBasicInfoComponentAddButton } from "../ContactAndBasicInfoComponentAddButton";
import { ContactAndBasicInfoComponentNotNullSection } from "../ContactAndBasicInfoComponentNotNullSection";
import { ContactAndBasicInfoComponentSectionActiveInputs } from "../ContactAndBasicInfoComponentSectionActiveInputs";

export const ContactAndBasicInfoComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"ContactAndBasicInfoComponent__section"}>
          {props.titleBold ? (
            <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <ContactAndBasicInfoComponentAddButton
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
                  <ContactAndBasicInfoComponentNotNullSection
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
            <ContactAndBasicInfoComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
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
            <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          <ContactAndBasicInfoComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};
