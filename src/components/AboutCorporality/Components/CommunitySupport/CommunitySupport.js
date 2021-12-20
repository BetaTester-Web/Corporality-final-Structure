import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CommunitySupport.css";
import top_image from "./images/top_image.png";
import top_image2 from "./images/top_image2.png";
import top_back from "./images/top_back.png";
import top_rectangle from "./images/top_rectangle.png";
import bottom_image from "./images/bottom_image.png";
import bottom_image2 from "./images/bottom_image2.png";
import bottom_back from "./images/bottom_back.png";
import bottom_rectangle from "./images/bottom_rectangle.png";
import heading_1_arrow from "./images/heading_1_arrow.png";
import heading_2_arrow from "./images/heading_2_arrow.png";

function CommunitySupport() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="communitysupport_parent">
      <div className="container">
        <div className="community_support_main">
          <div
            className="community_support_first "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="community_first_heading">
              <div className="community_first_heading_text">
                Community Support
              </div>
              <div className="community_first_heading_arrow ">
                <img src={heading_1_arrow} alt="" />
              </div>
            </div>
            <div className="community_first_description">
              We believe that education is an imperative tool for the growth of
              a child. Corporality Global has been instrumental in propelling
              several children towards a better living through education.
            </div>
            <div className="community_top_image">
              <img
                src={top_image2}
                alt=""
                className="community_top_image_image"
              />
            </div>
            <div className="community_top_back_image">
              <img src={top_back} alt="" />
            </div>
            <div className="community_top_rectangle">
              <img src={top_rectangle} alt="" />
            </div>
          </div>
          <div
            className="community_support_second  "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="community_second_heading">
              <div className="community_second_heading_text">
                Corporate Social Responsibility
              </div>
              <div className="community_second_heading_arrow">
                <img src={heading_2_arrow} alt="" />
              </div>
            </div>
            <div className="community_second_description">
              As part of our CSR activities, Corporality Global is currently
              laying a road map in the geospatial technology area to work
              closely with authorities across geographical mapping and analysis.
            </div>
            <div className="community_bottom_image">
              <img
                src={bottom_image2}
                alt=""
                className="community_bottom_image_image"
              />
            </div>
            <div className="community_bottom_back_image">
              <img src={bottom_back} alt="" />
            </div>
            <div className="community_bottom_rectangle">
              <img src={bottom_rectangle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySupport;
