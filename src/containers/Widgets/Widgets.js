import React from "react";
import "./Widgets.css";

export const Widgets = (props) => {
  return (
    <div className="widgets">
      <iframe
        title={"my-iframe"}
        src="https://www.youtube.com/embed/B-kxUMHBxNo&list=WL&index=9&t=6967s"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};
