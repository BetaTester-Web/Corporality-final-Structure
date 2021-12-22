import React, { useEffect } from "react";
import aos from 'aos'
import "../NewsLetter/NewsLetter.css";
import main from "../NewsLetter/main.png";
import back from "../NewsLetter/back.png";
import growmore from "../NewsLetter/growmore.png";
import learnmore from "../NewsLetter/learnmore.png";
import logo from "../NewsLetter/logo.png";
import rightrect from "../NewsLetter/rightrect.png";
import wall from "../NewsLetter/wall.png";

const NewsLetter = () => {
  useEffect(() => {
    aos.init({ duration: 3000});

  }, [])
  return (
    <div className="NewsLetter_Main_work">
      <img src={wall} alt=" " className="Wall_newsletter" />
      <img src={rightrect} alt=" " className="rect_newsletter" />

      <div className="container">
        <div className="row NewsLetter_full ">
          <div className="col-lg-6 ">
            <div className="text_NewsLetter  flex-column justify-content-center ">
              <p data-aos="fade-right" data-aos-delay="500" className="NewsLetter-Text-Heading">Work with us</p>
              <p data-aos="fade-right" data-aos-delay="500" className="NewsLetter-Text-1">
                Get a career with a company that truly understands your worth.
                Bring your curiosity and your most committed self to experience
                working with Corporality Global.
              </p>
              <p data-aos="fade-right" data-aos-delay="1000" className="NewsLetter-Text-2">
                Change is positive and long-lasting with us.
              </p>
              <div data-aos="fade-right" data-aos-delay="500" className="aos-in-button">
                <button className="button-seventh">Apply here</button>
              </div>
              <br />
              <br />

              <p data-aos="fade-right" data-aos-delay="500" className="News_letter-main">
                Our newsletter is more than just information Subscribe to see
                the difference
              </p>
              <div data-aos="fade-right" data-aos-delay="2000" className="Text_newsletter_email d-flex  align-items-center">
                <input
                  className="emailinput"
                  type="text"
                  name=""
                  placeholder="Enter your Email"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Enter your Email";
                  }}
                />
                <span>
                  <a className="subscribe" href="">
                    Subscribe
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 newsLetter_image_section">
            <img src={growmore} alt=" " className="growmore_newsletter" />
            <img src={learnmore} alt=" " className="learnmore_newsletter" />
            <img src={logo} alt=" " className="logo_newsletter" />

            <div className="Main_back_NewsLetter">
              <div className="Work-newsletter-polygon9">
                <div data-aos="fade-left" data-aos-delay="500">
                  <img src={main} alt="" />
                </div>
              </div>
              <img src={back} className="back_newsLetter" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
