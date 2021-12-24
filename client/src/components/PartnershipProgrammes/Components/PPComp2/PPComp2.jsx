import "../PPComp2/PPComp2.css"
import img2 from "../images/img2.png"
import rec8 from "../images/rec-8.png"
import wall2DigitalSg from '../images/WallDigitalSg.png'
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

        <div className="ppc2RowContainer">

        <div className='Digital-Sg container py-5 my-5'>
        
            <img className='side2-container-Digital' src={img2back} alt='' />
            <div className="container">
                <div className="row">
                <div className="col-lg-6 imaging-2-Digital d-flex justify-content-center align-items-center flex-column">
                        <div className="images-2-Digital">
                            <img className='wall2-container-Digital' src={wall2DigitalSg} alt='' />
                            
                            <img className='small2-container-Digital' src={rec8} alt='' />
                            <div className="img-container-Digital">
                                <div className="hoverinit-Digital Inc_Div_our-faith-main-img-Digital">
                                    <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                        <img className=' iiiiimmmmggg ' src={img2} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 texting-2-Digital">
                        <p data-aos="fade-left" className='prev-2-text-1-Digital'>Conversations with more than 100 entrepreneurs across the globe</p>
                        <p data-aos="fade-left" className='prev-2-text-2-Digital'>We have spoken to global leaders from manufacturing, to medtech, to hospitality and geospatial initiators.</p>
                        <a data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000"className='ppc2Button' href="/#">Check out Our set of Interviews</a>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
