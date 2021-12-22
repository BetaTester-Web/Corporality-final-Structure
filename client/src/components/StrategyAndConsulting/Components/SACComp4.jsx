import "./SACComp4.css";
import rec13 from "./images/rec13.png";
import arrow from "./images/arrow.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SACComp4() {
  useEffect(() => {
    AOS.init({disable: "mobile"});
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="p-0 container sacc4Container d-flex flex-column justify-content-center">
        <div className="sacc4Top d-flex flex-column align-items-center">
          <p className="sacc4Heading1">
            Leverage the power of a unified approach to marketing innovation
          </p>
          <p className="sacc4Para1">
            Rely on our global network of people – supported by powerful assets,
            platforms and partnerships – to help you move swiftly from idea to
            execution.
          </p>
        </div>
        <div className="sacc4Middle d-flex flex-row flex-wrap justify-content-center">
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="sacc4RecCard"
          >
            <p className="sacc4Heading2">Intuitive Solutions</p>
            <p className="sacc4Para2">
              Our Digital marketing experts in Sydney experts will answer some
              of your most complex business questions to provide solutions with
              long-term foresight
            </p>
            <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
              <img className="sacc4Rec13" src={rec13} alt="" />
              <img className="sacc4Arrow" src={arrow} alt="" />
              <span className="sacc4Button">Read More</span>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-duration="3000"
            className="sacc4RecCard"
          >
            <p className="sacc4Heading2">Deep Industry Expertise</p>
            <p className="sacc4Para2">
              Corporality employs the best minds in the business that goes above
              and beyond to drive performance and growth
            </p>
            <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
              <img className="sacc4Rec13" src={rec13} alt="" />
              <img className="sacc4Arrow" src={arrow} alt="" />
              <span className="sacc4Button">Read More</span>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="600"
            data-aos-duration="3000"
            className="sacc4RecCard"
          >
            <p className="sacc4Heading2">Functional Knowledge</p>
            <p className="sacc4Para2">
              We reimagine business functions to create more scalable and
              resilient solutions that fortify industry presence
            </p>
            <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
              <img className="sacc4Rec13" src={rec13} alt="" />
              <img className="sacc4Arrow" src={arrow} alt="" />
              <span className="sacc4Button">Read More</span>
            </div>
          </div>
        </div>
        <div className="sacc4Bottom d-flex flex-column">
          <div className="sacc4Row1 d-flex flex-row justify-content-between">
            <div data-aos="flip-left"
              data-aos-duration="3000" className="">
              <div className="sacc4DiamondCard sacc4D1 d-flex justify-content-center align-items-center">
                <div className="sacc4DCContent">
                  <p className="sacc4Heading2">Customer-Centered Design</p>
                  <p className="sacc4Para2">
                    We craft newer and better customer experiences that increase
                    satisfaction and loyalty leading to business growth
                  </p>
                  <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                    <img className="sacc4Rec13" src={rec13} alt="" />
                    <img className="sacc4Arrow" src={arrow} alt="" />
                    <span className="sacc4Button">Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-right"
              data-aos-duration="3000" data-aos-delay="1000" className="">
              <div className="sacc4DiamondCard sacc4D2 d-flex justify-content-center align-items-center">

                <div className="sacc4DCContent">
                  <p className="sacc4Heading2">AI-Powered Insights</p>
                  <p className="sacc4Para2">
                    Corporality uses the power of AI, analytics and automation to
                    gather thoughtful insights that fuel innovation and empowers
                    organisations to make better marketing decisions.
                  </p>
                  <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                    <img className="sacc4Rec13" src={rec13} alt="" />
                    <img className="sacc4Arrow" src={arrow} alt="" />
                    <span className="sacc4Button">Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sacc4DiamondCard sacc4BlankDiamondCard1 sacc4BlankDiamondCard"></div>
          </div>
          <div className="sacc4Row2 d-flex flex-row justify-content-between">
            <div className="sacc4DiamondCard sacc4BlankDiamondCard2 sacc4BlankDiamondCard"></div>
            <div data-aos="flip-left"
              data-aos-duration="3000" data-aos-delay="1500" className="">
              <div className="sacc4DiamondCard sacc4D3 d-flex justify-content-center align-items-center">

                <div className="sacc4DCContent">
                  <p className="sacc4Heading2">Customer-Centered Design</p>
                  <p className="sacc4Para2">
                    We craft newer and better customer experiences that increase
                    satisfaction and loyalty leading to business growth
                  </p>
                  <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                    <img className="sacc4Rec13" src={rec13} alt="" />
                    <img className="sacc4Arrow" src={arrow} alt="" />
                    <span className="sacc4Button">Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-right"
              data-aos-duration="3000" data-aos-delay="2000" className="">
              <div className="sacc4DiamondCard sacc4D4 d-flex justify-content-center align-items-center">

                <div className="sacc4DCContent">
                  <p className="sacc4Heading2">AI-Powered Insights</p>
                  <p className="sacc4Para2">
                    Corporality uses the power of AI, analytics and automation to
                    gather thoughtful insights that fuel innovation and empowers
                    organisations to make better marketing decisions.
                  </p>
                  <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                    <img className="sacc4Rec13" src={rec13} alt="" />
                    <img className="sacc4Arrow" src={arrow} alt="" />
                    <span className="sacc4Button">Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
