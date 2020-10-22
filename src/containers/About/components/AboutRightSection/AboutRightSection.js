import React from "react";
import { useLocation } from "react-router-dom";
import "./AboutRightSection.css";

import { ContactAndBasicInfoComponent } from "../ContactAndBasicInfoComponent";
import { DetailsAboutYouComponent } from "../DetailsAboutYouComponent";
import { FamilyAndRelationshipsComponent } from "../FamilyAndRelationshipsComponent";
import { LifeEventsComponent } from "../LifeEventsComponent";
import { OverviewComponent } from "../OverviewComponent";
import { PlacesLivedComponent } from "../PlacesLivedComponent";
import { WorkAndEducationComponent } from "../WorkAndEducationComponent";

export const AboutRightSection = (props) => {
  let location = useLocation();

  return (
    <div className={"AboutRightSection"}>
      {location.pathname === "/profile/about_overview" ||
      location.pathname === "/profile/about" ? (
        <OverviewComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_work_and_education" ? (
        <WorkAndEducationComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_places" ? (
        <PlacesLivedComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_contact_and_basic_info" ? (
        <ContactAndBasicInfoComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_family_and_relationships" ? (
        <FamilyAndRelationshipsComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_details" ? (
        <DetailsAboutYouComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_life_events" ? (
        <LifeEventsComponent {...props} />
      ) : null}
    </div>
  );
};

