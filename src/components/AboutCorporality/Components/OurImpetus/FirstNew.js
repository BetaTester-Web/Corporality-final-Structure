import React from "react";
import main from "../OurImpetus/main.png";
import backimg from "../OurImpetus/back.png";
import wall from "../OurImpetus/wall.png";
import smallrect from "../OurImpetus/small.png";
import rect from "../OurImpetus/rect.png";
import "./First.css";

function FirstNew() {
  return (
    <div className="upper_container">
      <div className="left_content">
        <div className="impetus_heading">OUR IMPETUS</div>
        <div className="impetus_text">
          TO DELIVER THE BEST IN DIGITAL MARKETING AND SALES SOLUTIONS USING
          INNOVATION AND INTUITION TO CRAFT BUSINESS BRILLIANCE
        </div>
        <div className="impetus_text2">
          We create long-lasting values while helping you embrace change in
          quickly altering marketing scenarios
        </div>
      </div>
      <div className="right_image">
        <div className="container">
          <img src={wall} alt="" className="wall_img" />
          <img src={main} alt="" className="main_img" />
          <img src={backimg} alt="" className="back_img" />
          <img src={smallrect} alt="" className="smallrectangle_img" />
          <img src={rect} alt="" className="rectangle_img" />
        </div>
      </div>
    </div>
  );
}

export default FirstNew;
