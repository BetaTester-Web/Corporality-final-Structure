import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../prev-third/prev3.css'
import favicon1 from '../prev-third/favicon-1.png'
import favicon0 from '../prev-third/favicon-0.png'
import favicon2 from '../prev-third/favicon-2.png'
import favicon3 from '../prev-third/favicon-3.png'
import back3 from '../prev-third/back.png'
import main3 from '../prev-third/main.png'
import small3 from '../prev-third/small.png'
import smaller3 from '../prev-third/smaller.png'
import wall3 from '../prev-third/wall.png'

const Prev3 = () => {
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
                                    <img className='main3' src={main3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third">

                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon">
                            <div /* className="icon-blueprint" */>
                                <img alt='' className='icon1-blueprint' src={favicon0} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-1_heading'>Going beyond mere publishing goals</p>
                                <p className='container-3_text-1'>While using the latest and fully-functional technology stacks in the backend, we also ensure that the shift from the now to the next is impactful. We always aim to create a better and more connected world.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon">
                            <div /* className="icon-blueprint" */>
                                <img alt='' className='icon1-blueprint' src={favicon1} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-2_heading'>We eliminate all guess works and make room for limitless growth</p>
                                <p className='container-3_text-2'>Companies are often stuck thinking about how to achieve their goals. We provide you with alternatives and recommendations that you would never have thought about before. Corporality helps you take the right steps to achieve outcomes that make you feel confident.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500" className="textndicon">
                            <div /* className="icon-blueprint" */>
                                <img alt='' className='icon1-blueprint' src={favicon2} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-3_heading'>Telling stories that make a difference</p>
                                <p className='container-3_text-3'>We understand your business and we know your requirements. Therefore, using extensive expertise and analytics, we create highly detailed plans tailor-made for your business. </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="2000" className="textndicon">
                            <div /* className="icon-blueprint" */>
                                <img alt='' className='icon1-blueprint' src={favicon3} />
                            </div>
                            <div className="text-box-3">
                                <p className='container-3_text-3_heading'>CSR sustainability</p>
                                <p className='container-3_text-3'>Viewing fair business practices, we are completely committed to local communities, where we recognise issues that matter to them and build strategies around the company’s core competencies.</p>
                            </div>
                        </div>
                        <a href=''>
                            <div data-aos-delay="2500" data-aos="fade-right" className="button-4">
                                <div className='button-link' href="#">Learn More</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prev3