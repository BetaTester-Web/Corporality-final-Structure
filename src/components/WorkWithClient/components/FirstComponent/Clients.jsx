import React , {useEffect} from 'react'
import aos from 'aos'
import '../FirstComponent/Clients.css'
import Main from '../FirstComponent/main.png'
import Back from '../FirstComponent/back.png'
import wall from '../FirstComponent/wall.png'
import smallrect from '../FirstComponent/rect.png'
import rect from '../FirstComponent/smallrec.png'
import smallerrect from '../FirstComponent/smallerrect.png'


const Clients = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className="Clients">
            <div className="navbar-Clients"></div>
            <div className="container container-1-Clients">
            <div className="yellowbackground_Clients"></div>
                <div className="row first-image-Clients">
                    <div className="col-lg-6">
                        <div data-aos="fade-right"  className="text-box-1-Clients">

                            <p className='container-1_text-Clients'>Working with our clients</p>
                            <p className='container-2_text-Clients'>Nurturing the customers’ vision to bring it closer to reality. </p>
                            <p className='container-3_text-Clients'>We are one of the most powerful sources of business growth and progress. We help our customers unfold their dreams to reality.</p>
                            <div className="small-rect-prev-1-Clients"><img src={smallerrect} alt='' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left"  className="image-first-Clients">
                            <img alt='' className='rect-Clients' src={rect} alt='' />
                            <img alt='' className='wall-Clients' src={wall} />
                            <img alt='' className='smallrect-Clients' src={smallrect} />
                            <img alt='' className='backimg-Clients' src={Back} />
                            <div className="banner_right_inner-Clients" >
                                <img className='main-prev1-Clients' src={Main} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
