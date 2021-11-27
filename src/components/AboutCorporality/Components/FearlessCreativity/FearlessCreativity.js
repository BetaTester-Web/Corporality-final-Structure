import React from "react";
import "./FearlessCreativity.css";
import main_image from "./images/main_image.png";
import point_1 from "./images/point_1.png";
import point_2 from "./images/point_2.png";
import point_3 from "./images/point_3.png";

function FearlessCreativity() {
  return (
    <div className="fearlesscreativity_main">
      <div className="fearless_image_side">
        <div className="fearless_main_image">
          <img src={main_image} alt="" />
        </div>
      </div>
      <div className="fearless_content_side">
        <div className="fearless_heading">
          Ideation with fearless creativity
        </div>
        <div className="fearless_content">
          <div className="fearless_content_1">
            <div className="fearless_content_imageside">
              <img src={point_1} alt="" />
            </div>
            <div className="fearless_content_textside">
              <div className="textside_heading">
                We partner with you to give you true value that lasts
              </div>
              <div className="textside_content">
                Corporality Global works on the most practical terms, and helps
                clients transform businesses to be as future-ready as they can.
                As innovators, we are convinced there’s no single way to ignite
                a business to success; we believe in empowering people with
                their own
              </div>
            </div>
          </div>
          <div className="fearless_content_2">
            <div className="fearless_content_imageside">
              <img src={point_2} alt="" />
            </div>
            <div className="fearless_content_textside">
              <div className="textside_heading">Our beliefs</div>
              <div className="textside_content">
                We believe in rapid, repeatable growth and success. Corporality
                Global is committed to providing real-world content and digital
                marketing strategies supported by tactics that really work. We
                make an impact right from the beginning.
              </div>
            </div>
          </div>
          <div className="fearless_content_3">
            <div className="fearless_content_imageside">
              <img src={point_3} alt="" />
            </div>
            <div className="fearless_content_textside">
              <div className="textside_heading">Inclusivity</div>
              <div className="textside_content">
                Corporality Global and inclusion go hand-in-hand. We do not
                encourage any discrimination that could be barriers to
                communication.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FearlessCreativity;
