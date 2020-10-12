import React, { useState } from "react";
import "./ProfileAddHobbiesBody.css";

import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import BookIcon from "@material-ui/icons/Book";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PublicIcon from "@material-ui/icons/Public";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import MovieIcon from "@material-ui/icons/Movie";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SearchIcon from "@material-ui/icons/Search";

import ProfileAddHobbiesBodyItem from "./ProfileAddHobbiesBodyItem/ProfileAddHobbiesBodyItem";

const ProfileAddHobbiesBody = (props) => {
  const [recommendedHobbies] = useState([
    {
      icon: HeadsetMicIcon,
      hobbie: "Listening to Music",
    },
    {
      icon: BookIcon,
      hobbie: "Reading",
    },
    {
      icon: SportsEsportsIcon,
      hobbie: "Video Games",
    },
    {
      icon: SportsSoccerIcon,
      hobbie: "Football",
    },
    {
      icon: CropOriginalIcon,
      hobbie: "Art",
    },
    {
      icon: PublicIcon,
      hobbie: "Traveling",
    },
    {
      icon: PhotoCameraIcon,
      hobbie: "Photography",
    },
    {
      icon: SportsBasketballIcon,
      hobbie: "Basketball",
    },
    {
      icon: MovieIcon,
      hobbie: "Watching Movies",
    },
    {
      icon: ListAltIcon,
      hobbie: "Writing",
    },
  ]);

  return (
    <div className={"profile-add-hobbies-body"}>
      <div className={"profile-add-hobbies-body__title"}>
        <span>RECOMMENDED HOBBIES</span>
      </div>
      <div className={"profile-add-hobbies-body__hobbie-container"}>
        {recommendedHobbies.map((e, index) => {
          return (
            <ProfileAddHobbiesBodyItem
              key={index}
              Icon={e.icon}
              description={e.hobbie}
              {...props}
            />
          );
        })}
      </div>

      <div className={"profile-add-hobbies-body__search-wrapper"}>
        <div className={"profile-add-hobbies-body__search"}>
          <div className={"profile-add-hobbies-body__search__icon"}>
            <SearchIcon />
          </div>

          <div className={"profile-add-hobbies-body__search__description"}>
            <span>Search for others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAddHobbiesBody;
