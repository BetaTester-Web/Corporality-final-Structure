import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import main2Organic from "./images/secondMain.png";
import wall2Organic from "./images/secondWall.png";
import small2Organic from "./images/secondRect.png";
import side2Organic from "./images/secondSideRect.png";
import "../Components/SACComp2.css";

const SACComp2 = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="SACC2_prev2">
      <img className="SACC2_side2-container" src={side2Organic} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 SACC2_imaging-2 d-flex justify-content-center align-items-center flex-column">
            <div className="SACC2_images-2">
              <img className="SACC2_wall2-container" src={wall2Organic} alt="" />

              <img className="SACC2_small2-container" src={small2Organic} alt="" />
              <div className="SACC2_img-container">
                <div className="SACC2_hoverinit SACC2_Inc_Div_our-faith-main-img">
                  <div
                    alt=""
                    data-aos="fade-up-right"
                    data-aos-duration="2000"
                    data-aos-delay="10"
                  >
                    <img className="SACC2_main2 " src={main2Organic} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 SACC2_texting-2">
            <p
              data-aos="fade-left"
              data-aos-duration="3000"
              className="SACC2_prev-2-text-1"
            >
              Organic growth strategies
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="3000"
              className="SACC2_prev-2-text-2"
            >
              At the heart of every marketing plan lies opportunity. What
              enterprises require today are winning strategies driven by data
              and AI, which also provide valuable insights that can be executed
              at speed and certainty across the organisation. In addition,
              scalability plays a pivotal role in sustaining profitable growth
              in any market. Therefore, our professional marketing solutions are
              centred around bringing high-level customer experiences to the
              table to ensure unrivalled, ensuing industry presence.
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="3000"
              className="SACC2_prev-2-text-2"
            >
              Wherever you are in the world and no matter the nature of your
              business, our functional experts create measurable, defined values
              while providing innovative solutions to help you connect with your
              customers better, improve adaptability and boost sustainable
              growth.{" "}
            </p>
            <div
              data-aos="fade-left"
              data-aos-delay="900"
              data-aos-duration="3000"
              className="SACC2_text-box "
            >
              <p className="SACC2_text-box-content">
                No matter what lies ahead, Corporality helps you emerge more
                robust, better and victorious.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SACComp2;
