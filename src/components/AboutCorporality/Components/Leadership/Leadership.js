import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import image_1 from "./image_1.png";
import image_2 from "./image_2.png";
import "./Leadership.css";

function Leadership() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="leadership_parent">
      <div className="container">
        <div className="leadership_main">
          <div
            className="leadership_heading"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            Leadership Team
          </div>

          <div
            className="leadership_content"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            The Corporality team is all about commitment and accountability. Our
            directors have been in the industry for more than 17 years, and head
            the team in being passionate for the success of our clients. We
            value relationships, collaboration, intelligent work, and community.
          </div>

          <div className="leadership_cards">
            <div
              className="leadership_card_1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="leadership1_image">
                <img src={image_1} alt="" />
              </div>
              <div className="leader_card_content_box">
                <div className="card_content_h1">Priya Mishra</div>
                <div className="card_content_h2">Ceo</div>
                <div className="card_content_description">
                  “Corporality is a reflection of the core beliefs of its
                  leaders, and the embodiment of the excellence of its teams. We
                  at Corporality take pride in doing good work for our customers
                  and honoured to play an es
                </div>
              </div>
            </div>
            <div
              className="leadership_card_2"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="leadership2_image">
                <img src={image_2} alt="" />
              </div>

              <div className="leader_card_content_box">
                <div className="card_content_h1">JAISH</div>
                <div className="card_content_h2">COO</div>
                <div className="card_content_description">
                  “The age of digital and booming progress of new intelligences
                  in marketing is the fuel to our fire at Exante. We take every
                  opportunity to learn and in turn educate and inspire others
                  with practical
                </div>
              </div>
            </div>
          </div>
          <div
            className="leadership_button"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            View All Team
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
