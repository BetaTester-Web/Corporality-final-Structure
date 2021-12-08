import React, { useEffect } from 'react'
import '../Organising/Organisingprinciple.css'
import Main from '../Organising/Main.png'
import Back from '../Organising/Back.png'
import smallrect from '../Organising/Smallrect.png'
import wall from '../Organising/Wall.png'
import rect from '../Organising/rect.png'
import smallerrect from '../Organising/text-rect.png'
import aos from 'aos'
import yellowbackground from './yellowbackground.png'

const OrganisingPrinciple = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });
    }, [])
    return (
        <div className="OrganisingPrinciple">
            <div className="navbar-Op"></div>
            <div className="container container-1-Op">
            <div className="yellowbackground_Op"></div>
                <div className="row first-image-Op">
                    
                    <div className="col-lg-6">
                        <div data-aos="fade-right" className="text-box-1-Op">

                            <p className='container-1_text-Op'>SUSTAINABLE GROWTH OUR ORGANISING PRINCIPLE</p>
                            <p className='container-2_text-Op'>Corporality Global intends to use ingenuity and technology to enforce sustainable change so that future generations can meet their needs without any hindrances </p>
                            <div className="small-rect-prev-1-Op"><img src={smallerrect} alt='' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" className="image-first-Op">
                            <img alt='' className='rect-Op' src={rect} alt='' />
                            <img alt='' className='wall-Op' src={wall} />
                            <img alt='' className='smallrect-Op' src={smallrect} />
                            <img alt='' className='backimg-Op' src={Back} />
                            <div className="banner_right_inner-Op" >
                                <img className='main-prev1-Op' src={Main} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            {/* <div className="blue_print_overlay">
                <div className="blue_print_ellipse-1"></div>

            </div> */}


        </div>


    )
}

export default OrganisingPrinciple


