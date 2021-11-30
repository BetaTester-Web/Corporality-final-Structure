import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../IntractiveBluePrint/components/prev-third/prev3.css'
import favicon1 from '../../IntractiveBluePrint/components/prev-third/favicon-1.png'
import favicon0 from '../../IntractiveBluePrint/components/prev-third/favicon-0.png'
import back3 from '../../IntractiveBluePrint/components/prev-third/back.png'
import small3 from '../../IntractiveBluePrint/components/prev-third/small.png'
import smaller3 from '../../IntractiveBluePrint/components/prev-third/smaller.png'
import wall3 from '../../IntractiveBluePrint/components/prev-third/wall.png'
import img2 from "./images/img2.png"

const SACComp5 = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className='third'>
            <div className="container contoiner-3">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" className='images-prev-3'>
                            <img alt='' className='smaller3' src={smaller3} />
                            <img alt='' className='small3' src={small3} />
                            <img alt='' className='wall3' src={wall3} />
                            <img alt='' className='back3' src={back3} />
                            <div className="images-hover-4">
                                <div className="bp_iwfc_img">
                                    <img className='main3' src={img2} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third">
                        <p className="sacc4Heading1 w-100 text-start">Internal Implementation for External sustenance</p>
                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon">
                            <div className="icon">
                                <img alt='' className='icon1' src={favicon0} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-1_heading'>Innovative and Inclusive Cultures</p>
                                <p className='container-3_text-1'>We adopt an innovative and inclusive mindset to achieve organisational success and market leadership. Corporality believes that internal values are always instrumental in fostering external client sustenance.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon">
                            <div className="icon">
                                <img alt='' className='icon1' src={favicon1} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-2_heading'>Picking up the pace with Preparation</p>
                                <p className='container-3_text-2'>Corporality and its partners believe in the power of preparation. We leverage the power of information and data gathering to enable constructive conversations with our customers to deliver actual business value.</p>
                            </div>
                        </div>
                        <div data-aos-delay="2500" data-aos="fade-right" className="button-4">
                            <a className='button-link' href="/#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SACComp5