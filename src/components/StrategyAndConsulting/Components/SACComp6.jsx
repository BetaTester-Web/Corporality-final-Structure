import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import top_backExpertise from "./images/back1Expertise.png";
import top_rectangleExpertise from "./images/poly1Expertise.png";
import bottom_backExpertise from "./images/back2Expertise.png";
import bottom_rectangleExpertise from "./images/poly2Expertise.png";
import heading_1_arrowExpertise from "./images/arrow1Expertise.png";
import Main1Expertise from "./images/Main1ExpertiseNew.png";
import Main2Expertise from "./images/Main2Expertise.png";
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
              <div className="SACComp6_community_first_heading_text-Invirogating">Deep Industry Expertise</div>
              <div className="SACComp6_community_first_heading_arrow-Invirogating">
                <img src={heading_1_arrowExpertise} alt="" />
              </div>

            </div>

            <div className="SACComp6_community_first_description-Invirogating">
            Corporality employs high-end resources that come with deep industry expertise and knowledge and use proven industry-oriented methods and solutions to let you benefit from remarkable contexts.
            </div>
          </div>
          <div className="SACComp6_community_top_image-Invirogating">
            <img src={Main1Expertise} alt="" className="SACComp6_community_top_image_image-Invirogating" />
          </div>
          <div className="SACComp6_community_top_back_image-Invirogating">
            <img src={top_backExpertise} alt="" />
          </div>
          <div className="SACComp6_community_top_rectangle-Invirogating">
            <img src={top_rectangleExpertise} alt="" />
          </div>
        </div>
        <div
          className="SACComp6_community_support_second-Invirogating"
        >
          <div className="SACComp6_text_2_invirogating">
            <div className="SACComp6_community_second_heading-Invirogating">
              <div className="SACComp6_community_second_heading_text-Invirogating">
              Agility and Enterprise Resilience
              </div>
              <div className="SACComp6_community_second_heading_arrow-Invirogating">
                <img src={heading_1_arrowExpertise} alt="" />
              </div>

            </div>
            <div className="SACComp6_community_second_description-Invirogating">
            Corporality fosters agility and builds enterprise resilience through continuous innovation.  We re-engineer functions in ways that suit both internal and external customer moods.  


            </div>
          </div>
          <div className="SACComp6_ImageINSecond_Leaderships">
            <div className="SACComp6_community_bottom_image-Invirogating">
              <img
                src={Main2Expertise}
                alt=""
                className="SACComp6_community_bottom_image_image-Invirogating"
              />
            </div>
            <div className="SACComp6_community_bottom_back_image-Invirogating">
              <img src={bottom_backExpertise} alt="" />
            </div>
          </div>
          <div className="SACComp6_community_bottom_rectangle-Invirogating">
            <img src={bottom_rectangleExpertise} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SACComp6;
