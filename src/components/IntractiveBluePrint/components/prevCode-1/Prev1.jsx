import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../prevCode-1/prev1.css'

import main from '../prevCode-1/main.png'
import backimg from '../prevCode-1/back.png'
import wall from '../prevCode-1/wall.png'
import smallrect from '../prevCode-1/small.png'
import rectblueprint from '../prevCode-1/rect.png'
import smallerrect from '../prevCode-1/smaller-rect.png'


const Prev1 = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (

        <div className="prev-1-Ib">
            <div className="navbar"></div>
            <div className="container container-1">
            <div className="yellowbackground_Blueprint"></div>
                <div className="row first-image">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" className="text-box-1">

                            <p className='container-1_text'>INTERACTIVE BLUEPRINT</p>
                            <p className='container-2_text'>100% customised plan that reduces risks and gives you an edge</p>
                            <div className="small-rect-prev-1"><img src={smallerrect} alt='' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" className="image-first">
                           <img alt='' className='rect' src={rectblueprint} />
                            <img alt='' className='wall' src={wall} />
                            <img alt='' className='smallrect' src={smallrect} />
                            <img alt='' className='backimg' src={backimg} />
                            <div className="banner_right_inner" >
                                <img className='main-prev1' src={main} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>


    )
}

export default Prev1
