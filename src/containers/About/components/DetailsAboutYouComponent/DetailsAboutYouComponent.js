import React from "react";
import "./DetailsAboutYouComponent.css";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { DetailsAboutYouComponentSection } from "../DetailsAboutYouComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";

export const DetailsAboutYouComponent = (props) => {
  return (
    <div className={"DetailsAboutYouComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"DetailsAboutYouComponent"}>
          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.AboutYou
            }
            fieldReducer={props.detailsAboutYouAddDetails}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteDetails}
            title={"Write some details about yourself"}
            titleBold={"About you"}
            editTitle={"Edit some details about yourself"}
            deleteTitle={"Delete details about yourself"}
            Icon={InfoOutlinedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Information about you"}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.NamePronunciation
            }
            fieldReducer={props.detailsAboutYouAddNamePronunciations}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteNamePronunciations}
            title={"Add a name pronunciation"}
            titleBold={"Name Pronunciation"}
            editTitle={"Add a name pronunciation"}
            deleteTitle={"Delete a name pronunciation"}
            Icon={PanoramaFishEyeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Name Pronunciation"}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.OtherNames
            }
            fieldReducer={props.detailsAboutYouAddOtherName}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteOtherName}
            title={"Add a nickname"}
            titleBold={"Other Names"}
            editTitle={"Add a nickname"}
            deleteTitle={"Delete a nickname"}
            Icon={PanoramaFishEyeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Nickname"}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.FavoriteQuotes
            }
            fieldReducer={props.detailsAboutYouAddFavoriteQuotes}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteFavoriteQuotes}
            title={"Add your favorite quotes"}
            titleBold={"Favorite Quotes"}
            editTitle={"Edit your favorite quotes"}
            deleteTitle={"Delete your favorite quotes"}
            Icon={ChatBubbleOutlineIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Favorite Quotes"}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};

export default DetailsAboutYouComponent;
