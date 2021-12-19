import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import './secondcontainer.css'
import polygon from '../SecondComponent/polygon.png'
import Main from '../SecondComponent/main.png'
import Back from '../SecondComponent/back.png'
import rect2 from '../SecondComponent/rect2.png'
import rect3 from '../SecondComponent/rect3.png'
import rect4 from '../SecondComponent/rect4.png'
import rect1 from '../SecondComponent/rect1.png'
import wall from '../SecondComponent/wall.png'

const Second = () => {
    useEffect(() => {
        aos.init({ });

    }, [])
    return (
        <div className="second">
            <img className='wall-2-2' src={wall} alt='' />
            <div className='container second-container' >
                <div className="row interactive_blueprint-row">
                    <div className="col-lg-6 textndlists">
                        <p data-aos="fade-right" className='container-2-text-1'>Eliminating Risks giving you an edge over others</p>
                        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay = "2000" className="lists">
                            <div className="textndimg">


                                <span><img  className='polygon-last' src={polygon} alt='' /></span><p className='container-2-text-2'>Drafting an accurate project scope and preventing bigger headaches along the road</p>
                            </div>
                            <div className="textndimg">


                                <span><img  className='polygon-last' src={polygon} alt='' /></span><p className='container-2-text-2'>Improving team buy-in by ensuring team collaboration and stakeholder participation</p>
                            </div>
                            <div className="textndimg">


                                <span><img  className='polygon-last' src={polygon} alt='' /></span><p className='container-2-text-2'>Project  breakage to manageable pieces allowing you manage workload and budgets efficiently</p>
                            </div>
                            <div className="textndimg">


                                <span><img  className='polygon-last' src={polygon} alt='' /></span><p className='container-2-text-2'>Written plan along with comprehensive research and expert recommendations</p>
                            </div>
                            <a href=''>
                                <div className="button-5">
                                    <div className='button-link-3' href="#">Explore</div>
                                </div>
                            </a>


                        </div>


                    </div>
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div className="imagessecond">
                            <img className='rect-2-1' src={rect1} alt='' />
                            <img className='rect-2-2' src={rect2} alt='' />
                            <img className='rect-2-3' src={rect3} alt='' />
                            <img className='rect-2-4' src={rect4} alt='' />

                            <div className="mainndback-4">
                                <img className='backimagesecond-fourth' src={Back} alt='' />
                                <div className="bp_our-newsletter-polygon9">
                                    <div data-aos="fade-down-left" data-aos-duration="2000">
                                        <img className='main-2-2' src={Main} alt="" />
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

export default Second
