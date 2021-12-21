import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./WorkParallax.css";
import right_rectangle from "./images/right_rectangle.png";
import top_rectangle from "./images/top_rectangle.png";
import threeboxes from "./images/threeboxes.png";

function WorkParallax() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="aboutus_parallax_parent">
      <div className="boxes_left">
        <img src={threeboxes} alt="" />
      </div>
      <div className="container">
        <div className="outer_container">
          <div className="parallax_container">
            <div
              className="parallax_main_heading"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              We make marketing truly work for you.
              <br /> How we work?
            </div>

            <div
              className="parallax_description"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              The digital era is here and rapid business transformations are
              essential to keep your pockets full. Our processes are inclined to
              meet customer expectations and create lasting value while staying
              scalable and adaptive.
            </div>

            <div
              className="bottom_button"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <button> Our Services </button>
            </div>
            <div className="box_top">
              <img src={top_rectangle} alt="" />
            </div>
            <div className="box_right">
              <img src={right_rectangle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkParallax;
