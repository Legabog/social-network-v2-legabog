import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Feed.css";

import { StoryReel } from "./components/StoryReel";
import { MessageSender } from "./components/MessageSender";
import { Post } from "./components/Post";

import db from "utils/firebase/firebase";

const Feed_ = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cleanupFunction = false;
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        if(!cleanupFunction) setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      }
      );

    return () => cleanupFunction = true;  
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender {...props}/>

      {posts.map((e) => {
        return (
          <Post
            key={e.id}
            profilePic={e.data.profilePic}
            message={e.data.message}
            timestamp={e.data.timestamp}
            username={e.data.username}
            image={e.data.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const Feed = compose(
  withRouter,
  connect(mapStateToProps, {})
)(Feed_);

