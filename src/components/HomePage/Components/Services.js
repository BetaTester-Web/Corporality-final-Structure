import React from "react";
import "./Services.css";
import vector_1 from "./images/vector_1.png";
import ellipse_1 from "./images/ellipse_1.png";

function Services() {
  function Show1() {
    document.getElementById("content_right_1").style.display = "block";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "none";
  }

  function Show2() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "block";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "none";
  }
  function Show3() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "block";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "none";
  }
  function Show4() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "block";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "none";
  }
  function Show5() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "block";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "none";
  }
  function Show6() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "block";
    document.getElementById("content_right_7").style.display = "none";
  }
  function Show7() {
    document.getElementById("content_right_1").style.display = "none";
    document.getElementById("content_right_2").style.display = "none";
    document.getElementById("content_right_3").style.display = "none";
    document.getElementById("content_right_4").style.display = "none";
    document.getElementById("content_right_5").style.display = "none";
    document.getElementById("content_right_6").style.display = "none";
    document.getElementById("content_right_7").style.display = "block";
  }

  return (
    <div className="services_container">
      <div className="services_heading">Services</div>
      <div className="button_container container">
        <div className="button_list">
          <div className="button_main button_active" onClick={Show1}>
            Go-to-Marketing
          </div>
          <div className="button_main" onClick={Show2}>
            Digital Media Markeing
          </div>
          <div className="button_main" onClick={Show3}>
            Strategic Consulting
          </div>
          <div className="button_main" onClick={Show4}>
            Corporate Level Strategy
          </div>
          <div className="button_main" onClick={Show5}>
            Product Strategy
          </div>
          <div className="button_main" onClick={Show6}>
            Brand Positioning
          </div>
          <div className="button_main" onClick={Show7}>
            Outsourced CXO
          </div>
        </div>
      </div>
      <div className="bottom_info">
        <div className="image_left col-lg-1"></div>
        <div
          className="content_right content_right_1 col-lg-9"
          id="content_right_1"
        >
          <div className="content_heading">
            For game changing business growth with product ‘push’ strategies:
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Clear plans and strategies
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Minimising time to market for all products
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Ability to react to alternating customer moods
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Reduced costs with reduced failed service launches
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_2 col-lg-9"
          id="content_right_2"
        >
          <div className="content_heading">
            Turning content into intelligent information
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Targeted campaigns producing clickable results
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Sentiment analysis with comprehensive social listening
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Plans that align to your distinctive business requirements
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Thrive on customer relationships and results
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_3 col-lg-9"
          id="content_right_3"
        >
          <div className="content_heading">
            Unmatched results with a unique approach to business growth
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Transformation consultants brimming with ideas
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Helping businesses become invincible in their areas
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />A solid team of thinkers that can
              help you follow through with your decisions
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Consultants who endeavour to achieve business transformation
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_4 col-lg-9"
          id="content_right_4"
        >
          <div className="content_heading">
            The intended maturity model and methodology
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Examines the readiness of the business to expedite revenue growth
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Initiating a tracking process that audits and diagnoses readiness
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Remapping visions to accomplish marketing goals and objectives
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Planning, segmentation and asset building
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_5 col-lg-9"
          id="content_right_5"
        >
          <div className="content_heading">
            Bringing product ideas to life for sustainable growth
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Distinguishing between marketing objectives and company value
              propositions
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Planning an appropriate and fool proof product release strategy
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Designing unique launch processes
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Monitoring service feedback alongside customer service and support
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_6 col-lg-9"
          id="content_right_6"
        >
          <div className="content_heading">
            Visualising important dimensions of your brand
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Redefining brand development and identity to strengthen your
              market standing
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Identifying high-growth high-profit firms that can fit into your
              database
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Positioning your brand in the professional services marketplace
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Distinct core brand positioning with a unique messaging strategy
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>

        <div
          className="content_right content_right_7 col-lg-9"
          id="content_right_7"
        >
          <div className="content_heading">
            Differentiated brand experiences
          </div>
          <ul className="content_info">
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Leading the change with impactful customer experiences
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Identifying appropriate control mechanisms
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Sustainable relationship goals by leveraging the on-demand model
            </li>
            <li className="content_info_points">
              <img src={vector_1} alt="" />
              Resolving all pain points to provide the best outcomes
            </li>
          </ul>
          <div className="bottom_button">
            <div className="button_text">Learn More</div>
            <div className="button_circle">
              <img src={ellipse_1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
