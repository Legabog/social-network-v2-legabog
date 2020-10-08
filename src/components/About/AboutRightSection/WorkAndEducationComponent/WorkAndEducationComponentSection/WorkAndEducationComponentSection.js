import React, { useState } from "react";
import "./WorkAndEducationComponentSection.css";

import WorkAndEducationComponentAddButton from "../WorkAndEducationComponentAddButton/WorkAndEducationComponentAddButton";
import WorkAndEducationComponentNotNullSection from "../WorkAndEducationComponentNotNullSection/WorkAndEducationComponentNotNullSection";
import WorkAndEducationComponentSectionActiveInputs from "../WorkAndEducationComponentSectionActiveInputs/WorkAndEducationComponentSectionActiveInputs";

const WorkAndEducationComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"WorkAndEducationComponent__section"}>
          <div className={"WorkAndEducationComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <WorkAndEducationComponentAddButton
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
                  <WorkAndEducationComponentNotNullSection
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
            <WorkAndEducationComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <WorkAndEducationComponentNotNullSection
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
          <div className={"WorkAndEducationComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          <WorkAndEducationComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};

export default WorkAndEducationComponentSection;
