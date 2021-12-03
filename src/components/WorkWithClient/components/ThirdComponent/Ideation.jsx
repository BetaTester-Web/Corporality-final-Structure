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
                        <div  className='images-prev-3-Ideation'>
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
                        <p className='heading-text-1-main'>Ideation with fearless creativity</p>

                        <div  className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon0} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-1_heading-Ideation'>Customer Experience</p>
                                <p className='container-3_text-1-Ideation'>Designing and developing meaningful customer experiences to drive growth. We do not hesitate to take on new challenges and combat every complex situation fearlessly to provide the ultimate branding solution. We do everything in our power to retain customer satisfaction and keep our services to the optimum.</p>
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
                        <div  className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon1} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-2_heading-Ideation'>Intended Maturation Model</p>
                                <p className='container-3_text-2-Ideation'>Leveraging technology to find our framework. We work through the readiness and position of our clients to remap vision, strategize and identify the right tech stack to execute the project.</p>
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
                        <div  className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon2} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-3_heading-Ideation'>Creating a Culture of Revivalism</p>
                                <p className='container-3_text-3-Ideation'>Exploring various applications and tools to infuse the best processes and workflows.This may either be sprucing up existing workflows or even creating new ones.</p>
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
