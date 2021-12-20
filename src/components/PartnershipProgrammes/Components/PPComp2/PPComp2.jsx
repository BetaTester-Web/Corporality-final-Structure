import "../PPComp2/PPComp2.css"
import img2 from "../images/img2.png"
import rec8 from "../images/rec-8.png"
import wall from "../images/wall.png"
import img2back from "../images/img2back.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PPComp2() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="p-0 ppComp2  ">
                <img className="ppc2Img2back" src={img2back} alt="" />
                <div className="row d-flex flex-row ppc2RowContainer">
                    <div className="col p-0">
                        <div data-aos="fade-right" data-aos-duration="2000" className="ppc2ImgWrapper">
                            <div className="ppc2MainImg">
                                <img className="ppc2Img2" src={img2} alt="" />
                            </div>
                            <img className="ppc2Wall" src={wall} alt="" />
                            <img className="ppc2Rec8" src={rec8} alt="" />
                        </div>
                    </div>
                    <div className="col p-0 ppc2ColContainer">
                        <div className="ppc2ColTextWrapper">
                            <p data-aos="fade-left" data-aos-duration="2000"className="ppcHeading">Conversations with more than 100 entrepreneurs across the globe</p><br />
                            <p className="ppcText" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">We have spoken to global leaders from manufacturing, to medtech, to hospitality and geospatial initiators.</p><br />
                            <a data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000"className='ppc2Button' href="/#">Check out Our set of Interviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
