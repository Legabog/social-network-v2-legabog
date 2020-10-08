import React from "react";
import "./Widgets.css";

const Widgets = (props) => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.youtube.com/embed/B-kxUMHBxNo&list=WL&index=9&t=6967s"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
