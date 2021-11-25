import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Charge() {
  useEffect(() => {
    Aos.init();
    Aos.init({disable: 'mobile'});
  });

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="900" className="container charge-vertical-strip"></div>
      
      <div className="container charge-horizontal-strip">
        <p >Bring a CXO who can lead the charge </p>
      </div>
      
      <div className="charge-img-1">
        <img scr='./img/CxoStrategy/img/charge/lady.png'/>;
      </div>
      
      <div className="container charge-img-2">
        <video data-aos="fade-left" data-aos-duration="1500" autoPlay={true} muted loop id="myVideo">
          <source src="./img/CxoStrategy/img/charge/website.mp4" type="video/mp4" />
        </video>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
// data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500"