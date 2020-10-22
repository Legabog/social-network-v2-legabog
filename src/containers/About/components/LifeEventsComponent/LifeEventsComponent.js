import React from "react";
import "./LifeEventsComponent.css";

import EventBusyIcon from "@material-ui/icons/EventBusy";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { LifeEventsComponentSection } from "../LifeEventsComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";

export const LifeEventsComponent = (props) => {
  return (
    <div className={"LifeEventsComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"LifeEventsComponent"}>
          <LifeEventsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.LifeEvents
            }
            fieldReducer={props.lifeEventsAddLifeEvent}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.lifeEventsDeleteLifeEvent}
            title={"Add your life event"}
            titleBold={"Life Events"}
            editTitle={"Add your life event"}
            deleteTitle={"Delete your life event"}
            Icon={EventAvailableIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"Life event"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          {props.fullUserInfoAbout === null ? null : props.fullUserInfoAbout
              .LifeEvents.length === 0 ? (
            <div className={"LifeEventsComponent__section__description"}>
              <EventBusyIcon />
              <span>No life events to show</span>
            </div>
          ) : null}

          <hr />
        </div>
      )}
    </div>
  );
};

