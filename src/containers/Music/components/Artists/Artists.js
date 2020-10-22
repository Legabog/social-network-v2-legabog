import React from "react";
import { connect } from "react-redux";
import "./Artists.css"

import { HeaderArtists } from "../HeaderArtists";
import { BodyArtists } from "../BodyArtists";

const ArtistsList_ = (props) => {
  return (
    <div className={"artists"}>
      <HeaderArtists />
      <BodyArtists Fetching={props.Fetching} musicAlbums={props.musicAlbums} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching
  };
};

export const ArtistsList = connect(mapStateToProps, {})(ArtistsList_);
