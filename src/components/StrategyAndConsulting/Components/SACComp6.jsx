import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../AboutCorporality/Components/CommunitySupport/CommunitySupport.css";
import top_image from "../../AboutCorporality/Components/CommunitySupport/images/top_image.png";
import top_back from "../../AboutCorporality/Components/CommunitySupport/images/top_back.png";
import top_rectangle from "../../AboutCorporality/Components/CommunitySupport/images/top_rectangle.png";
import bottom_image from "../../AboutCorporality/Components/CommunitySupport/images/bottom_image.png";
import bottom_back from "../../AboutCorporality/Components/CommunitySupport/images/bottom_back.png";
import bottom_rectangle from "../../AboutCorporality/Components/CommunitySupport/images/bottom_rectangle.png";
import heading_1_arrow from "../../AboutCorporality/Components/CommunitySupport/images/heading_1_arrow.png";
import heading_2_arrow from "../../AboutCorporality/Components/CommunitySupport/images/heading_2_arrow.png";

function SACComp6() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="community_support_main">
      <div
        className="community_support_first aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className="community_first_heading">
          <div className="community_first_heading_text">Community Support</div>
          <div className="community_first_heading_arrow">
            <img src={heading_1_arrow} alt="" />
          </div>
        </div>
        <div className="community_first_description">
          We believe that education is an imperative tool for the growth of a
          child. Corporality Global has been instrumental in propelling several
          children towards a better living through education.
        </div>
        <div className="community_top_image">
          <img src={top_image} alt="" />
        </div>
        <div className="community_top_back_image">
          <img src={top_back} alt="" />
        </div>
        <div className="community_top_rectangle">
          <img src={top_rectangle} alt="" />
        </div>
      </div>
      <div
        className="community_support_second  aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="2000"
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
          As part of our CSR activities, Corporality Global is currently laying
          a road map in the geospatial technology area to work closely with
          authorities across geographical mapping and analysis.
        </div>
        <div className="community_bottom_image">
          <img src={bottom_image} alt="" />
        </div>
        <div className="community_bottom_back_image">
          <img src={bottom_back} alt="" />
        </div>
        <div className="community_bottom_rectangle">
          <img src={bottom_rectangle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SACComp6;
