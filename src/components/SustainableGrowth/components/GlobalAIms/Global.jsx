import React from "react";
import "../GlobalAIms/Global.css";
import circle from "../GlobalAIms/circle1.png";
import twitter from "../GlobalAIms/twitter.png";
import arrow from "../GlobalAIms/arrow.png";
import linkedin from "../GlobalAIms/linkedin.png";

const Global = () => {
  return (
    <div>
      <div className="container container-Global d-flex justify-content-center flex-column align-items-center">
        <div className="row">
          <p className="Global-text-1">
            "By 2025, Corporality Global aims to become an epitome of
            sustainability, worldwide."
          </p>
        </div>
        <div className="row">
          <p className="Global-text-2">Priya Mishra</p>
        </div>
        <div className="row">
          <p className="Global-text-3">CEO, Corporality Global</p>
        </div>
        <div className="row d-flex justify-content-center  align-items-center">
          <div className="col">
            <a href="" className="global_link">
              <div className="social_icons_Sustainable_growth d-flex justify-content-center align-items-center">
                <div className="global_twitter_circle">
                  <img
                    src={circle}
                    alt=" "
                    className="circle1_Sustaible_growth"
                  />
                  <div className="global_twitter_icon">
                    <img
                      src={twitter}
                      alt=" "
                      className="twitter_Sustaible_growth"
                    />
                  </div>
                </div>
                <div className="global_twitter_arrow">
                  <img
                    src={arrow}
                    alt=" "
                    className="arrow1_Sustaible_growth"
                  />
                </div>
                <div className="global_twitter_text">Twitter</div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="">
              <div className="social_icons2_Sustainable_growth d-flex justify-content-center align-items-center">
                <img
                  src={circle}
                  alt=" "
                  className="circle1_Sustaible_growth"
                />
                <img
                  src={linkedin}
                  alt=" "
                  className="Linkedin_Sustaible_growth"
                />
                <img src={arrow} alt=" " className="arrow2_Sustaible_growth" />
                <p className="linkedin_text_SG">Linkedin</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
