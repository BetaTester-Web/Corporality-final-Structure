import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import main from "../../IntractiveBluePrint/components/prevCode-1/main.png";
import backimg from "../../IntractiveBluePrint/components/prevCode-1/back.png";
import wall from "../../IntractiveBluePrint/components/prevCode-1/wall.png";
import smallrect from "../../IntractiveBluePrint/components/prevCode-1/small.png";
import rect from "../../IntractiveBluePrint/components/prevCode-1/rect.png";
import smallerrect from "../../IntractiveBluePrint/components/prevCode-1/smaller-rect.png";
import yellow_back from "./images/yellow_back.png";
import "../Components/SACComp1.css";

const SACComp1 = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="SACC1_prev-1-Ib">
      <div className="SACC1_navbar"></div>
      <div className="SACC1_parent">
        <div className="container SACC1_container-1">
          <img src={yellow_back} alt="" className="SACC1_yellowback" />
          <div className="row SACC1_first-image">
            <div className="col-lg-6">
              <div data-aos="fade-right" className="SACC1_text-box-1">
                <p className="SACC1_container-2_text">
                  STRATEGY AND CONSULTING
                </p>
                <p className="SACC1_container-1_text">
                  We truly believe in putting customers first.
                </p>
                <div className="SACC1_small-rect-prev-1">
                  <img
                    src={smallerrect}
                    alt=""
                    className="SACC1_smaller-rect-prev-1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
              <div data-aos="fade-left" className="SACC1_image-first">
                <img alt="" className="SACC1_rect" src={rect} />
                <img alt="" className="SACC1_wall" src={wall} />
                <img alt="" className="SACC1_smallrect" src={smallrect} />
                <img alt="" className="SACC1_backimg" src={backimg} />
                <div className="SACC1_banner_right_inner">
                  <img className="SACC1_main-prev1" src={main} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="SACC1_blue_print_overlay">
        <div className="SACC1_blue_print_ellipse-1"></div>
      </div> */}
      </div>
    </div>
  );
};

export default SACComp1;
