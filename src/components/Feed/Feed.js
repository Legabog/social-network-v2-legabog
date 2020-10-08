import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "../../utils/firebase/firebase";

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
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

export default Feed;
