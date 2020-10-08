import React, { useState } from "react";

import OverviewComponentAddButton from "../OverviewComponentAddButton/OverviewComponentAddButton";
import OverviewComponentNotNullSection from "../OverviewComponentNotNullSection/OverviewComponentNotNullSection";
import OverviewComponentSectionActiveInputs from "../OverviewComponentSectionActiveInputs/OverviewComponentSectionActiveInputs";
import "./OverviewComponentSection.css";

const OverviewComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"OverviewComponent__section"}>
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <OverviewComponentAddButton
                {...props}
                toggleActiveComponent={toggleActiveComponent}
              />
            ) : (
              props.componentArguments.map((e, index) => {
                let resultTitle = "";

                for (const [key, value] of Object.entries(e)) {
                  resultTitle += `${key}: «${value}» `;
                }

                return (
                  <OverviewComponentNotNullSection
                    {...props}
                    index={index}
                    key={index}
                    toggleActiveComponent={toggleActiveComponent}
                    mainTitle={resultTitle}
                  />
                );
              })
            )
          ) : props.componentArguments === "" ? (
            <OverviewComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <OverviewComponentNotNullSection
              mainTitle={props.componentArguments}
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          )}
        </div>
      );

    case true:
      return (
        <OverviewComponentSectionActiveInputs
          {...props}
          toggleActiveComponent={toggleActiveComponent}
        />
      );

    default:
      return null;
  }
};

export default OverviewComponentSection;
