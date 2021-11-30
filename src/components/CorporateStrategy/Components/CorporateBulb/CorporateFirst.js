import React from "react";
import corporatefirst_facebook from "./images/corporatefirst_facebook.png";
import corporatefirst_youtube from "./images/corporatefirst_youtube.png";
import corporatefirst_pinterest from "./images/corporatefirst_pinterest.png";
import corporatefirst_linkedin from "./images/corporatefirst_linkedin.png";
import corporatefirst_instagram from "./images/corporatefirst_instagram.png";
import corporatefirst_twitter from "./images/corporatefirst_twitter.png";
import fade_text from "./images/fade_text.png";
import main_bulb from "./images/main_bulb.png";
import saturn from "./images/saturn.png";
import small_stars from "./images/small_stars.png";
import bottom_phone from "./images/bottom_phone.png";
import bottom_cloud from "./images/bottom_cloud.png";
import "./CorporateFirst.css";

function CorporateFirst() {
  return (
    <div className="corporatefirst_main_container">
      <div className="corporatefirst_icontext_container">
        <div className="corporatefirst_left_icons">
          <div className="corporatefirst_facebook_icon">
            <img src={corporatefirst_facebook} alt="" />
          </div>
          <div className="corporatefirst_twitter_icon">
            <img src={corporatefirst_twitter} alt="" />
          </div>
          <div className="corporatefirst_instagram_icon">
            <img src={corporatefirst_instagram} alt="" />
          </div>
          <div className="corporatefirst_linkedin_icon">
            <img src={corporatefirst_linkedin} alt="" />
          </div>
          <div className="corporatefirst_pinterest_icon">
            <img src={corporatefirst_pinterest} alt="" />
          </div>
          <div className="corporatefirst_youtube_icon">
            <img src={corporatefirst_youtube} alt="" />
          </div>
        </div>
        <div className="corporatefirst_left_text">
          <div className="corporatefirst_text_heading">Corporate Strategy</div>
          <div className="corporatefirst_text_description">
            Resolutions to all your corporate strategy issues Multiple problems,
            one solution
          </div>
          <div className="corporatefirst_text_button">
            <button>Book Your Discovery Session</button>
          </div>
        </div>
      </div>
      <div className="corporatefirst_right_images">
        <div className="corporatefirst_main_bulb">
          <img src={main_bulb} alt="" />
        </div>
        <div className="corporatefirst_bottom_cloud">
          <img src={bottom_cloud} alt="" />
        </div>

        <div className="corporatefirst_bottom_phone">
          <img src={bottom_phone} alt="" />
        </div>

        <div className="corporatefirst_small_stars">
          <img src={small_stars} alt="" />
        </div>

        <div className="corporatefirst_saturn">
          <img src={saturn} alt="" />
        </div>

        <div className="corporatefirst_fade_text">
          <img src={fade_text} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CorporateFirst;
