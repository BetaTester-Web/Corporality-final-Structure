import "./SACComp3.css";
import wall from "./images/wall.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const  SACComp3 = () => {
  useEffect(() => {
    AOS.init({disable: "mobile"});
    AOS.refresh();
  }, []);
  return (
    <div className="sacc3_parent">
      <div className="container">
        <div className="sacc3Container">
          <div data-aos="flip-left"
              data-aos-delay="300"
              data-aos-duration="3000" className="sacc3TextContainer">
            <div
              
              className="sacc3TextWrapper d-flex flex-row"
            >
              <div className="sacc3Left">
                <img src={wall} alt="" />
              </div>
              <div className="sacc3Right">
                <p className="sacc3Heading1">STRATEGY & CONSULTING</p>
                <p className="sacc3Heading2">
                  Effective Marketing Strategy 2022: Driving towards a better
                  tomorrow
                </p>
                <p className="sacc3Para">
                  The new normal has opened up a world of opportunities for
                  businesses. With renewed importance of the digital and online
                  presence, Corporality aims to help leaders chart their courses
                  towards a better and more profitable growth.
                </p>
                <a className="sacc3Button" href="/#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SACComp3;
