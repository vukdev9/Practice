import React from "react";
import "./SlideMenuItem.css";

const SlideMenuItem = (props) => {
  return (
    <li className="slideMenuItem">
      <a href="!#">
        <i className={props.icon}></i>
        {props.title}
      </a>
    </li>
  );
};

export default SlideMenuItem;
