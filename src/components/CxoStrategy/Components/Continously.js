import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./CxoStrategy.css"

export default function Continously() {

  useEffect(() => {
    Aos.init();
})


  return (
    <>
      <div class="video-box-container ">
        <video
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duartion="3000"
          autoPlay={true}
          muted
          loop
          className="myVideo2"
        >
          <source src="./img/CxoStrategy/img/continously/website2.mp4" type="video/mp4" />
        </video>

        <div class="cxo-video-box-container">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">
            Continuously working towards an organisation’s relationship goals
          </h1>
          <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1200">
            A long-term sustainable customer plan is better than a short-term
            non-sustainable marketing strategy that is expensive. Choose the
            best defence against the churn as you hire a CXO that can navigate
            your business across complex scenarios by inculcating discipline
            into your customer service plan. Our on-demand leadership moves
            swiftly from concept to execution without hitting the learning
            curve, utilising strategic and operational expertise.
          </p>
        </div>
      </div>
      <div class="video-box-container-padding"></div>
    </>
  );
}
