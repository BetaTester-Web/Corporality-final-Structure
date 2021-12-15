import React from "react";
import "./BrandFirst.css";
import brandposition_background_lines from "./images/brandposition_background_lines.png";
import brandposition_bottom_rect from "./images/brandposition_bottom_rect.png";
import brandposition_call from "./images/brandposition_call.png";
import brandposition_center_diamond from "./images/brandposition_center_diamond.png";
import brandposition_companyimage from "./images/brandposition_companyimage.png";
import brandposition_customer_loyalty from "./images/brandposition_customer_loyalty.png";
import brandposition_fb from "./images/brandposition_fb.png";
import brandposition_ig from "./images/brandposition_ig.png";
import brandposition_linkdin from "./images/brandposition_linkdin.png";
import brandposition_omni from "./images/brandposition_omni.png";
import brandposition_pinterest from "./images/brandposition_pinterest.png";
import brandposition_relatable from "./images/brandposition_relatable.png";
import brandposition_right_bg from "./images/brandposition_right_bg.png";
import brandposition_right_twice_rect from "./images/brandposition_right_twice_rect.png";
import brandposition_top_rect from "./images/brandposition_top_rect.png";
import brandposition_twitter from "./images/brandposition_twitter.png";
import brandposition_yt from "./images/brandposition_yt.png";

function BrandFirst() {
  return (
    <div className="brandposition_background_parent">
      <div className="brandposition_first_socialicons">
        <div className="brandposition_banner_facebook">
          <img src={brandposition_fb} alt="" />
        </div>
        <div className="brandposition_banner_twitter">
          <img src={brandposition_twitter} alt="" />
        </div>
        <div className="brandposition_banner_instagram">
          <img src={brandposition_ig} alt="" />
        </div>
        <div className="brandposition_banner_linkedin">
          <img src={brandposition_linkdin} alt="" />
        </div>
        <div className="brandposition_banner_pinterest">
          <img src={brandposition_pinterest} alt="" />
        </div>
        <div className="brandposition_banner_youtube">
          <img src={brandposition_yt} alt="" />
        </div>
      </div>
      <div className="brandposition_banner_call">
        <img src={brandposition_call} alt="" />
      </div>
      <div className="container">
        <div className="brandposition_main_container">
          <div className="brandposition_first_textside">
            <div className="brandposition_first_textside_heading">
              EVERY BRAND HAS A STORY AND EVERY STORY IS UNIQUE
            </div>
            <div className="brandposition_first_textside_description">
              Big brands have one thing in common - they have a solid brand
              positioning strategy. Businesses must invest in a strong brand
              marketing strategy to thrive in a highly competitive market. Why?
              The proof lies in the numbers. Companies continuously investing in
              brand positioning strategies can see an average increase in
              revenue between 10 and 20%.
            </div>
          </div>
          <div className="brandposition_first_imageside">
            <div className="brandposition_first_backgroundline">
              <img
                src={brandposition_background_lines}
                alt=""
                className="background_line_img"
              />
              <div className="brandposition_companyimage">
                <img src={brandposition_companyimage} alt="" />
              </div>
              <div className="brandposition_customerloyalty">
                <img src={brandposition_customer_loyalty} alt="" />
              </div>
              <div className="brandposition_relatable">
                <img src={brandposition_relatable} alt="" />
              </div>
              <div className="brandposition_omni">
                <img src={brandposition_omni} alt="" />
              </div>
              <div className="brandposition_center_diamond">
                <img src={brandposition_center_diamond} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandFirst;
