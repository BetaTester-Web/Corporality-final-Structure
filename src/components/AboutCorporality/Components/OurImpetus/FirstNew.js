import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import main from "../OurImpetus/main.png";
import main2 from "../OurImpetus/main2.png";
import backimg from "../OurImpetus/back.png";
import wall from "../OurImpetus/wall.png";
import smallrect from "../OurImpetus/small.png";
import rect from "../OurImpetus/rect.png";
import "./First.css";

function FirstNew() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="upper_container">
      <div
        className="left_content aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-offset="0"
      >
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
      <div
        className="right_image aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-offset="0"
      >
        <img src={wall} alt="" className="wall_img" />

        <img src={backimg} alt="" className="back_img" />
        <img src={smallrect} alt="" className="smallrectangle_img" />
        <img src={rect} alt="" className="rectangle_img" />

        <div className="main_image_container">
          <img src={main2} alt="" className="main_img" />
        </div>
      </div>
    </div>
  );
}

export default FirstNew;
