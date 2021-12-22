import React, { useEffect } from "react";
import '../MultiDimensional/MultiDimension.css'
import aos from 'aos'
import smaller3MultiDimensional from '../MultiDimensional/smallerrectMultiDimensional.png'
import small3MultiDimensional from '../MultiDimensional/smallrectMultiDimensional.png'
import wall3MultiDimensional from '../MultiDimensional/wallMultiDimensional.png'
import back3MultiDimensional from '../MultiDimensional/BackMultiDimensional.png'
import main3MultiDimensional from '../MultiDimensional/MainMultiDimensional.png'
import favicon0MultiDimensional from '../MultiDimensional/favicon-0MultiDimensional.png'
import favicon1MultiDimensional from '../MultiDimensional/favicon-1MultiDimensional.png'
import favicon2MultiDimensional from '../MultiDimensional/favicon-3MultiDimensional.png'
import favicon3MultiDimensional from '../MultiDimensional/favicon-4MultiDimensional.png'
import explorerectMultiDimensional from '../MultiDimensional/arrowMultiDimensional.png'
import explorearrowMultiDimensional from '../MultiDimensional/arrow2MultiDimensional.png'

const MultiDimensional = () => {
    useEffect(() => {
        aos.init({ duration: 3000 , disable: "mobile" });

    }, [])
    return (
        <div className='third-Multi'>
            <div className="container contoiner-3-Multi">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image-Multi justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" className='images-prev-3-Multi'>
                            <img alt='' className='smaller3-Multi' src={smaller3MultiDimensional} />
                            <img alt='' className='small3-Multi' src={small3MultiDimensional} />
                            <img alt='' className='wall3-Multi' src={wall3MultiDimensional} />
                            <img alt='' className='back3-Multi' src={back3MultiDimensional} />
                            <div className="images-hover-4-Multi">
                                <div className="bp_iwfc_img-Multi">
                                    <img className='main3-Multi' src={main3MultiDimensional} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third-Multi">

                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon0MultiDimensional} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-1_heading-Multi'>A Multi-dimensional Approach</p>
                                <p className='container-3_text-1-Multi'>Corporality Global does not limit itself to a single approach. Instead, we collaborate, partner, and educate to create sustainable futures.  </p>
                                <a className='exploreinit-Multi' href='#'>
                                    <div className="explore-4-Multi">
                                        <div className="explore-link-Multi">
                                            <img src={explorerectMultiDimensional} alt='' className='explore-rect-Multi' />
                                            <img src={explorearrowMultiDimensional} alt='' className='explore-arrow-Multi' />
                                            <span className='explore-text-Multi'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon1MultiDimensional} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-2_heading-Multi'>Sustainable Design</p>
                                <p className='container-3_text-2-Multi'>Reducing negative impact on the environment and ensuring the health and comfort of our fellow-occupants should be a part of every human growth plan. With design, we aim to impart value and attitude that translates to environmental sustainability.</p>
                                <a className='exploreinit-Multi' href='#'>
                                    <div className="explore-4-Multi">
                                        <div className="explore-link-Multi">
                                            <img src={explorerectMultiDimensional} alt='' className='explore-rect-Multi' />
                                            <img src={explorearrowMultiDimensional} alt='' className='explore-arrow-Multi' />
                                            <span className='explore-text-Multi'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon2MultiDimensional} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-3_heading-Multi'>Sustainability in Services</p>
                                <p className='container-3_text-3-Multi'>A novel perspective, Corporality Global leverages the concept of sustainability to provide a competitive advantage to its clients in the new cut-throat era of business.</p>
                                <a className='exploreinit-Multi' href='#'>
                                    <div className="explore-4-Multi">
                                        <div className="explore-link-Multi">
                                            <img src={explorerectMultiDimensional} alt='' className='explore-rect-Multi' />
                                            <img src={explorearrowMultiDimensional} alt='' className='explore-arrow-Multi' />
                                            <span className='explore-text-Multi'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="2000" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon3MultiDimensional} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-3_heading-Multi'>CSR sustainability</p>
                                <p className='container-3_text-3-Multi'>Viewing fair business practices, we are completely committed to local communities, where we recognise issues that matter to them and build strategies around the company’s core competencies.</p>
                                <a className='exploreinit-Multi' href='#'>
                                    <div className="explore-4-Multi">
                                        <div className="explore-link-Multi">
                                            <img src={explorerectMultiDimensional} alt='' className='explore-rect-Multi' />
                                            <img src={explorearrowMultiDimensional} alt='' className='explore-arrow-Multi' />
                                            <span className='explore-text-Multi'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*        <div data-aos-delay="2500" data-aos="fade-right" className="button-4-Multi">
                            <a className='button-link-Multi' href="#">Learn More</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiDimensional