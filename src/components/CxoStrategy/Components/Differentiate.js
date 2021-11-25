import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Differentiate() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div class="">
        <div class="row position-relative">
          <div data-aos="fade-right"  data-aos-duration="3000" class="col cxo-landing-page ">
            <h3>OUTSOURCED CXO</h3>
            <h1>DIFFERENTIATE YOUR BRAND EXPERIENCE</h1>
            <p>
              Build customer loyalty through differentiated brand strategies
              that activate a positive relationship between the business and its
              customers. Leadership is highly essential in creating seamless and
              connected customer journeys that are critically important.
            </p>
          </div>

          <div class="col  cxo-landing-image-1">
            <div class="cxo-landing-image-2"></div>
            <div class="cxo-landing-image-3">
              <div class="cxo-landing-image-4">
                <div className="cxo-landing-image-5 image-fluid">
                  <img src="./img/differentiate/textBox.png" />
                </div>
                <div className="cxo-landing-image-6 image-fluid">
                  <img src="./img/differentiate/textBox2.png" />
                </div>
                <div className="socialIcons position-absolute bottom-0 end-0">
                  <a href='https://www.facebook.com/CorporalityG'>
                    <img src='./img/differentiate/facebook.png'/>
                  </a>
                  <a href='https://twitter.com/corporalityg'>
                    <img src='./img/differentiate/twitter.png'/>
                  </a>
                  <a href='https://www.instagram.com/corporalityg/'>
                    <img src='./img/differentiate/instagram.png'/>
                  </a>
                  <a href='https://www.linkedin.com/company/corporality/'>
                    <img src='./img/differentiate/linkedin.png'/>
                  </a>
                  <a href='https://in.pinterest.com/CorporalityG/'>
                    <img src='./img/differentiate/pinterest.png'/>
                  </a>
                  <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg'>
                    <img src='./img/differentiate/youtube.png'/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
