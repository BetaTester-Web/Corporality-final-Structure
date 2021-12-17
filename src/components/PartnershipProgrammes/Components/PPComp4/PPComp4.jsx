import "../PPComp4/PPComp4.css"
import partner1 from "../images/partner1.png"
import partner2 from "../images/partner2.png"
import partner3 from "../images/partner3.png"
import partner4 from "../images/partner4.png"
import partner5 from "../images/partner5.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PPComp4() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="ppc4Container">
            <p data-aos="fade-down" data-aos-duration="1000" className="ppcHeading">STRATEGIC PARTNERSHIP</p><br />
            <p data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" className="ppc4Para">Overcome your business fears and widen your resources and expertise, with our strategic partnership programmes. There are several stories and experiences that we share with our partners as well.</p><br />
            <div className="ppc4Partners">
                <img data-aos="flip-left" data-aos-duration="1000" className="ppc4PartnerItem1" src={partner1} alt="" />
                <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" className="ppc4PartnerItem2" src={partner2} alt="" />
                <img data-aos="flip-left" data-aos-delay="600" data-aos-duration="1000" className="ppc4PartnerItem3" src={partner3} alt="" />
                <img data-aos="flip-left" data-aos-delay="900" data-aos-duration="1000" className="ppc4PartnerItem4" src={partner4} alt="" />
                <img data-aos="flip-left" data-aos-delay="1200" data-aos-duration="1000"className="ppc4PartnerItem5" src={partner5} alt="" />
            </div>
        </div>       
    )
}
