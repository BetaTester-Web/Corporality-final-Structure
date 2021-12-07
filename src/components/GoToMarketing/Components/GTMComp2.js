import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GTMComp2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';

function GTMComp2() {
    useEffect(() => {
        Aos.init();
    });

    return (
        <div className="GTMComp2">
            <div className="container">
                <div className="row">
                    <div data-aos-duration="2000" className="col-lg-5 col-12 aos-init aos-animate" data-aos="fade-right">
                        <div className="laptopImg">
                        </div>
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="aos-init aos-animate col-lg-7 col-12 d-flex flex-column justify-content-center mt-lg-0 mt-4">
                        <div className="heading mb-lg-0 mb-3">
                            FINDING NEW WAYS TO BRINGING PRODUCTS AND SERVICES TO THE MARKET
                        </div>
                        <div className="text mt-lg-3 mt-2">
                            A solid GTM strategy drives the success of products and services in a new or an existing market. Coordinated messaging, precise product positioning and a clearly defined customer persona are all instrumental in the market progress of a product or service. Our effective digital marketing strategy also lays the foundation for developing newer products and services while keeping all business units aligned with the plan.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GTMComp2;