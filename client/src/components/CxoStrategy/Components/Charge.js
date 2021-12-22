import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CxoStrategy.css"

export default function Charge() {
  useEffect(() => {
    Aos.init({ disable: "mobile" });

  });

  return (
    <>
      <div className="container">
        <div data-aos="fade-up" data-aos-delay="900" className="charge-vertical-strip"></div>

        <div className=" charge-horizontal-strip">
          <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">Bring a CXO who can lead the charge </p>
        </div>

        <div className="charge-img-1"  >
          <img scr='./img/CxoStrategy/img/charge/lady.png' data-aos="fade-right" data-aos-duration="1500" />;
        </div>

        <div className="charge-img-2">
          <video data-aos="fade-left" data-aos-duration="1500" autoPlay={true} muted loop id="myVideo">
            <source src="./img/CxoStrategy/img/charge/website.mp4" type="video/mp4" />
          </video>
        </div>

        <br />
        <br />
        <br />
      </div>

    </>
  );
}
// data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500"