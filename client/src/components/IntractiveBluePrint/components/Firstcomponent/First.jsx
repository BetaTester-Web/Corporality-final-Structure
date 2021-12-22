import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "../Firstcomponent/Firstcomponent.css";
import icon1 from "../Firstcomponent/icon1.png";
import icon2 from "../Firstcomponent/icon2.png";
import icon3 from "../Firstcomponent/icon3.png";
import icon4 from "../Firstcomponent/icon4.png";
import icon5 from "../Firstcomponent/icon5.png";
import icon6 from "../Firstcomponent/icon6.png";


const First = () => {
  useEffect(() => {
    aos.init({ disable: "mobile" });
  }, []);
  return (
    <div className="cards_interactiveBlueprint">
      <div className="container">
        <div className="row">
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="cards_text_iB_heading">100% customised for your company’s Goals and budgets </p>
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="cards_text_iB_description">Website blueprints are never alike. Corporality Global takes utmost care in preparing the profitable website blueprints that are customised for your business and meet your company’s objectives and budget goals.</p>
        </div>
        <div className="interactive_cards">
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500" className="interactive_card1">
            <div className="card-1-blueprint-interactive">
              <div className="interactive_card_image">
                <img src={icon1} alt="" />
              </div>
              <div className="interactive_card_heading">Explore</div>
              <div className="interactive_card_text">
                Tracking and measuring results and seeking the impact of the website
                on the business while exploring current marketing scenarios
              </div>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000" className="interactive_card2">
            <div className="interactive_card_image">
              <img src={icon2} alt="" />
            </div>
            <div className="interactive_card_heading">Audience</div>
            <div className="interactive_card_text">
              Creating content targeted to a relevant consumer behaviour, after
              performing a high-level assessment of your current audience and
              their stages across the marketing funnel
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1500" className="interactive_card3">
            <div className="interactive_card_image">
              <img src={icon3} alt="" />
            </div>
            <div className="interactive_card_heading">Design</div>
            <div className="interactive_card_text">
              Differentiating businesses through intentional user experiences that
              aligns with brand requirements using mood boards, and outlining
              design expectations
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2000" className="interactive_card4">
            <div className="interactive_card_image">
              <img src={icon4} alt="" />
            </div>
            <div className="interactive_card_heading">Scope</div>
            <div className="interactive_card_text interactive_card_4_change">
              Managing project scope and budgets while prioritising specific
              features and functionality
            </div>
          </div>
          <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="2500" className="interactive_card5">
            <div className="interactive_card_image">
              <img src={icon5} alt="" />
            </div>
            <div className="interactive_card_heading">Conversions</div>
            <div className="interactive_card_text">
              Increasing visitors and conversions while achieving marketing
              objectives by creating persuasive landing pages
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="3000" className="interactive_card6">
            <div className="interactive_card_image heading-last-Ib">
              <img src={icon6} alt="" />
            </div>
            <div className="interactive_card_heading ">
              Call to Action Analysis
            </div>
            <div className="interactive_card_text interactive_card_6_change">
              Providing persuasive recommendations that coerce your prospects to
              take specific actions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
