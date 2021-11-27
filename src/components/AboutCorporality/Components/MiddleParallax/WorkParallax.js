import React from "react";
import "./WorkParallax.css";
import right_rectangle from "./images/right_rectangle.png";
import top_rectangle from "./images/top_rectangle.png";
import threeboxes from "./images/threeboxes.png";

function WorkParallax() {
  return (
    <div className="outer_container">
      <div className="parallax_container">
        <div className="parallax_main_heading">
          We make marketing truly work for you.
          <br /> How we work?
        </div>
        <div className="parallax_description">
          The digital era is here and rapid business transformations are
          essential to keep your pockets full. Our processes are inclined to
          meet customer expectations and create lasting value while staying
          scalable and adaptive.
        </div>
        <div className="bottom_button">
          <button> Our Services </button>
        </div>
        <div className="box_top">
          <img src={top_rectangle} alt="" />
        </div>
        <div className="box_right">
          <img src={right_rectangle} alt="" />
        </div>
        <div className="boxes_left">
          <img src={threeboxes} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorkParallax;
