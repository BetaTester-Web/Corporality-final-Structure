import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./WorldMap.css";
import left from "./images/left.png";
import right from "./images/right.png";

function WorldMap() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="worldmap_parent">
      <div className="container">
        <div className="worldmap_container">
          <div
            className="worldmap_left "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={left} alt="" />
          </div>
          <div
            className="worldmap_right "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
