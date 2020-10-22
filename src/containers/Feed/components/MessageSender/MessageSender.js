import React, { useState } from "react";
import "./MessageSender.css";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import db from "utils/firebase/firebase";
import firebase from "firebase";

export const MessageSender = (props) => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const imageUrlHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: props.user.photoURL,
      username: props.user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="message-sender">
      <div className="message-sender__top">
        <Avatar
          src={
            props.user === null || props.user.Avatars.activeAvatarUrl === ""
              ? null
              : props.user.Avatars.activeAvatarUrl
          }
        />
        <form>
          <input
            value={input}
            onChange={inputHandler}
            className="message-sender__input"
            type="text"
            placeholder={`Type some message, ${
              props.user === null || props.user.Name === ""
                ? null
                : props.user.Name
            }`}
          />
          <input
            value={imageUrl}
            onChange={imageUrlHandler}
            type="text"
            placeholder="ImageUrl"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="message-sender__bottom">
        <div className="message-sender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="message-sender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="message-sender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

