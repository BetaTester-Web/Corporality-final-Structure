import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../AboutCorporality/Components/CommunitySupport/CommunitySupport.css";
import top_back from "../../AboutCorporality/Components/CommunitySupport/images/top_back.png";
import top_rectangle from "../../AboutCorporality/Components/CommunitySupport/images/top_rectangle.png";
import bottom_back from "../../AboutCorporality/Components/CommunitySupport/images/bottom_back.png";
import bottom_rectangle from "../../AboutCorporality/Components/CommunitySupport/images/bottom_rectangle.png";
import heading_1_arrow from "../../AboutCorporality/Components/CommunitySupport/images/heading_1_arrow.png";
import heading_2_arrow from "../../AboutCorporality/Components/CommunitySupport/images/heading_2_arrow.png";
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"


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
          <div className="community_first_heading_text">Deep Industry Expertise</div>
          <div className="community_first_heading_arrow">
            <img src={heading_1_arrow} alt="" />
          </div>
        </div>
        <div className="community_first_description">
        Corporality employs high-end resources that come with deep industry expertise and knowledge and use proven industry-oriented methods and solutions to let you benefit from remarkable contexts.
        </div>
        <div className="community_top_image">
          <img src={img3} alt="" />
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
          Agility and Enterprise Resilience
          </div>
          <div className="community_second_heading_arrow">
            <img src={heading_2_arrow} alt="" />
          </div>
        </div>
        <div className="community_second_description">
        Corporality fosters agility and builds enterprise resilience through continuous innovation.  We re-engineer functions in ways that suit both internal and external customer moods.  
        </div>
        <div className="community_bottom_image">
          <img src={img4} alt="" />
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
