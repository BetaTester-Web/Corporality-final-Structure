import React , {useEffect} from 'react'
import aos from 'aos'
import '../FirstComponent/Clients.css'
import MainClients from '../FirstComponent/mainClients.png'
import BackClients from '../FirstComponent/BaCKINClients.png'
import wallClients from '../FirstComponent/wallClients.png'
import smallrectClients from '../FirstComponent/rectClients.png'
import rectClients from '../FirstComponent/smallrecClients.png'
import smallerrectClients from '../FirstComponent/smallerrectClients.png'
import yellowbackground from './yellowbackground.png'


const Clients = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className="Clients">
            <div className="navbar-Clients"></div>
            <div className="container container-1-Clients">
            <div className="yellowbackground_Clients">
                <img src={yellowbackground} alt='' />
            </div>
                <div className="row first-image-Clients">
                    <div className="col-lg-6">
                        <div data-aos="fade-right"  className="text-box-1-Clients">

                            <p className='container-1_text-Clients'>Working with our clients</p>
                            <p className='container-2_text-Clients'>Nurturing the customers’ vision to bring it closer to reality. </p>
                            <p className='container-3_text-Clients'>We are one of the most powerful sources of business growth and progress. We help our customers unfold their dreams to reality.</p>
                            <div className="small-rect-prev-1-Clients"><img src={ smallerrectClients} alt='' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left"  className="image-first-Clients">
                            <img alt='' className='rect-Clients' src={rectClients} />
                            <img alt='' className='wall-Clients' src={wallClients} />
                            <img alt='' className='smallrect-Clients' src={smallrectClients} />
                            <img alt='' className='backimg-Clients' src={BackClients} />
                            <div className="banner_right_inner-Clients" >
                                <img className='main-prev1-Clients' src={MainClients} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
