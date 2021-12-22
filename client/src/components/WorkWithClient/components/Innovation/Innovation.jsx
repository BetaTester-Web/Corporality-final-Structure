import React, { useEffect } from "react";
import "../Innovation/Innovation.css";
import aos from "aos";
import smallInnovation from "../Innovation/small2Innovation.png";
import small2Innovation from "../Innovation/smallInnovation.png";
import groupInnovation from "../Innovation/GroupInnovation.png";

const Innovation = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="fifthcomponent-Innovation effectiveImage-Innovation">
      <img className="group5-Innovation" src={groupInnovation} alt="" />
      <div className="container">
        <div className="row ">
          <div
            data-aos="zoom-in"
            className="text-Innovation d-flex align-items-center justify-content-center flex-column"
          >
            <p className="cont-5-text-1-Innovation">
              Our Innovation Architecture
            </p>
            <p className="cont-5-text-2-Innovation">
              We are a fast-growing marketing and management consulting firm in
              Sydney that aims to tread across continents and industries as we
              use next-gen technology to resolve every business challenge.
            </p>
            <img src={small2Innovation} className="small2-5-Innovation" alt="" />
            <img src={smallInnovation} className="small-5-Innovation" alt="" />
            <a href="">
              <div className="link-Innovation">
                <div className="button-4-Innovation">
                  <div className="button-link-Innovation" href="#">
                    Explore Our tech start
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navbor-Innovation"></div>
    </div>
  );
};

export default Innovation;
