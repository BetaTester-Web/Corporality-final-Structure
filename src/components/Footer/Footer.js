import React from "react";
import "./Footer.css";
import upArrow from './img/upArrow.png'
import polygon from './img/polygon.png'
import logo from './img/logo.png'

export default function Footer() {
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {/* footer */}

      <div className=" footerContainer">
        {/* <div className="container"> */}
          <div className="row footerRow">
            {/* col-1 */}
            <div className="column1">
              <img className="company-logo-footer" src={logo} />
              {/* share animation start */}
              <div className="foot-c">
                  <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" style={{backgroundColor: '#f2f2f2', color: '#31647c'}} htmlFor="menu-open">
                      <i className="fa fa-share-alt" style={{marginTop: '-9.2px', marginLeft: '-13.5px', fontSize: 'large', top : "50%"}} />
                    </label>
                    <a href="https://www.instagram.com/corporalityg/" className="menu-item instagram"> <i className="fa fa-instagram" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.facebook.com/CorporalityG/" className="menu-item facebook"> <i className="fa fa-facebook-f" style={{marginTop: '-12px', marginLeft: '-13px'}} />
                    </a>
                    <a href="https://in.pinterest.com/CorporalityG/" className="menu-item pinterest"> <i className="fa fa-pinterest" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://twitter.com/corporalityg/" className="menu-item twitter"> <i className="fa fa-twitter" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.linkedin.com/company/corporality/" className="menu-item linkedin">
                      <i className="fa fa-linkedin" style={{marginTop: '-12px', marginLeft: '-12.5px'}} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/" className="menu-item youtube"> <i className="fa fa-youtube-play" style={{marginTop: '-12px', marginLeft: '-14.5px'}} /> </a>
                  </nav>
              </div>
              {/* share animation div - end */}
              <div class="emailDivWrapper">
                  <input
                    type="email"
                    class="email-space "
                    id="floatingInput"
                    placeholder="Email Id"
                  />
                  {/* <label for="floatingInput">Email ID</label> */}

                <div className="checkBox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <p class="text-above-button">
                    I agree to have my personal data stored, processed and
                    analysed by Corporality as outlined in this Privacy
                    Policy.*
                  </p>
                </div>
                <div className="footer-button-wrapper">
                  <button type="button" class="footerButton">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* col-2 */}
            <div className="column2">
              <h1 className="footer-heading">Our Frame Work</h1>
              <hr className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                What is Corporality Effect?
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Why Corporality Effect?
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Culturally Conditioned
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Corporality Striker
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Inbound Shifting
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Video Library
              </p>
            </div>

            {/* col-3 */}
            <div className="column3">
              <h1 className="footer-heading">Service</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Go-to-Marketing
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Digital Media Marketing
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Strategic Consulting
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Corporate Level Strategy
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Product Strategy
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Brand Positioning
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Outsourced CXO
              </p>
            </div>

            {/* col-4 */}
            <div className="column4">
              <h1 className="footer-heading">About</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Who we are
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                How we’re Organised
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Careers
              </p>
            </div>

            {/* col-5 */}
            <div className="arrow-icon-container">
                <div onClick={topHandle} className="arrow-icon-wrapper d-flex justify-content-center align-items-center">
                  <img src={upArrow} />
                </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* <hr ></hr> */}

      {/* 2nd last lower section with 3 links */}
      <div class="footerContainer">
        <div class="row1">
          <div class="footer-text">Privacy Policy</div>
          <div class="footer-text">Terms and Conditions</div>
          <div class="footer-text">Sitemap</div>
        </div>
        <div className="row2">
          Copyright © 2021 Corporality
        </div>
      </div>
    </>
  );
}
