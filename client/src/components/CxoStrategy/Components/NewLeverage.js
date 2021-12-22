import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./NewLeverage.css";
import leverage_card_1 from "../img/leverage/leverage_card_1.png";
import leverage_card_2 from "../img/leverage/leverage_card_2.png";
import leverage_card_3 from "../img/leverage/leverage_card_3.png";
import leverage_card_4 from "../img/leverage/leverage_card_4.png";

function NewLeverage() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container newleverage_container">
      <div className="newleverage_top_content">
        <div
          className="newleverage_top_heading"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Leverage the on-demand Model
        </div>
        <div
          className="newleverage_top_para"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Experience significant risk mitigation, organisational transformation
          and turnaround management with our executive CXO leadership that
          drives company growth through customer experience in a market that
          runs at warp-speed.
        </div>
      </div>
      <div className="newleverage_bottom_cards">
        <div className="newleverage_cards_row1">
          <div
            className="newleverage_cards_1 newleverage_leftside"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div className="newleverage_cards_imageside">
              <img src={leverage_card_1} alt="" />
            </div>
            <div className="newleverage_cards_textside">Increased Agitity</div>
          </div>
          <div
            className="newleverage_cards_1"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="newleverage_cards_imageside">
              <img src={leverage_card_2} alt="" />
            </div>
            <div className="newleverage_cards_textside">Reduced Costs</div>
          </div>
        </div>
        <div className="newleverage_cards_row2">
          <div
            className="newleverage_cards_1 newleverage_leftside"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="750"
          >
            <div className="newleverage_cards_imageside">
              <img src={leverage_card_3} alt="" />
            </div>
            <div className="newleverage_cards_textside ">Increased Agitity</div>
          </div>
          <div
            className="newleverage_cards_1"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <div className="newleverage_cards_imageside">
              <img src={leverage_card_4} alt="" />
            </div>
            <div className="newleverage_cards_textside">Reduced Costs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLeverage;
