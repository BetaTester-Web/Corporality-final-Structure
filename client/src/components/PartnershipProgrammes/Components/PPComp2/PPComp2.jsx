import "../PPComp2/PPComp2.css"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainconversations from "./main-conversations.png"
import wallconversations from "./wall-conversations.png"
import groupconversations from "./group-conversations.png"
import smallrectconversations from "./smallrect-conversations.png"

export default function PPComp2() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <div className='Conversations-Sg'>
            <img className='side2-container-Conversations' src={groupconversations} alt='' />
            <div className="container">
                <div className="row">
                <div className="col-lg-6 imaging-2-Conversations d-flex justify-content-center align-items-center flex-column">
                        <div className="images-2-Conversations">
                            <img className='wall2-container-Conversations' src={wallconversations} alt='' />
                            
                            <img className='small2-container-Conversations' src={smallrectconversations} alt='' />
                            <div className="img-container-Conversations">
                                <div className="hoverinit-Conversations Inc_Div_our-faith-main-img-Conversations">
                                    <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                        <img className='main2-Conversations ' src={mainconversations} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 texting-2-Conversations">
                        <p data-aos="fade-left" className='prev-2-text-1-Conversations'>Conversations with more than 100 entrepreneurs across the globe
</p>
                        <p data-aos="fade-left" className='prev-2-text-2-Conversations'>We have spoken to global leaders from manufacturing, to medtech, to hospitality and geospatial initiators.</p>
                        <a data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000"className='ppc2Button' href="/#">Check out Our set of Interviews</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
