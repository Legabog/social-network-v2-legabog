import React from "react";
import { useLocation } from "react-router-dom";
import "./AboutLeftSectionNavBar.css";

import { AboutLeftSectionNavLink } from "../AboutLeftSectionNavLink";

export const AboutLeftSectionNavBar = (orops) => {
  let location = useLocation();

  return (
    <div className={"AboutLeftSectionNavBar"}>
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_overview" ||
          location.pathname === "/profile/about"
            ? true
            : false
        }
        title={"Overview"}
        navLink={"/profile/about_overview"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_work_and_education"
            ? true
            : false
        }
        title={"Work and Education"}
        navLink={"/profile/about_work_and_education"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_places" ? true : false
        }
        title={"Places Lived"}
        navLink={"/profile/about_places"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_contact_and_basic_info"
            ? true
            : false
        }
        title={"Contact and Basic Info"}
        navLink={"/profile/about_contact_and_basic_info"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_family_and_relationships"
            ? true
            : false
        }
        title={"Family and Relationships"}
        navLink={"/profile/about_family_and_relationships"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_details" ? true : false
        }
        title={"Details About You"}
        navLink={"/profile/about_details"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          location.pathname === "/profile/about_life_events" ? true : false
        }
        title={"Life Events"}
        navLink={"/profile/about_life_events"}
      />
    </div>
  );
};

