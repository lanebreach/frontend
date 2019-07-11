import * as React from "react";
import "../../styles/navigation.css";

export const Navigation = () => {
  const style = {
    position: "relative",
    float: "right",
    paddingRight: "20px",
    zIndex: 1,
    color: "wheat",
    cursor: "pointer"
  };

  return (
    <ul className="navigation" style={style}>
      <li className="navigation-item">
        <a href="/">Home</a>
      </li>
      <li className="navigation-item">
        <a href="/about">About</a>
      </li>
      <li className="navigation-item">
        <a href="/stats">Stats</a>
      </li>
      <li className="navigation-item">
        <a href="/gallery">Gallery</a>
      </li>
    </ul>
  );
};
