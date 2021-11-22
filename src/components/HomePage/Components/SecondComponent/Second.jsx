import React, { useEffect } from "react";
// import aos from "aos";
// import "aos/dist/aos.css";
import "../SecondComponent/secondcontainer.css";
import polygon from "../SecondComponent/polygon.png";
import Main from "../SecondComponent/main.png";
import Back from "../SecondComponent/back.png";
import rect2 from "../SecondComponent/rect2.png";
import rect3 from "../SecondComponent/rect3.png";
import rect4 from "../SecondComponent/rect4.png";
import rect1 from "../SecondComponent/rect1.png";
import wall from "../SecondComponent/wall.png";

const Second = () => {
  useEffect(() => {
    // aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="second">
      <div className="container second-container">
        <div className="row">
          <div className="col-lg-6">
            <p data-aos="fade-right" className="container-2-text-1">
              Care to Join us?
            </p>
            <div className="lists">
              <div className="content">
                Join a team of exceptional minds committed to creating
                brilliance. This is also the right place to experience the best
                in agility.
              </div>
            </div>
            <div className="join_us_button">
              <button>Join Us</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center  ">
            <div className="imagessecond">
              <img className="rect-2-1" src={rect1} alt="" />
              <img className="rect-2-2" src={rect2} alt="" />
              <img className="rect-2-3" src={rect3} alt="" />
              <img className="rect-2-4" src={rect4} alt="" />
              <img className="wall-2-2" src={wall} alt="" />
              <img className="mainimagesecond" src={Main} alt="" />
              <img className="backimagesecond" src={Back} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
