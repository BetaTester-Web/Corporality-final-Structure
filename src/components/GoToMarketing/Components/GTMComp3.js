import React, { useEffect } from 'react';
import "./GTMComp3.css";
import "./animate3.css"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import AllCardsNew from "./AllCardsNew/AllCardsNew";
import Aos from "aos";
import "aos/dist/aos.css";

function GTMComp3() {
    useEffect(() => {
        Aos.init();
    });

    return (
        <>
            <div className="container text-center mx-auto d-flex flex-column align-items-center justify-content-center">
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" class="aos-init aos-animate">
                    <h1 class="animate two">
                        <span>D</span><span>e</span><span>l</span><span>i</span><span>v</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span>&nbsp;<span>u</span><span>n</span><span>i</span><span>q</span><span>u</span><span>e</span>&nbsp;<span>v</span><span>a</span><span>l</span><span>u</span><span>e</span>&nbsp;<span>p</span><span>r</span><span>o</span><span>p</span><span>o</span><span>s</span><span>i</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span>
                    </h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="mb-5 mt-2 text aos-init aos-animate">
                    The founding structure of the GTM strategy is to plan, refine, iterate and plan again till you are convinced and confident about stepping forward. The key to a profitable product launch is crafting an actionable and practical go-to-marketing plan while dodging and eliminating disastrous hiccups and glitches.
                </div>
                <AllCardsNew />
            </div>
        </>
    );
}

export default GTMComp3;