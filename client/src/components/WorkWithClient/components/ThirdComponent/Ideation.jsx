import React , {useEffect} from 'react'
import '../ThirdComponent/Ideation.css'
import aos from 'aos'
import smaller3Ideation from '../ThirdComponent/smallerrectIdeation.png'
import wall3Ideation from '../ThirdComponent/wallIdeation.png'
import back3Ideation from '../ThirdComponent/backIdeation.png'
import small3Ideation from '../ThirdComponent/smallrectIdeation.png'
import main3Ideation from '../ThirdComponent/mainIdeation.png'
import explorerectIdeation from '../ThirdComponent/arrowIdeation.png'
import explorearrowIdeation from '../ThirdComponent/arrow2Ideation.png'
import favicon0Ideation from '../ThirdComponent/favicon0Ideation.png'
import favicon1Ideation from '../ThirdComponent/favicon1Ideation.png'
import favicon2Ideation from '../ThirdComponent/favicon2Ideation.png'

const Ideation = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className='third-Ideation'>
            <div className="container contoiner-3-Ideation">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image-Ideation justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" data-aos-delay="500"  className='images-prev-3-Ideation'>
                            <img alt='' className='smaller3-Ideation' src={smaller3Ideation} />
                            <img alt='' className='small3-Ideation' src={small3Ideation} />
                            <img alt='' className='wall3-Ideation' src={wall3Ideation} />
                            <img alt='' className='back3-Ideation' src={back3Ideation} />
                            <div className="images-hover-4-Ideation">
                                <div className="bp_iwfc_img-Ideation">
                                    <img className='main3-Ideation' src={main3Ideation} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third-Ideation">
                        <p data-aos="zoom-in" data-aos-delay="500" className='heading-text-1-main'>Ideation with fearless creativity</p>

                        <div data-aos="fade-up" data-aos-delay="500"  className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon0Ideation} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-1_heading-Ideation'>Customer Experience</p>
                                <p className='container-3_text-1-Ideation'>Designing and developing meaningful customer experiences to drive growth. We do not hesitate to take on new challenges and combat every complex situation fearlessly to provide the ultimate branding solution. We do everything in our power to retain customer satisfaction and keep our services to the optimum.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000"  className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                <img alt='' className='icon1-Ideation' src={favicon1Ideation} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-2_heading-Ideation'>Intended Maturation Model</p>
                                <p className='container-3_text-2-Ideation'>Leveraging technology to find our framework. We work through the readiness and position of our clients to remap vision, strategize and identify the right tech stack to execute the project.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500"  className="textndicon-Ideation">
                            <div>
                                <img alt='' className='icon1-Ideation' src={favicon2Ideation} />
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-3_heading-Ideation'>Creating a Culture of Revivalism</p>
                                <p className='container-3_text-3-Ideation'>Exploring various applications and tools to infuse the best processes and workflows.This may either be sprucing up existing workflows or even creating new ones.</p>
                                <a className='exploreinit-Ideation' href='#'>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>Explore</span>
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

export default Ideation
