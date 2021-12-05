import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BrandPositioning.css";
import BPComponent2 from "./BrandPos-Components/BP-Component-2/BP-Comp-2";
import BPComponent4 from "./BrandPos-Components/BP-Component-4/BP-Component-4";
import BPComponent5 from "./BrandPos-Components/BP-Component-5/BP-Comp-5";
import BPComp3 from "./BrandPos-Components/BP-Component-3/BPComp3";

export default function Component1() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });
  return (
    <>
      <div className="vw-100 fullSection position-relative">
        <div className="snakes position-absolute end-0 top-0">
          <img
            src="/img/BrandPositioning/Group-1252.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="container py-0 landingPage position-relative">
          <div className="mediumD1 position-absolute end-50 top-0">
            <img
              src="/img/BrandPositioning/Rectangle-67.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="mediumD2 position-absolute end-50 bottom-0">
            <img
              src="/img/BrandPositioning/Rectangle-68.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="vw-100 position-relative flexing d-sm-flex justify-content-center">
            <div className="art position-relative position-absolute top-50 end-0 translate-middle-y">
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000"
                className="imprvdCompBlock position-absolute top-0 end-0 position-relative"
              >
                <img
                  src="/img/BrandPositioning/Group-1243.png"
                  alt=""
                  className="imprvdCompImg position-absolute start-0 top-0"
                />
                <p className="imprvdCompText my-0 position-absolute bottom-0 end-0 text-wrap">
                  Improved company image
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1500"
                className="custLoyaltyBlock position-absolute bottom-50 start-0 position-relative"
              >
                <img
                  src="/img/BrandPositioning/Group-1242.png"
                  alt=""
                  className="custLoyaltyImg position-absolute start-0 top-0"
                />
                <p className="custLoyaltyText my-0 position-absolute bottom-0 end-0 text-wrap">
                  Customer loyalty
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                className="relatableIDBlock position-absolute bottom-50 end-0 position-relative"
              >
                <img
                  src="/img/BrandPositioning/Group-1244.png"
                  alt=""
                  className="relatableIDImg position-absolute start-0 top-0"
                />
                <p className="relatableIDText my-0 position-absolute bottom-0 end-0 text-wrap">
                  Relatable identity
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
                className="omniBlock position-absolute top-50 start-50 position-relative"
              >
                <img
                  src="/img/BrandPositioning/Group-1248.png"
                  alt=""
                  className="omniImg position-absolute start-0 top-0"
                />
                <p className="omniText my-0 position-absolute bottom-0 end-0 text-wrap">
                  Omni effect vs experience
                </p>
              </div>
              <div className="phnbtn position-absolute end-0 bottom-0">
                  <img
                    src="/img/BrandPositioning/Group-709.png"
                    alt=""
                    className="img-fluid"
                  />
              </div>
              <div className="littleD1 position-absolute end-0 top-50">
                <img
                  src="/img/BrandPositioning/Rectangle-69.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="littleD2 position-absolute start-0 bottom-50">
                <img
                  src="/img/BrandPositioning/Rectangle-69.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                className="textD position-absolute start-0 bottom-0"
              >
                <img
                  src="/img/BrandPositioning/Group-1250.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="brandPara text-wrap position-absolute start-0 top-50 translate-middle-y">
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="paraHead my-2 fw-bold"
              >
                EVERY BRAND HAS A STORY AND EVERY STORY IS UNIQUE
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="paraText my-2"
              >
                Big brands have one thing in common - they have a solid brand
                positioning strategy. Businesses must invest in a strong brand
                marketing strategy to thrive in a highly competitive market.
                Why? The proof lies in the numbers. Companies continuously
                investing in brand positioning strategies can see an average
                increase in revenue between 10 and 20%.
              </p>
            </div>
          </div>
        </div>
        <div className="social position-absolute end-0 top-50 translate-middle-y container">
          <div class="row row-cols-1 mx-0 bpcp1SocialRow">
            <div class="col my-1 socialDiv">
              <a
                href="https://www.facebook.com/CorporalityG"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-618.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div class="col my-1 socialDiv">
              <a
                href="https://twitter.com/corporalityg"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-617.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div class="col my-1 socialDiv">
              <a
                href="https://www.instagram.com/corporalityg"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-616.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div class="col my-1 socialDiv">
              <a
                href="https://www.linkedin.com/company/corporality"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-615.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div class="col my-1 socialDiv">
              <a
                href="https://in.pinterest.com/CorporalityG"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-614.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div class="col my-1 socialDiv">
              <a
                href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/BrandPositioning/Group-613.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vw-100 my-2">
        <BPComponent2 />
      </div>
      <div className="vw-100 my-0">
        <BPComp3 />
      </div>
      <BPComponent4 />
      <BPComponent5 />
    </>
  );
}
