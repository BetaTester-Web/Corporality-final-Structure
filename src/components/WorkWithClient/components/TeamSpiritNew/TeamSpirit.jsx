import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TeamSpirit.css";
import top_image2 from "./main2.png";
import top_back from "./back1.png";
import top_rectangle from "./polygon1.png";
import bottom_image2 from "./main1.png";
import bottom_back from "./back2.png";
import bottom_rectangle from "./polygon2.png";
import heading_1_arrow from "./arrow1.png";
import heading_2_arrow from "./arrow2.png";

function TeamSpiritNew() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      <div className="community_support_main-Invirogating">
        <div
          className="community_support_first-Invirogating"

        >
          <div className="text_1_invirogating">
            <div className="community_first_heading-Invirogating">
              <div className="community_first_heading_text-Invirogating">Invigorating the Team spirit</div>
              <div className="community_first_heading_arrow">
                <img src={heading_1_arrow} alt="" />
              </div>

            </div>

            <div className="community_first_description-Invirogating">
              Corporality Global works with true agility to make a difference across every project.
            </div>
          </div>
          <div className="community_top_image-Invirogating">
            <img src={bottom_image2} alt="" className="community_top_image_image-Invirogating" />
          </div>
          <div className="community_top_back_image-Invirogating">
            <img src={top_back} alt="" />
          </div>
          <div className="community_top_rectangle-Invirogating">
            <img src={top_rectangle} alt="" />
          </div>
        </div>
        <div
          className="community_support_second-Invirogating"
        >
          <div className="text_2_invirogating">
            <div className="community_second_heading-Invirogating">
              <div className="community_second_heading_text-Invirogating">
                Stepping into the Global Market
              </div>
              <div className="community_second_heading_arrow">
                <img src={heading_2_arrow} alt="" />
              </div>

            </div>
            <div className="community_second_description-Invirogating">
              Corporality Global has already taken baby steps to enter the North American market as we aim to grow.


            </div>
          </div>
          <div className="ImageINSecond_Leaderships">
            <div className="community_bottom_image-Invirogating">
              <img
                src={top_image2}
                alt=""
                className="community_bottom_image_image-Invirogating"
              />
            </div>
            <div className="community_bottom_back_image-Invirogating">
              <img src={bottom_back} alt="" />
            </div>
          </div>
          <div className="community_bottom_rectangle-Invirogating">
            <img src={bottom_rectangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSpiritNew;