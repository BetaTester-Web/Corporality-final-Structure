import React from "react";
import "./WorldMap.css";
import left from "./images/left.png";
import right from "./images/right.png";

function WorldMap() {
  return (
    <div className="worldmap_container">
      <div className="worldmap_left">
        <img src={left} alt="" />
      </div>
      <div className="worldmap_right">
        <img src={right} alt="" />
      </div>
    </div>
  );
}

export default WorldMap;
