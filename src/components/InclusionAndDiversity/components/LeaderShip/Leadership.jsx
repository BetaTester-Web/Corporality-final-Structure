import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TeamSpiritLeadership.css";
import top_image2 from "./main2.png";
import top_back from "./back1.png";
import top_rectangle from "./polygon1.png";
import bottom_image2 from "./main1.png";
import bottom_back from "./back2.png";
import bottom_rectangle from "./polygon2.png";

function Leadership() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      <div className="community_support_main-Leaderships">
        <div
        data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
       
          className="community_support_first-Leaderships"

        >
          <div className="text1_leadership">
            <div className="community_first_heading-Leaderships">
              <div className="community_first_heading_text-Leaderships">Inclusion and diversity across our partnerships</div>

            </div>
            <div className="community_first_description-Leaderships">
              Every partner shares a commitment and ideas only get better when discussed openly. A mix of people is the best way to get decisions going.
            </div>
          </div>

          <div className="first_leadership_image">
            <div className="community_top_image-Leaderships">
              <img src={top_image2} alt="" className="community_top_image_image-Leaderships" />
            </div>
            <div className="community_top_back_image-Leaderships">
              <img src={top_back} alt="" />
            </div>
          </div>
          <div className="community_top_rectangle-Leaderships">
            <img src={top_rectangle} alt="" />
          </div>
        </div>
        <div
          className="community_support_second-Leaderships"
          data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500"
        >
          <div className="text2_Leaderships">
            <div className="community_second_heading-Leaderships">
              <div className="community_second_heading_text-Leaderships">
                Responsible leadership
              </div>

            </div>
            <div className="community_second_description-Leaderships">
              Corporality Global’s leadership is constantly discussing diversity, inclusion and responsibility across the workplace. It ensures high employee contentment levels.

            </div>
          </div>
          <div className="ImageINSecond_Leaderships">
            <div className="community_bottom_image-Leaderships">
              <img
                src={bottom_image2}
                alt=""
                className="community_bottom_image_image-Leaderships"
              />
            </div>
            <div className="community_bottom_back_image-Leaderships">
              <img src={bottom_back} alt="" />
            </div>
          </div>
          <div className="community_bottom_rectangle-Leaderships">
            <img src={bottom_rectangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
