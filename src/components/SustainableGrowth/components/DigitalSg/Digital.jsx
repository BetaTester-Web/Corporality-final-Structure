import React , {useEffect} from "react";
import '../DigitalSg/Digital.css'
import aos from 'aos'
import main2DigitalSg from '../DigitalSg/MainDigitalSg.png'
import wall2DigitalSg from '../DigitalSg/WallDigitalSg.png'
import small2DigitalSg from '../DigitalSg/smallrectDigitalSg.png'
import side2DigitalSg from '../DigitalSg/GroupDigitalSg.png'

const DigitalSg = () => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='Digital-Sg'>
            <img className='side2-container-Digital' src={side2DigitalSg} alt='' />
            <div className="container">
                <div className="row">
                <div className="col-lg-6 imaging-2-Digital d-flex justify-content-center align-items-center flex-column">
                        <div className="images-2-Digital">
                            <img className='wall2-container-Digital' src={wall2DigitalSg} alt='' />
                            
                            <img className='small2-container-Digital' src={small2DigitalSg} alt='' />
                            <div className="img-container-Digital">
                                <div className="hoverinit-Digital Inc_Div_our-faith-main-img-Digital">
                                    <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                        <img className='main2-Digital ' src={main2DigitalSg} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 texting-2-Digital">
                        <p data-aos="fade-left" className='prev-2-text-1-Digital'>Digital and Technological Sustainability</p>
                        <p data-aos="fade-left" className='prev-2-text-2-Digital'>Improving health and education and combating poverty to promote prosperity are some of the targets set by Corporality Global to achieve sustainability. Technology is instrumental in ensuring a less toxic environment, more stable environment and helps in the effective management of natural resources. The idea is to realise that technology is essential to mitigate all impediments and provide clear pathways to sustainable development. Corporality Global works with local partners to identify challenges to such actions and aims to bestow possible technological solutions to initiate imperishable growth.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalSg
