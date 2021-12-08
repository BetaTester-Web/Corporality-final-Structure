import React from "react";
import "./GradBox.css";
import download from "./images/download.png";
import download_arrow from "./images/download_arrow.png";

const GradBox = () => {
  return (
    <div className="container">
      <div className="grad_box">
        <h1 className="grad_heading">Customer Experience (CX) Strategy</h1>
        <p className="grad_para">
          While frustrating and friction-filled customer experience still
          exists, no company sets out to deliver a poor customer experience.
          Over the past decade, many companies have undertaken customer
          experience initiatives and they regularly measure and monitor customer
          satisfaction scores, Net Promoter scores, and customer feedback.
          However, market leaders go a step further: they can directly connect
          customer experience – and the moments within a customer’s journey – to
          revenue growth. In short, market leaders have figured out how to
          monetize CX.
        </p>

        <div className="bottom_area">
          <div className="moving_icon">
            <img src={download} alt="" />
            <img src={download_arrow} alt="" className="front_arrow" />
          </div>
          <div className="explore_text">Explore</div>
        </div>
      </div>
    </div>
  );
};

export default GradBox;
