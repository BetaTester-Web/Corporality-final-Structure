import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStrategy from "./images/firstMain.png";
import backimgStrategy from "./images/firstBack.png";
import wallStrategy from "./images/firstWall.png";
import smallrectStrategy from "./images/firstSmallrect.png";
import rectStrategy from "./images/FirstRect.png";
import smallerrectStrategy from "./images/firstSmallerRect.png";
import yellow_backStrategy from "./images/firstYellow.png";
import "../Components/SACComp1.css";

const SACComp1 = () => {
  useEffect(() => {
    aos.init({ duration: 3000 , disable: "mobile" });
  }, []);
  return (
    <div className="SACC1_prev-1-Ib">
            <div className="SACC1_navbar"></div>
            <div className="container container-1">
            <div className="SACC1_yellowbackground_Blueprint">
                <img src = {yellow_backStrategy} alt='' />
            </div>
                <div className="row first-image">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" className="SACC1_text-box-1">

                            <p className='SACC1_container-1_text'>STRATEGY AND CONSULTING</p>
                            <p className='SACC1_container-2_text'>We truly believe in putting customers first.</p>
                            <div className="SACC1_small-rect-prev-1"><img src={smallerrectStrategy} alt='' className='SACC1_smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" className="SACC1_image-first">
                           <img alt='' className='SACC1_rect' src={rectStrategy} />
                            <img alt='' className='SACC1_wall' src={wallStrategy} />
                            <img alt='' className='SACC1_smallrect' src={smallrectStrategy} />
                            <img alt='' className='SACC1_backimg' src={backimgStrategy} />
                            <div className="SACC1_banner_right_inner" >
                                <img className='SACC1_main-prev1' src={mainStrategy} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>


  );
};

export default SACComp1;
