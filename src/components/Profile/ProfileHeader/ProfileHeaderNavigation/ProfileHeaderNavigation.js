import React from "react";
import "./ProfileHeaderNavigation.css";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfileHeaderNavigationButton from "./ProfileHeaderNavigationButton/ProfileHeaderNavigationButton";
import ProfileHeaderNavigationItem from "./ProfileHeaderNavigationItem/ProfileHeaderNavigationItem";
import ProfileHeaderNavigationItemSpecial from "./ProfileHeaderNavigationItemSpecial/ProfileHeaderNavigationItemSpecial";

const ProfileHeaderNavigation = (props) => {
  return (
    <div className={"profile__header__navigation__wrap"}>
      <div className={"profile__header__navigation"}>
        <div className={"profile__header__navigationBar"}>
          <ProfileHeaderNavigationItem
            title={"Timeline"}
            NavLinks={["/profile"]}
          />
          <ProfileHeaderNavigationItem
            title={"About"}
            NavLinks={[
              "/profile/about",
              "/profile/about_overview",
              "/profile/about_work_and_education",
              "/profile/about_places",
              "/profile/about_contact_and_basic_info",
              "/profile/about_family_and_relationships",
              "/profile/about_details",
              "/profile/about_life_events",
            ]}
          />

          <ProfileHeaderNavigationItem
            title={"Friends"}
            NavLinks={["/profile/friends"]}
          />
          <ProfileHeaderNavigationItem
            title={"Photos"}
            NavLinks={["/profile/photos"]}
          />
          <ProfileHeaderNavigationItem
            title={"Archive"}
            NavLinks={["/profile/archive"]}
          />
          <ProfileHeaderNavigationItem
            title={"Videos"}
            NavLinks={["/profile/videos"]}
          />
          <ProfileHeaderNavigationItemSpecial
            title={"More"}
            NavLinks={["/profile/more"]}
            icon={ArrowDropDownIcon}
          />
        </div>

        <div className={"profile__header__buttonPanel"}>
          <ProfileHeaderNavigationButton
            title={"Edit profile"}
            icon={CreateIcon}
          />
          <ProfileHeaderNavigationButton icon={VisibilityIcon} />
          <ProfileHeaderNavigationButton icon={SearchIcon} />
          <ProfileHeaderNavigationButton icon={MoreHorizIcon} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderNavigation;
