import React from "react";
import "./BrandPositioning.css";
import BPComponent2 from "./BrandPos-Components/BP-Component-2/BP-Comp-2";

import BPComponent4 from "./BrandPos-Components/BP-Component-4/BP-Component-4";
import BPComponent5 from "./BrandPos-Components/BP-Component-5/BP-Comp-5";

export default function Component1() {
  return (
    <>
      <div className="vw-100 fullSection position-relative">
        <div className="snakes position-absolute end-0 top-0">
          <img
            src="./img/BrandPositioning/Group 1252.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="container py-0 landingPage position-relative">
          <div className="mediumD1 position-absolute end-50 top-0">
            <img
              src="./img/BrandPositioning/Rectangle 67.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="mediumD2 position-absolute end-50 bottom-0">
            <img
              src="./img/BrandPositioning/Rectangle 68.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="brandPara mx-1 text-wrap position-absolute start-0 top-50 translate-middle-y">
            <p className="paraHead my-2 fw-bold">
              EVERY BRAND HAS A STORY AND EVERY STORY IS UNIQUE
            </p>
            <p className="paraText my-2">
              Big brands have one thing in common - they have a solid brand
              positioning strategy. Businesses must invest in a strong brand
              marketing strategy to thrive in a highly competitive market. Why?
              The proof lies in the numbers. Companies continuously investing in
              brand positioning strategies can see an average increase in
              revenue between 10 and 20%.
            </p>
          </div>
          <div className="art position-relative position-absolute top-50 end-0 translate-middle-y">
            <div className="imprvdCompBlock position-absolute top-0 end-0 position-relative">
              <img
                src="./img/BrandPositioning/Group 1243.png"
                alt=""
                className="imprvdCompImg position-absolute start-0 top-0"
              />
              <p className="imprvdCompText my-0 position-absolute bottom-0 end-0 text-wrap">
                Improved company image
              </p>
            </div>
            <div className="custLoyaltyBlock position-absolute bottom-50 start-0 position-relative">
              <img
                src="./img/BrandPositioning/Group 1242.png"
                alt=""
                className="custLoyaltyImg position-absolute start-0 top-0"
              />
              <p className="custLoyaltyText my-0 position-absolute bottom-0 end-0 text-wrap">
                Customer loyalty
              </p>
            </div>
            <div className="relatableIDBlock position-absolute bottom-50 end-0 position-relative">
              <img
                src="./img/BrandPositioning/Group 1244.png"
                alt=""
                className="relatableIDImg position-absolute start-0 top-0"
              />
              <p className="relatableIDText my-0 position-absolute bottom-0 end-0 text-wrap">
                Relatable identity
              </p>
            </div>
            <div className="omniBlock position-absolute top-50 start-50 position-relative">
              <img
                src="./img/BrandPositioning/Group 1248.png"
                alt=""
                className="omniImg position-absolute start-0 top-0"
              />
              <p className="omniText my-0 position-absolute bottom-0 end-0 text-wrap">
                Omni effect vs experience
              </p>
            </div>
            <div className="phnbtn position-absolute end-0 bottom-0">
              <img
                src="./img/BrandPositioning/Group 709.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="littleD1 position-absolute end-0 top-50">
              <img
                src="./img/BrandPositioning/Rectangle 69.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="littleD2 position-absolute start-0 bottom-50">
              <img
                src="./img/BrandPositioning/Rectangle 69.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="textD position-absolute start-0 bottom-0">
              <img
                src="./img/BrandPositioning/Group 1250.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="social position-absolute end-0 top-50 translate-middle-y">
          <div class="container">
            <div class="row row-cols-1">
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 618.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 617.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 616.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 615.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 614.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div class="col my-1">
                <a href="/">
                  <img
                    src="./img/BrandPositioning/Group 613.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BPComponent2 />

      <BPComponent4 />
      <BPComponent5 />
    </>
  );
}
