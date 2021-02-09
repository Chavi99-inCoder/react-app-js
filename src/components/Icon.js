import React from "react";
import "./Icon.css";
function Icon({name,image,border,link}) {
  return (
    <div className="icon">
      <div className="icon__image">
        <a href={link} target="_blank">
          <img src={image} style={{ borderRadius: border }} />
        </a>
      </div>
      <div className="icon__text">
        <a href={link} target="_blank">
          <p>{name}</p>
        </a>
      </div>
    </div>
  );
}

export default Icon;
