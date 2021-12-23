
import './Page1.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Page1 = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <div className="consult-page1" >
                <div className="container">
                    <img src="./img/StrategyConsultancy/hollowDia.png" alt="" className="consult-hollowDia " />
                    <div className="d-md-flex align-items-center justify-content-between consult-pageContent">
                        <div className="consult-page1-content">
                            <div data-aos="fade-right" data-aos-duration="1000">
                            <div className="consult-pg1-con conmap-detail-head">


                            <h2>STRATEGIC GROWTH CONSULTING DRIVEN BY EXPERTISE, ANALYTICS AND EXPERIENCE</h2>
                            <p>Corporality Global is committed to delivering enterprise value in the form of revenue growth and operations that don't just meet expectations but exceed them.</p>
                            </div>
                            </div>
                            <div data-aos="fade-left">


                            <img src="./img/StrategyConsultancy/hollow2.png" alt="" className="consult-hollow2 " />                            
                            </div>
                            <div className="consult-page1-img d-sm-flex p-4">
                                <img src="./img/StrategyConsultancy/youtubemarketing.png" alt="" className=" consultimg2" />

                                <div className="consultyoutubebox text-center">
                                    <p className="">Subscribe Our YouTube Channel</p>
                                    <button type="button" className="btn footer-button">
                                        <div className="footer-button-text">

                                            Subscribe
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="consultimg3">
                        <div data-aos="fade-left">

                            <img className="iluilukyah" src="./img/StrategyConsultancy/page-1.png" alt="" />
                        </div>
                        </div>
                    </div>

                    <div className="consultgrad-1">
                        <img src="./img/StrategyConsultancy/rectcolor.png" alt="" className="" />
                    </div>
                <div class="d-flex align-items-end flex-column consultancysocialmedia">
                    <img src="./img/StrategyConsultancy/facebook.png" className=" py-1" alt="" />
                    <img src="./img/StrategyConsultancy/twitter.png" className=" py-1" alt="" />
                    <img src="./img/StrategyConsultancy/insta.png" className=" py-1" alt="" />
                    <img src="./img/StrategyConsultancy/linkedIN.png" className=" py-1" alt="" />
                    <img src="./img/StrategyConsultancy/pinterset.png" className=" py-1" alt="" />
                    <img src="./img/StrategyConsultancy/youtube.png" className=" py-1" alt="" />
                </div>
                </div>
            </div>



        </>
    )
}

export default Page1
