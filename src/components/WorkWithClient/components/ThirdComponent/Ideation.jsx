import React from 'react'
import '../ThirdComponent/Ideation.css'
import smaller3 from '../ThirdComponent/smallerrect.png'
import wall3 from '../ThirdComponent/wall.png'
import back3 from '../ThirdComponent/back.png'
import small3 from '../ThirdComponent/smallrect.png'
import main3 from '../ThirdComponent/main.png'
import explorerect from '../ThirdComponent/arrow.png'
import explorearrow from '../ThirdComponent/arrow2.png'
import favicon0 from '../ThirdComponent/favicon0.png'
import favicon1 from '../ThirdComponent/favicon1.png'
import favicon2 from '../ThirdComponent/favicon2.png'

const Ideation = () => {
    return (
        <div className='third-Ideation'>
            <div className="container contoiner-3-Ideation">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image-Ideation justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" className='images-prev-3-Ideation'>
                            <img alt='' className='smaller3-Ideation' src={smaller3} />
                            <img alt='' className='small3-Ideation' src={small3} />
                            <img alt='' className='wall3-Ideation' src={wall3} />
                            <img alt='' className='back3-Ideation' src={back3} />
                            <div className="images-hover-4-Ideation">
                                <div className="bp_iwfc_img-Ideation">
                                    <img className='main3-Ideation' src={main3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third-Ideation">

                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon0} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-1_heading-Ideation'>A Ideation-dimensional Approach</p>
                                <p className='container-3_text-1-Ideation'>Corporality Global does not limit itself to a single approach. Instead, we collaborate, partner, and educate to create sustainable futures.  </p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerect} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrow} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon1} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-2_heading-Ideation'>Sustainable Design</p>
                                <p className='container-3_text-2-Ideation'>Reducing negative impact on the environment and ensuring the health and comfort of our fellow-occupants should be a part of every human growth plan. With design, we aim to impart value and attitude that translates to environmental sustainability.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerect} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrow} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500" className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon2} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-3_heading-Ideation'>Sustainability in Services</p>
                                <p className='container-3_text-3-Ideation'>A novel perspective, Corporality Global leverages the concept of sustainability to provide a competitive advantage to its clients in the new cut-throat era of business.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerect} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrow} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div data-aos="fade-up" data-aos-delay="2000" className="textndicon-Ideation">
                            <div>
                                <img alt='' className='icon1-Ideation' src={favicon3} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-3_heading-Ideation'>CSR sustainability</p>
                                <p className='container-3_text-3-Ideation'>Viewing fair business practices, we are completely committed to local communities, where we recognise issues that matter to them and build strategies around the company’s core competencies.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerect} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrow} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                               {/* <div data-aos-delay="2500" data-aos="fade-right" className="button-4-Ideation">
                            <a className='button-link-Ideation' href="#">Learn More</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ideation
