import React from "react";
import "./Footer.css";

export default function Footer() {
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {/* footer */}

      <div className=" footer-container">
        <div className="container">
          <div className="row">
            {/* col-1 */}
            <div className=" container p-0 col-lg-3 col-md-4 col-sm-12 logo-column">
              <img className="company-logo-footer" src="./img/Footer/img/logo 1.png" />
              {/* share animation div */}
              <div class="share-container">
                <div class="share-card">
                  <div class="content">
                    <i class="fa fa-share-alt"></i>
                  </div>
                  <div class="social">
                    <span>
                      <i class="fa fa-instagram"></i>
                    </span>
                    <span>
                      <i class="fa fa-facebook-f"></i>
                    </span>
                    <span>
                      <i class="fa fa-pinterest"></i>
                    </span>
                    <span>
                      <i class="fa fa-twitter"></i>
                    </span>
                    <span>
                      <i class="fa fa-linkedin"></i>
                    </span>
                    <span>
                      <i class="fa fa-youtube"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* share animation div - end */}

              <div class="container first-colum">
                <div class="form-floating mb-3 ">
                  <input
                    type="email"
                    class="form-control email-space"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email ID</label>
                </div>

                <div class="row">
                  <div class="col-1">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    ></input>
                  </div>
                  <div class="col-10">
                    <p class="text-above-button">
                      I agree to have my personal data stored, processed and
                      analysed by Corporality as outlined in this Privacy
                      Policy.*
                    </p>
                  </div>
                </div>

                <button type="button" class="footer-button">
                  {" "}
                  <p class="footer-button-text">Subscribe</p>
                </button>
              </div>
            </div>

            {/* col-2 */}
            <div className="col-lg-3 col-md-4  col-sm-4">
              <h1 className="footer-heading">Our Frame Work</h1>
              <hr className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                What is Corporality Effect?
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Why Corporality Effect?
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Culturally Conditioned
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Corporality Striker
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Inbound Shifting
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Video Library
              </p>
            </div>

            {/* col-3 */}
            <div className="col-lg-3 col-md-4  col-sm-4">
              <h1 className="footer-heading">Service</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Go-to-Marketing
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Digital Media Markeing
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Strategic Consulting
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Corporate Level Strategy
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Product Strategy
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Brand Positioning
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Outsourced CXO
              </p>
            </div>

            {/* col-4 */}
            <div className="col-lg-2 col-md-4  col-sm-4">
              <h1 className="footer-heading">About</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Who we are
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                How we’re Organised
              </p>
              <p className="text-links">
                <img className="poligon-image" src="./img/Footer/img/polygon 12.png" />
                Careers
              </p>
            </div>

            {/* col-5 */}
            <div className="col-lg-1 col-md-1 d-flex flex-column justify-content-start align-items-center arrow-icon-container">
              <div className="arrow-icon-wrapper d-flex justify-content-center align-items-center">
                <i onClick={topHandle} className="fa fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <hr ></hr> */}

      {/* 2nd last lower section with 3 links */}
      <div class="footer-container">
        <div class="row footer-lower-row">
          <div class="col text-center footer-text">Privacy Policy</div>
          <div class="col text-center footer-text">Terms and Conditions</div>
          <div class="col text-center footer-text">Sitemap</div>
        </div>
      </div>

      {/* lowest section with tnc statement */}
      <div class="footer-tnc-section">
        <div class="row footer-lower-row">
          <div class="col text-center footer-text ">
            Copyright © 2021 Corporality
          </div>
        </div>
      </div>
    </>
  );
}
