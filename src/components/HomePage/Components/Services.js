import React, { createRef, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services2.css";
import ellipse_1 from "./images/ellipse_1.png";
import vector_1 from "./images/vector_1.png";

function Services() {
  const showOneButton = (ele) => {
    const buttons = document.querySelectorAll(".button_main");
    ele.classList.add("button_active");
    for (var i of buttons) {
      if (i !== ele) {
        i.classList.remove("button_active");
      }
    }
  };
  const showOneDiv = (index) => {
    document.querySelector(
      `.points_container:nth-child(${index})`
    ).style.display = "block";
    const divs = document.querySelectorAll(
      `.points_container:not(:nth-child(${index}))`
    );
    for (let i of divs) {
      i.style.display = "none";
    }
  };

  const buttonHandler = ({ ele, index }) => {
    showOneButton(ele);
    showOneDiv(index);
  };

  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="services_container_parent">
      <div className="container">
        <div className="main_services_container">
          <div className="services_heading">Services</div>
          <div className="button_container container">
            <div className="button_list">
              <div
                className="button_main button_active"
                id="button_main_1"
                onClick={(e) => buttonHandler({ ele: e.target, index: 1 })}
              >
                Go-to-Marketing
              </div>
              <div
                className="button_main"
                id="button_main_2"
                onClick={(e) => buttonHandler({ ele: e.target, index: 2 })}
              >
                Digital Media Markeing
              </div>
              <div
                className="button_main"
                id="button_main_3"
                onClick={(e) => buttonHandler({ ele: e.target, index: 3 })}
              >
                Strategic Consulting
              </div>
              <div
                className="button_main"
                id="button_main_4"
                onClick={(e) => buttonHandler({ ele: e.target, index: 4 })}
              >
                Corporate Level Strategy
              </div>
              <div
                className="button_main"
                id="button_main_5"
                onClick={(e) => buttonHandler({ ele: e.target, index: 5 })}
              >
                Product Strategy
              </div>
              <div
                className="button_main"
                id="button_main_6"
                onClick={(e) => buttonHandler({ ele: e.target, index: 6 })}
              >
                Brand Positioning
              </div>
              <div
                className="button_main"
                id="button_main_7"
                onClick={(e) => buttonHandler({ ele: e.target, index: 7 })}
              >
                Outsourced CXO
              </div>
            </div>
          </div>
          <div className="main_content_container">
            <div className="picture_side "></div>
            <div className="right_content_side container">
              <div
                className="aos-init"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
              >
                <div
                  className="container container_padding points_container"
                  id="content_points_1"
                >
                  <div className="right_content_heading">
                    For game changing business growth with product ‘push’
                    strategies:
                  </div>
                  <div className="right_content_text">
                    <ul className="right_content_info">
                      <li className="right_content_info_points ">
                        Clear plans and strategies
                      </li>
                      <li
                        className="right_content_info_points aos-init"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="0"
                      >
                        Minimising time to market for all products
                      </li>
                      <li
                        className="right_content_info_points aos-init"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="0"
                      >
                        Ability to react to alternating customer moods
                      </li>
                      <li
                        className="right_content_info_points aos-init"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="0"
                      >
                        Reduced costs with reduced failed service launches
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_2"
              >
                <div className="right_content_heading">
                  Turning content into intelligent information
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Targeted campaigns producing clickable results
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Sentiment analysis with comprehensive social listening
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Plans that align to your distinctive business requirements
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Thrive on customer relationships and results
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_3"
              >
                <div className="right_content_heading">
                  Unmatched results with a unique approach to business growth
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Transformation consultants brimming with ideas
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Helping businesses become invincible in their areas
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      A solid team of thinkers that can help you follow through
                      with your decisions
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Consultants who endeavour to achieve business
                      transformation
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_4"
              >
                <div className="right_content_heading">
                  The intended maturity model and methodology
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Examines the readiness of the business to expedite revenue
                      growth
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Initiating a tracking process that audits and diagnoses
                      readiness
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Remapping visions to accomplish marketing goals and
                      objectives
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Planning, segmentation and asset building
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_5"
              >
                <div className="right_content_heading">
                  Bringing product ideas to life for sustainable growth
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Distinguishing between marketing objectives and company
                      value propositions
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Planning an appropriate and fool proof product release
                      strategy
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Designing unique launch processes
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Monitoring service feedback alongside customer service and
                      support
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_6"
              >
                <div className="right_content_heading">
                  Visualising important dimensions of your brand
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Redefining brand development and identity to strengthen
                      your market standing
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Identifying high-growth high-profit firms that can fit
                      into your database
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Positioning your brand in the professional services
                      marketplace
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Distinct core brand positioning with a unique messaging
                      strategy
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="container container_padding points_container"
                id="content_points_7"
              >
                <div className="right_content_heading">
                  Differentiated brand experiences
                </div>
                <div className="right_content_text">
                  <ul className="right_content_info">
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Leading the change with impactful customer experiences
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Identifying appropriate control mechanisms
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Sustainable relationship goals by leveraging the on-demand
                      model
                    </li>
                    <li
                      className="right_content_info_points aos-init"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="0"
                    >
                      Resolving all pain points to provide the best outcomes
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right_content_button">
                <div className="bottom_button_text">Learn More</div>
                <div className="bottom_button_circle">
                  <img src={ellipse_1} alt="Click Here" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
