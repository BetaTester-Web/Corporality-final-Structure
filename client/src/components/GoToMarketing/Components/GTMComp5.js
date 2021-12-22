import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GTMComp5.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "./animate5.css"

function GTMComp5() {
    useEffect(() => {
        Aos.init();
    });
    return (
        <>
            <div className="GTMComp5Container d-flex flex-column align-items-center justify-content-center">
                <div className="heading text-center mb-3">
                    <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className="aos-init aos-animate">
                        <h1 className="animate two">
                            <span>BUILDING</span>
                            &nbsp;
                            <span>WINNING</span>
                            &nbsp;
                            <span>STRATEGIES</span>
                            &nbsp;
                            <span>WHILE</span>
                            &nbsp;
                            <span>CAREFULLY</span>
                        </h1>
                        <h1 className="animate2 two">
                            <span>BALANCING</span>
                            &nbsp;
                            <span>CUSTOMER</span>
                            &nbsp;
                            <span>NEEDS</span>
                            &nbsp;
                            <span>AND</span>
                            &nbsp;
                            <span>COST</span>
                            &nbsp;
                            <span>CONTROLS</span>
                        </h1>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="text text-center aos-init aos-animate">
                    <p className="GTMComp5text">
                        Corporality comes with a deep understanding of market dynamics that impacts customer behaviour, buying cycles and much more. We evaluate both external and internal factors to overcome gaps and issues to build opportunities for the commercial success of your products and services.
                    </p>
                </div>
                <div className="component5Square"></div>
            </div>
        </>
    );
}

export default GTMComp5;