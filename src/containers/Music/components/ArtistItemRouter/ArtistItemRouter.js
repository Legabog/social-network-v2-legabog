import React from "react";
import { connect } from "react-redux";

import "./ArtistItemRouter.css"

import { HeaderArtistItemRouter } from "../HeaderArtistItemRouter";
import { BodyArtistItemRouter } from "../BodyArtistItemRouter";

const ArtistItemRouter_ = (props) => {
  return (
    <div className={"artist-item-router"}>
      <HeaderArtistItemRouter nameArtist={props.nameArtist} />
      <BodyArtistItemRouter
        nameArtist={props.nameArtist}
        musicAlbums={props.musicAlbums}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
  };
};

export const ArtistItemRouter = connect(mapStateToProps, {})(ArtistItemRouter_);
