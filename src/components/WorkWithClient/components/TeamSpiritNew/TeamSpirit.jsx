import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TeamSpirit.css";
import top_image2 from "./main1.png";
import top_back from "./back1.png";
import top_rectangle from "./polygon1.png";
import bottom_image2 from "./main2.png";
import bottom_back from "./back2.png";
import bottom_rectangle from "./polygon2.png";
import heading_1_arrow from "./arrow1.png";
import heading_2_arrow from "./arrow2.png";

function TeamSpiritNew() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="community_support_main-TeamSpirit">
      <div
        className="community_support_first-TeamSpirit"

      >
        <div className="community_first_heading-TeamSpirit">
          <div className="community_first_heading_text-TeamSpirit">Invigorating the Team spirit</div>
          <div className="community_first_heading_arrow-TeamSpirit">
            <img src={heading_1_arrow} alt="" />
          </div>
        </div>
        <div className="community_first_description-TeamSpirit">
        Corporality Global works with true agility to make a difference across every project.
        </div>
        <div className="community_top_image-TeamSpirit">
          <img src={top_image2} alt="" className="community_top_image_image-TeamSpirit" />
        </div>
        <div className="community_top_back_image-TeamSpirit">
          <img src={top_back} alt="" />
        </div>
        <div className="community_top_rectangle-TeamSpirit">
          <img src={top_rectangle} alt="" />
        </div>
      </div>
      <div
        className="community_support_second-TeamSpirit"
      >
        <div className="community_second_heading-TeamSpirit">
          <div className="community_second_heading_text-TeamSpirit">
          Stepping into the Global Market
          </div>
          <div className="community_second_heading_arrow-TeamSpirit">
            <img src={heading_2_arrow} alt="" />
          </div>
        </div>
        <div className="community_second_description-TeamSpirit">
        Corporality Global has already taken baby steps to enter the North American market as we aim to grow.

        </div>
        <div className="community_bottom_image-TeamSpirit">
          <img
            src={bottom_image2}
            alt=""
            className="community_bottom_image_image-TeamSpirit"
          />
        </div>
        <div className="community_bottom_back_image-TeamSpirit">
          <img src={bottom_back} alt="" />
        </div>
        <div className="community_bottom_rectangle-TeamSpirit">
          <img src={bottom_rectangle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeamSpiritNew;
