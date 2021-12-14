import React from "react";
import "./CardsChart.css";
import joiner from "./images/Joiner.png";
import Accountability from "./images/Accountability.png";
import Action from "./images/Action.png";
import Content from "./images/Content.png";
import EmailApproach from "./images/EmailApproach.png";
import Engine from "./images/Engine.png";
import Implementation from "./images/Implementation.png";
import Inbound from "./images/Inbound.png";
import MarketingAudit from "./images/MarketingAudit.png";
import MasterMind from "./images/MasterMind.png";
import Model from "./images/Model.png";
import Performance from "./images/Performance.png";
import Preparation from "./images/Preparation.png";
import Reporting from "./images/Reporting.png";
import ROI from "./images/ROI.png";
import Searches from "./images/Searches.png";
import SEO from "./images/SEO.png";
import SocialMedia from "./images/SocialMedia.png";
import Strategy from "./images/Strategy.png";
import Talent from "./images/Talent.png";
import Targeting from "./images/Targeting.png";
import Testing from "./images/Testing.png";
import Tweak from "./images/Tweak.png";
import LineHorizontal from "./images/LineHorizontal.png";
import LineVertical from "./images/LineVertical.png";

function CardsChart() {
  return (
    <>
      <div className="container">
        <div className="CardsChart_uppertext">
          <div className="CardsChart_uppertext_heading">
            From pitch to picture perfect scenario
          </div>
          <div className="CardsChart_uppertext_description">
            The process of starting a digital media marketing with Corporality
            Global -An innovative lead generation and marketing company in
            Sydney, and approaching the right strategy can be highly intended to
            your true audience. We've created this service Edition to accompany
            founders in this journey, from getting their vision and approaching
            potential buyers' persona naturally.
          </div>
        </div>

        <div className="CardsChart_maincontainer">
          <div class="CardsChart_div1">
            <img src={LineHorizontal} alt="" className="cardschart_line1" />
            <img
              src={LineVertical}
              alt=""
              className="cardschart_linevertical"
            />
            <div className="CardsChart_textbox">
              <div className="CardsChart_textbox_text">Planning Phase</div>
              <div className="CardsChart_textbox_joiner">
                <img src={joiner} alt="" />
              </div>
            </div>
          </div>
          <div class="CardsChart_div2">
            <div className="CardsChart_div_image">
              <img src={MarketingAudit} alt="" />
            </div>
            <div className="CardsChart_div_text">Marketing Audit</div>
          </div>
          <div class="CardsChart_div3">
            <div className="CardsChart_div_image">
              <img src={Inbound} alt="" />
            </div>
            <div className="CardsChart_div_text">
              Inbound Marketing Concept to proposed plan
            </div>
          </div>
          <div class="CardsChart_div4">
            <div className="CardsChart_div_image">
              <img src={MasterMind} alt="" />
            </div>
            <div className="CardsChart_div_text">Master minding workshop</div>
          </div>
          <div class="CardsChart_div5">
            <div className="CardsChart_div_image">
              <img src={Accountability} alt="" />
            </div>
            <div className="CardsChart_div_text">
              Presentation and Accountability
            </div>
          </div>
          <div class="CardsChart_div6">
            <div className="CardsChart_div_image">
              <img src={Talent} alt="" />
            </div>
            <div className="CardsChart_div_text">Talent Alignment</div>
          </div>
          <div class="CardsChart_div7">
            <div className="CardsChart_div_image">
              <img src={Strategy} alt="" />
            </div>
            <div className="CardsChart_div_text">Strategy Preparation</div>
          </div>
          <div class="CardsChart_div8">
            <img src={LineHorizontal} alt="" className="cardschart_line2" />
            <div className="CardsChart_textbox">
              <div className="CardsChart_textbox_text">Prep Phase</div>
              <div className="CardsChart_textbox_joiner">
                <img src={joiner} alt="" />
              </div>
            </div>
          </div>
          <div class="CardsChart_div9">
            <div className="CardsChart_div_image">
              <img src={Targeting} alt="" />
            </div>
            <div className="CardsChart_div_text">Channel Targeting</div>
          </div>
          <div class="CardsChart_div10">
            <div className="CardsChart_div_image">
              <img src={SocialMedia} alt="" />
            </div>
            <div className="CardsChart_div_text">
              Social Media Marketing Strategy
            </div>
          </div>
          <div class="CardsChart_div11">
            <div className="CardsChart_div_image">
              <img src={Content} alt="" />
            </div>
            <div className="CardsChart_div_text">Content Strategy</div>
          </div>
          <div class="CardsChart_div12">
            <div className="CardsChart_div_image">
              <img src={SEO} alt="" />
            </div>
            <div className="CardsChart_div_text">SEO Strategy</div>
          </div>
          <div class="CardsChart_div13">
            <div className="CardsChart_div_image">
              <img src={Searches} alt="" />
            </div>
            <div className="CardsChart_div_text">Social Searches Strategy</div>
          </div>
          <div class="CardsChart_div14">
            <div className="CardsChart_div_image">
              <img src={EmailApproach} alt="" />
            </div>
            <div className="CardsChart_div_text">Email Marketing Approach</div>
          </div>
          <div class="CardsChart_div15">
            <img src={LineHorizontal} alt="" className="cardschart_line3" />
            <div className="CardsChart_textbox">
              <div className="CardsChart_textbox_text">Execution Phase</div>
              <div className="CardsChart_textbox_joiner">
                <img src={joiner} alt="" />
              </div>
            </div>
          </div>
          <div class="CardsChart_div16">
            <div className="CardsChart_div_image">
              <img src={Implementation} alt="" />
            </div>
            <div className="CardsChart_div_text">
              On-page SEO Implementation
            </div>
          </div>
          <div class="CardsChart_div17">
            <div className="CardsChart_div_image">
              <img src={Action} alt="" />
            </div>
            <div className="CardsChart_div_text">
              Off-page SEO Implementation
            </div>
          </div>
          <div class="CardsChart_div18">
            <div className="CardsChart_div_image">
              <img src={Engine} alt="" />
            </div>
            <div className="CardsChart_div_text">Search Engine Marketing</div>
          </div>
          <div class="CardsChart_div19">
            <div className="CardsChart_div_image">
              <img src={Preparation} alt="" />
            </div>
            <div className="CardsChart_div_text">Content Preparation</div>
          </div>
          <div class="CardsChart_div20">
            <div className="CardsChart_div_image">
              <img src={Testing} alt="" />
            </div>
            <div className="CardsChart_div_text">
              A/B Testing on Inbound Strategy
            </div>
          </div>
          <div class="CardsChart_div21"> </div>
          <div class="CardsChart_div22">
            <img src={LineHorizontal} alt="" className="cardschart_line4" />
            <div className="CardsChart_textbox">
              <div className="CardsChart_textbox_text">Monitoring Phase</div>
              <div className="CardsChart_textbox_joiner">
                <img src={joiner} alt="" />
              </div>
            </div>
          </div>
          <div class="CardsChart_div23">
            <div className="CardsChart_div_image">
              <img src={Tweak} alt="" />
            </div>
            <div className="CardsChart_div_text">Test, Tweak and treat</div>
          </div>
          <div class="CardsChart_div24">
            <div className="CardsChart_div_image">
              <img src={Performance} alt="" />
            </div>
            <div className="CardsChart_div_text">
              Performance and Benchmarking
            </div>
          </div>
          <div class="CardsChart_div25">
            <div className="CardsChart_div_image">
              <img src={Reporting} alt="" />
            </div>
            <div className="CardsChart_div_text">Reporting and Feedback</div>
          </div>
          <div class="CardsChart_div26">
            <div className="CardsChart_div_image">
              <img src={ROI} alt="" />
            </div>
            <div className="CardsChart_div_text">ROI Evaluation</div>
          </div>
          <div class="CardsChart_div27">
            <div className="CardsChart_div_image">
              <img src={Model} alt="" />
            </div>
            <div className="CardsChart_div_text">Maturation Model</div>
          </div>
          <div class="CardsChart_div28"> </div>
        </div>
      </div>
    </>
  );
}

export default CardsChart;
