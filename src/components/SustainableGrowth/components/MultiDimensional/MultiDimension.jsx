import React , {useEffect} from "react";
import '../MultiDimensional/MultiDimension.css'
import aos from 'aos'
import smaller3 from '../MultiDimensional/smallerrect.png'
import small3 from '../MultiDimensional/smallrect.png'
import wall3 from '../MultiDimensional/wall.png'
import back3 from '../MultiDimensional/Back.png'
import main3 from '../MultiDimensional/Main.png'
import favicon0 from '../MultiDimensional/favicon-0.png'
import favicon1 from '../MultiDimensional/favicon-1.png'
import favicon2 from '../MultiDimensional/favicon-3.png'
import favicon3 from '../MultiDimensional/favicon-4.png'

const MultiDimensional = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className='third-Multi'>
            <div className="container contoiner-3-Multi">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image-Multi justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" className='images-prev-3-Multi'>
                            <img alt='' className='smaller3-Multi' src={smaller3} />
                            <img alt='' className='small3-Multi' src={small3} />
                            <img alt='' className='wall3-Multi' src={wall3} />
                            <img alt='' className='back3-Multi' src={back3} />
                            <div className="images-hover-4-Multi">
                                <div className="bp_iwfc_img-Multi">
                                    <img className='main3-Multi' src={main3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third-Multi">

                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon0} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-1_heading-Multi'>A Multi-dimensional Approach</p>
                                <p className='container-3_text-1-Multi'>Corporality Global does not limit itself to a single approach. Instead, we collaborate, partner, and educate to create sustainable futures.  </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon1} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-2_heading-Multi'>Sustainable Design</p>
                                <p className='container-3_text-2-Multi'>Reducing negative impact on the environment and ensuring the health and comfort of our fellow-occupants should be a part of every human growth plan. With design, we aim to impart value and attitude that translates to environmental sustainability.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon2} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-3_heading-Multi'>Sustainability in Services</p>
                                <p className='container-3_text-3-Multi'>A novel perspective, Corporality Global leverages the concept of sustainability to provide a competitive advantage to its clients in the new cut-throat era of business.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="2000" className="textndicon-Multi">
                            <div /* className="icon-Multi" */>
                                <img alt='' className='icon1-Multi' src={favicon3} />
                            </div>
                            <div className="text-box-3-Multi">
                                <p className='container-3_text-3_heading-Multi'>CSR sustainability</p>
                                <p className='container-3_text-3-Multi'>Viewing fair business practices, we are completely committed to local communities, where we recognise issues that matter to them and build strategies around the company’s core competencies.</p>
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