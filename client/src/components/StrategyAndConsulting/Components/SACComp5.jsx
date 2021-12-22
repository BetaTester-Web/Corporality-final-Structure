import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import favicon1Internal from './images/InternalFavicon1.png'
import favicon0Internal from './images/InternalFavicon2.png'
import back3Internal from './images/InternalBack.png'
import small3Internal from './images/internalRect.png'
import smaller3Internal from './images/internalSmallRect.png'
import wall3Internal from './images/internalWall.png'
import img2Internal from "./images/InternalMain.png"
import readmorearrow from './images/readmorearrowInternal.png'
import readmoreInternal from './images/readmoreInternal.png'
import "../Components/SACComp5.css"
const SACComp5 = () => {
    useEffect(() => {
        aos.init({ duration: 3000, disable: "mobile" });

    }, [])
    return (
        <div className='SACComp5_third-Ideation'>
            <div className="container SACComp5_contoiner-3-Ideation">
                <div className="row">
                    <div className="col-lg-6 d-flex SACComp5_third-image-Ideation justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" className='SACComp5_images-prev-3-Ideation'>
                            <img alt='' className='SACComp5_smaller3-Ideation' src={smaller3Internal} />
                            <img alt='' className='SACComp5_small3-Ideation' src={small3Internal} />
                            <img alt='' className='SACComp5_wall3-Ideation' src={wall3Internal} />
                            <div className="">
                                <img alt='' className='SACComp5_back3-Ideation' src={back3Internal} />
                                <div className="SACComp5_images-hover-4-Ideation">
                                    <div className="SACComp5_bp_iwfc_img-Ideation">
                                        <img className='SACComp5_main3-Ideation' src={img2Internal} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 SACComp5_texting-third-Ideation">
                        <p data-aos="fade-up" data-aos-delay="500" className='SACComp5_heading-text-1-main'>Internal Implementation for External sustenance</p>

                        <div data-aos="fade-up" data-aos-delay="500" className="SACComp5_textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='SACComp5_icon1-Ideation' src={favicon1Internal} />
                            </div>
                            <div className="SACComp5_text-box-3-Ideation">
                                <p className='SACComp5_container-3_text-1_heading-Ideation'>Innovative and Inclusive Cultures</p>
                                <p className='SACComp5_container-3_text-1-Ideation'>We adopt an innovative and inclusive mindset to achieve organisational success and market leadership. Corporality believes that internal values are always instrumental in fostering external client sustenance.</p>
                                <a className='SACComp5_exploreinit-Ideation' href='#'>
                                    <div className="SACComp5_explore-4-Ideation">
                                        <div className="SACComp5_explore-link-Ideation">
                                            <img src={readmoreInternal} alt='' className='SACComp5_explore-rect-Ideation' />
                                            <img src={readmorearrow} alt='' className='SACComp5_explore-arrow-Ideation' />
                                            <span className='SACComp5_explore-text-Ideation'>Read More</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="SACComp5_textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='SACComp5_icon1-Ideation' src={favicon0Internal} />
                            </div>
                            <div className="SACComp5_text-box-3-Ideation">
                                <p className='SACComp5_container-3_text-2_heading-Ideation'>Picking up the pace with Preparation</p>
                                <p className='SACComp5_container-3_text-2-Ideation'>Corporality and its partners believe in the power of preparation. We leverage the power of information and data gathering to enable constructive conversations with our customers to deliver actual business value.</p>
                                <a className='SACComp5_exploreinit-Ideation' href='#'>
                                    <div className="SACComp5_explore-4-Ideation">
                                        <div className="SACComp5_explore-link-Ideation">
                                            <img src={readmoreInternal} alt='' className='SACComp5_explore-rect-Ideation' />
                                            <img src={readmorearrow} alt='' className='SACComp5_explore-arrow-Ideation' />
                                            <span className='SACComp5_explore-text-Ideation'>Read More</span>
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SACComp5