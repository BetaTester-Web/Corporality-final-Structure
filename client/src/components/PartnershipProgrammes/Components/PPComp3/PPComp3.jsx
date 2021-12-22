import "../PPComp3/PPComp3.css"
import img3back from "../images/img3back.png"
import rec7 from "../images/rec-7.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function PPComp3() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="ppc3Container pl-5 pr-5">
            <p data-aos="zoom-in" data-aos-duration="1000" className="ppcHeading ppc3Heading">Discovery Calls</p><br />
            <p data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className="ppc3Para ppcText">Every month the leadership team encourages discovery calls that can be directly booked on our platform. Those who wish to grow their sales and business development skills can express their interest with us.Join our commercial partnership programme to earn regular commissions on referrals. Be a part of the Corporality vision.</p><br />
            <a data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000" className='know_button' href="/#">Know More</a>
            <img className="ppc3Img3back" src={img3back} alt="" />
            <img className="ppc3rec7-1" src={rec7} alt="" />
            <img className="ppc3rec7-2" src={rec7} alt="" />
        </div>
    )
}
