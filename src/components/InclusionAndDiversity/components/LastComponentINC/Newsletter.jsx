import React , {useEffect} from 'react'
import aos from 'aos'
import '../LastComponentINC/NewsLetter.css'
import rect1 from '../LastComponentINC/rect1.png'
import wall from '../LastComponentINC/wall.png'
import rect2 from '../LastComponentINC/rect2.png'
import rect3 from '../LastComponentINC/rect3.png'
import rect4 from '../LastComponentINC/rect4.png'
import Main from '../LastComponentINC/main.png'
import Back from '../LastComponentINC/back.png'

const Newsletter = () => {
    useEffect(() => {
        aos.init( {});
    }, [])
    return (
        <div className="second-Ns">
            <img className='wall-2-2-Ns' src={wall} alt='' />
            <img className='rect-2-4-Ns' src={rect4} alt='' />
            <div className='container second-container-Ns' >
                <div className="row interactive_blueprint-row-Ns">
                    <div className="col-lg-6 textndlists-Ns d-flex flex-column  justify-content-center">
                        <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay = "500" className='container-2-text-1-Ns'>Our newsletter is more than just information
                            Subscribe to see the difference
                        </p>
                        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" className="emailAndNs">
                            <input className='emailinput-Ns' type="text" name='' placeholder='Enter your Email' onFocus={(e) => e.target.placeholder = ""}
                                onBlur={(e) => e.target.placeholder = "Enter your Email"} />
                            <span ><a className='subscribe-Ns' href=''>Subscribe</a></span>
                        </div>


                    </div>
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div className="imagessecond-Ns">
                            <img className='rect-2-1-Ns' src={rect1} alt='' />
                            <img className='rect-2-2-Ns' src={rect2} alt='' />
                            <img className='rect-2-3-Ns' src={rect3} alt='' />
                            

                            <div className="mainndback-4-Ns">
                                <img className='backimagesecond-fourth-Ns' src={Back} alt='' />
                                <div className="bp_our-newsletter-polygon9-Ns">
                                    <div data-aos="fade-down-left" data-aos-duration="2000" data-aos-delay ="1000">
                                        <img className='main-2-2-Ns' src={Main} alt="" />
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

export default Newsletter
