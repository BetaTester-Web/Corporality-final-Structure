import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import top_back from "./images/back1Expertise.png";
import top_rectangle from "./images/poly1Expertise.png";
import bottom_back from "./images/back2Expertise.png";
import bottom_rectangle from "./images/poly2Expertise.png";
import heading_1_arrow from "./images/back1Expertise.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import "../Components/SACComp6.css";

function SACComp6() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      <div className="SACComp6_community_support_main-Invirogating">
        <div
          className="SACComp6_community_support_first-Invirogating"

        >
          <div className="SACComp6_text_1_invirogating">
            <div className="SACComp6_community_first_heading-Invirogating">
              <div className="SACComp6_community_first_heading_text-Invirogating">Invigorating the Team spirit</div>
              <div className="SACComp6_community_first_heading_arrow-Invirogating">
                <img src={heading_1_arrow} alt="" />
              </div>

            </div>

            <div className="SACComp6_community_first_description-Invirogating">
              Corporality Global works with true agility to make a difference across every project.
            </div>
          </div>
          <div className="SACComp6_community_top_image-Invirogating">
            <img src={bottom_image2} alt="" className="SACComp6_community_top_image_image-Invirogating" />
          </div>
          <div className="SACComp6_community_top_back_image-Invirogating">
            <img src={top_back} alt="" />
          </div>
          <div className="SACComp6_community_top_rectangle-Invirogating">
            <img src={top_rectangle} alt="" />
          </div>
        </div>
        <div
          className="SACComp6_community_support_second-Invirogating"
        >
          <div className="SACComp6_text_2_invirogating">
            <div className="SACComp6_community_second_heading-Invirogating">
              <div className="SACComp6_community_second_heading_text-Invirogating">
                Stepping into the Global Market
              </div>
              <div className="SACComp6_community_second_heading_arrow-Invirogating">
                <img src={heading_2_arrow} alt="" />
              </div>

            </div>
            <div className="SACComp6_community_second_description-Invirogating">
              Corporality Global has already taken baby steps to enter the North American market as we aim to grow.


            </div>
          </div>
          <div className="SACComp6_ImageINSecond_Leaderships">
            <div className="SACComp6_community_bottom_image-Invirogating">
              <img
                src={top_image2}
                alt=""
                className="SACComp6_community_bottom_image_image-Invirogating"
              />
            </div>
            <div className="SACComp6_community_bottom_back_image-Invirogating">
              <img src={bottom_back} alt="" />
            </div>
          </div>
          <div className="SACComp6_community_bottom_rectangle-Invirogating">
            <img src={bottom_rectangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SACComp6;
