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
import bulb_glow from "./images/bulb_glow.png";
import goal_icon from "./images/goal_icon.png";
import goal_text from "./images/goal_text.png";
import goal_line from "./images/goal_line.png";
import idea_icon from "./images/idea_icon.png";
import idea_text from "./images/idea_text.png";
import idea_line from "./images/idea_line.png";
import plan_icon from "./images/plan_icon.png";
import plan_text from "./images/plan_text.png";
import plan_line from "./images/plan_line.png";
import strategy_icon from "./images/strategy_icon.png";
import strategy_text from "./images/strategy_text.png";
import strategy_line from "./images/strategy_line.png";
import team_icon from "./images/team_icon.png";
import team_line from "./images/team_line.png";
import team_text from "./images/team_text.png";
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
          <div className="main_bulb_bulb_image">
            <img src={main_bulb} alt="" className="center_bulb" />

            <div className="bulb_glow">
              <img src={bulb_glow} alt="" />
            </div>

            <div className="goal_icon">
              <img src={goal_icon} alt="" />
            </div>

            <div className="goal_line">
              <img src={goal_line} alt="" />
            </div>

            <div className="goal_text">
              <img src={goal_text} alt="" />
            </div>

            <div className="idea_icon">
              <img src={idea_icon} alt="" />
            </div>

            <div className="idea_line">
              <img src={idea_line} alt="" />
            </div>

            <div className="idea_text">
              <img src={idea_text} alt="" />
            </div>

            <div className="plan_icon">
              <img src={plan_icon} alt="" />
            </div>

            <div className="plan_line">
              <img src={plan_line} alt="" />
            </div>

            <div className="plan_text">
              <img src={plan_text} alt="" />
            </div>

            <div className="strategy_icon">
              <img src={strategy_icon} alt="" />
            </div>

            <div className="strategy_line">
              <img src={strategy_line} alt="" />
            </div>

            <div className="strategy_text">
              <img src={strategy_text} alt="" />
            </div>

            <div className="team_icon">
              <img src={team_icon} alt="" />
            </div>

            <div className="team_line">
              <img src={team_line} alt="" />
            </div>

            <div className="team_text">
              <img src={team_text} alt="" />
            </div>
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
        </div>

        <div className="corporatefirst_fade_text">
          <img src={fade_text} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CorporateFirst;
