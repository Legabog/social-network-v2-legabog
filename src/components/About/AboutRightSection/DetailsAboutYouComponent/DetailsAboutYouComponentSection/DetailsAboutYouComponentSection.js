import React, { useState } from "react";
import DetailsAboutYouComponentAddButton from "../DetailsAboutYouComponentAddButton/DetailsAboutYouComponentAddButton";
import DetailsAboutYouComponentNotNullSection from "../DetailsAboutYouComponentNotNullSection/DetailsAboutYouComponentNotNullSection";
import DetailsAboutYouComponentSectionActiveInputs from "../DetailsAboutYouComponentSectionActiveInputs/DetailsAboutYouComponentSectionActiveInputs";
import "./DetailsAboutYouComponentSection.css";

const DetailsAboutYouComponentSection = (props) => {

  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"DetailsAboutYouComponentSection__section"}>
          {props.titleBold ? (
            <div className={"DetailsAboutYouComponentSection__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <DetailsAboutYouComponentAddButton
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
                  <DetailsAboutYouComponentNotNullSection
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
            <DetailsAboutYouComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <DetailsAboutYouComponentNotNullSection
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
            <div className={"DetailsAboutYouComponentSection__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          <DetailsAboutYouComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};

export default DetailsAboutYouComponentSection;
