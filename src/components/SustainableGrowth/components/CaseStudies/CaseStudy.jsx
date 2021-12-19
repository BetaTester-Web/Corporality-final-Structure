import React,{useEffect} from "react";
import '../CaseStudies/CaseStudy.css'
import aos from 'aos'
import rect1 from '../CaseStudies/rect1.png'
import rect2 from '../CaseStudies/rect2.png'
import rect3 from '../CaseStudies/rect4.png'
import rect4 from '../CaseStudies/rect3.png'
import wall from '../CaseStudies/wall.png'
import Back from '../CaseStudies/back.png'
import Main from '../CaseStudies/main.png'

const CaseStudy = () => {
    useEffect(() => {
        aos.init({ duration: 3000});

    }, [])
    return (
        <div className="second-Cs">
            <img className='wall-2-2-Cs' src={wall} alt='' />
            <img className='rect-2-4-Cs' src={rect4} alt='' />
            <div className='container second-container-Cs' >
                <div className="row interactive_blueprint-row-Cs">
                    <div className="col-lg-6 textndlists-Cs d-flex flex-column  justify-content-center">
                        <p data-aos="fade-right" className='container-2-text-1-Cs'>Case Studies</p>
                        <p data-aos="fade-right" className='container-2-text-1-Cs-2'>Explore our industrial case studies to see how sustainability is progressing across the world.</p>
                            <div className="button-5-Cs">
                                <a className='button-link-3-Cs' href="#">Explore</a>
                            </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div className="imagessecond-Cs">
                            <img className='rect-2-1-Cs' src={rect1} alt='' />
                            <img className='rect-2-2-Cs' src={rect2} alt='' />
                            <img className='rect-2-3-Cs' src={rect3} alt='' />
                            
                            
                            <div className="mainndback-4-Cs">
                                <img className='backimagesecond-fourth-Cs' src={Back} alt='' />
                                <div className="bp_our-newsletter-polygon9-Cs">
                                    <div data-aos="fade-down-left" data-aos-duration="2000">
                                        <img className='main-2-2-Cs' src={Main} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy
