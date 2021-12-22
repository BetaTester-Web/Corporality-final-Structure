import React from "react";
import "./NewContinously.css";

function NewContinously() {
  return (
    <div className="container-fluid newcontinously_parent">
      <div className="newcontinously_video_container">
        <video
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duartion="3000"
          autoPlay={true}
          muted
          loop
          className="newcontinously_video"
        >
          <source
            src="./img/CxoStrategy/img/continously/website2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="newcontinously_gradientbox">
          <div
            className="newcontinously_gradheading"
            data-aos="fade-left"
            data-aos-duartion="3000"
          >
            Continuously working towards an organisation’s relationship goals
          </div>
          <div
            className="newcontinously_gradtext"
            data-aos="fade-left"
            data-aos-duartion="3000"
          >
            A long-term sustainable customer plan is better than a short-term
            non-sustainable marketing strategy that is expensive. Choose the
            best defence against the churn as you hire a CXO that can navigate
            your business across complex scenarios by inculcating discipline
            into your customer service plan. Our on-demand leadership moves
            swiftly from concept to execution without hitting the learning
            curve, utilising strategic and operational expertise.
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewContinously;
