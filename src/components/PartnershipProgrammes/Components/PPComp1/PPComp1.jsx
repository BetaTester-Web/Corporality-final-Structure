import "../PPComp1/PPComp1.css"
import img1 from "../images/img1.png"
import wall from "../images/wall.png"
import rec6 from "../images/rec-6.png"
import rec8 from "../images/rec-8.png"
import rec9 from "../images/rec-9.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function PPComp1() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="container-fluid ">
                <div className="row d-flex flex-row ppc1RowContainer ">
                    <div className="col d-flex flex-column justify-content-center align ppc1ColWrapper ppc1ColTextWrapper">
                        <p data-aos="fade-right" data-aos-duration="500" className="ppcHeading ppc1Text">Partnership Programmes</p><br />
                        <p className="ppc1Text" data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">Corporality Global holds extensive strategic strength partnership programmes that extend entrepreneurial reach beyond the ordinary</p><br />
                        <a data-aos="fade-right" data-aos-delay="600" data-aos-duration="500" className='ppc1Button' href="/#">Read More</a>
                        <img className="ppc1Rec9" src={rec9} alt="" />
                    </div>
                    <div className="col d-flex flex-column justify-content-center ppc1ColWrapper">
                        <div className="ppc1ImageWrapper">
                            <img className="ppc1Rec6" src={rec6} alt="" />
                            <img data-aos="fade-left" data-aos-duration="1000" className="ppc1Img1" src={img1} alt="" />
                            <img className="ppc1Wall" src={wall} alt="" />
                            <img className="ppc1Rec8" src={rec8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
