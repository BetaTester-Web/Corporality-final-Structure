import React from 'react';
import "./GTMComp1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';

import fb from "../images/socials/fb.png";
import ig from "../images/socials/ig.png";
import lnkd from "../images/socials/lnkd.png";
import yt from "../images/socials/yt.png";
import pin from "../images/socials/pin.png";
import twt from "../images/socials/twt.png";
import V3 from "./videos/V3.mp4";

function Page1() {
    return (
        <div className="gtm-page1">
            <div className="container mx-auto">
                <video autoPlay muted loop className="myVideo">
                    <source src={V3} type="video/mp4" />
                </video>
                <div className="row">
                    <div className="col-lg-5 col-8 ms-lg-0 ms-auto me-auto d-flex flex-column justify-content-center">
                        <div className="heading mb-1">
                            <div data-aos="fade-right" data-aos-duration="2000" class="aos-init aos-animate">
                                <h1 class="heading animate two">
                                    <span>s</span>
                                    <span>t</span>
                                    <span>e</span>
                                    <span>p</span>
                                    &nbsp;
                                    <span>u</span>
                                    <span>p</span>
                                    &nbsp;
                                    <span>y</span>
                                    <span>o</span>
                                    <span>u</span>
                                    <span>r</span>
                                    &nbsp;
                                    <span>g</span>
                                    <span>a</span>
                                    <span>m</span>
                                    <span>e</span>
                                </h1>
                            </div>
                        </div>
                        <div className="mt-2 mb-2 text">
                            {/* <p class="desc">
                                <span class="letter animates">G</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">p</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">,</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">f</span>
                                <span class="letter animates">f</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">y</span>
                                <span class="letter animates">,</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">f</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">p</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">w</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">p</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">p</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">y</span>
                                <span class="letter animates">,</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">,</span>
                                <span class="letter animates"></span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">d</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">n</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">v</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">b</span>
                                <span class="letter animates">l</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">p</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">m</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">k</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">c</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">w</span>
                                <span class="letter animates">i</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">h</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">o</span>
                                <span class="letter animates">u</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">G</span>
                                <span class="letter animates">T</span>
                                <span class="letter animates">M</span>
                                <span class="letter animates">&nbsp;</span>
                                <span class="letter animates">s</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">r</span>
                                <span class="letter animates">a</span>
                                <span class="letter animates">t</span>
                                <span class="letter animates">e</span>
                                <span class="letter animates">g</span>
                                <span class="letter animates">y</span>
                                <span class="letter animates">.</span>
                            </p> */}
                            Gain competitive advantage, manage time effectively, achieve successful product launch with innovative product development and management strategy, address innovation challenges, and ensure a viable path to market success with our GTM strategy.
                        </div>
                        <button type="submit" class="philosophySubmitButton d-flex align-items-center justify-content-center mt-2 px-3 py-2">
                            Book a discovery call
                        </button>
                    </div>
                    <div className="sideSocials d-flex flex-lg-column flex-row align-items-center justify-content-center">
                        <a href="/" className="socialIcon px-3">
                            <img src={fb} alt="" />
                        </a>
                        <a href="/" className="socialIcon px-3">
                            <img src={twt} alt="" />
                        </a>
                        <a href="/" className="socialIcon px-3">
                            <img src={ig} alt="" />
                        </a>
                        <a href="/" className="socialIcon px-3">
                            <img src={lnkd} alt="" />
                        </a>
                        <a href="/" className="socialIcon px-3">
                            <img src={pin} alt="" />
                        </a>
                        <a href="/" className="socialIcon px-3">
                            <img src={yt} alt="" />
                        </a>
                    </div>
                    {/* <div className="col-lg-6 col-0 container2">
                        <div className="marketing"></div>
                        <div className="blueSquare">
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="blueFadingSquare"></div>
            <div className="pinkFadingSquare"></div>
        </div>
    );
}

export default Page1;