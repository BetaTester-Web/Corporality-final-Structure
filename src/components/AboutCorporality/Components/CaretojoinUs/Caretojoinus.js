import React from "react";
import "./Caretojoinus.css";
import right_image from "./images/right_image.png";
import bottom from "./images/bottom.png";
import top from "./images/top.png";
import image_back from "./images/image_back.png";
import wall from "./images/wall.png";
import middle from "./images/middle.png";
import rectangle from "./images/rectangle.png";

function Caretojoinus() {
  return (
    <div className="caretojoinus_main">
      <div className="left_wall">
        <img src={wall} alt="" />
      </div>
      <div className="caretojoinus_text">
        <div className="caretojoinus_heading">Care to Join us?</div>
        <div className="caretojoinus_description">
          Join a team of exceptional minds committed to creating brilliance.
          This is also the right place to experience the best in agility.
        </div>
        <div className="caretojoinus_button">
          <button>Join Us</button>
        </div>
      </div>
      <div className="bottom_rectangle">
        <img src={bottom} alt="" />
      </div>
      <div className="center_rectangle">
        <img src={middle} alt="" />
      </div>
      <div className="middle_rectangle">
        <img src={rectangle} alt="" />
      </div>
      <div className="top_rectangle">
        <img src={top} alt="" />
      </div>
      <div className="caretojoinus_image">
        <div className="right_image_container">
          <img src={right_image} alt="" />
        </div>
        <div className="back_image">
          <img src={image_back} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Caretojoinus;
