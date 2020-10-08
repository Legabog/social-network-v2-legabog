import React, { useState } from "react";
import "./PlacesLivedComponentSection.css";

import PlacesLivedComponentAddButton from "../PlacesLivedComponentAddButton/PlacesLivedComponentAddButton";
import PlacesLivedComponentNotNullSection from "../PlacesLivedComponentNotNullSection/PlacesLivedComponentNotNullSection";
import PlacesLivedComponentSectionActiveInputs from "../PlacesLivedComponentSectionActiveInputs/PlacesLivedComponentSectionActiveInputs";

const PlacesLivedComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"PlacesLivedComponent__section"}>
          <div className={"PlacesLivedComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <PlacesLivedComponentAddButton
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
                  <PlacesLivedComponentNotNullSection
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
            <PlacesLivedComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <PlacesLivedComponentNotNullSection
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
          <div className={"PlacesLivedComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          <PlacesLivedComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};

export default PlacesLivedComponentSection;
