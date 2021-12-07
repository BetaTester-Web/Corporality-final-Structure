import React, { useEffect } from "react";
import "../Innovation/Innovation.css";
import aos from "aos";
import small from "../Innovation/small2.png";
import small2 from "../Innovation/small.png";
import group from "../Innovation/Group.png";

const Innovation = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="fifthcomponent-Innovation effectiveImage-Innovation">
      <img className="group5-Innovation" src={group} alt="" />
      <div className="container-fluid">
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
            <img src={small2} className="small2-5-Innovation" alt="" />
            <img src={small} className="small-5-Innovation" alt="" />

            <div className="link-Innovation">
              <div className="button-4-Innovation">
                <a className="button-link-Innovation" href="#">
                  Explore Our tech start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbor-Innovation"></div>
    </div>
  );
};

export default Innovation;
