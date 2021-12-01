import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import main2 from '../../IntractiveBluePrint/components/Prev-second/mainimage.png'
import wall2 from '../../IntractiveBluePrint/components/Prev-second/wall.png'
import small2 from '../../IntractiveBluePrint/components/Prev-second/smallrectangle.png'
import side2 from '../../IntractiveBluePrint/components/Prev-second/sideimage.png'
import '../../IntractiveBluePrint/components/Prev-second/prev2.css'

const SACComp2 = () => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='prev2'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 imaging-2 d-flex justify-content-center align-items-center flex-column">
                        <div className="images-2">
                            <img className='wall2-container' src={wall2} alt='' />
                            <img className='side2-container' src={side2} alt='' />
                            <img className='small2-container' src={small2} alt='' />
                            <div className="img-container">
                                <div className="hoverinit Inc_Div_our-faith-main-img">
                                    <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                        <img className='main2 ' src={main2} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 texting-2">
                        <p data-aos="fade-left" className='prev-2-text-1'>Organic growth strategies</p>
                        <p data-aos="fade-left" className='prev-2-text-2'>At the heart of every marketing plan lies opportunity. What enterprises require today are winning strategies driven by data and AI, which also provide valuable insights that can be executed at speed and certainty across the organisation. In addition, scalability plays a pivotal role in sustaining profitable growth in any market. Therefore, our professional marketing solutions are centred around bringing high-level customer experiences to the table to ensure unrivalled, ensuing industry presence.</p>
                        <p data-aos="fade-left" className='prev-2-text-2'>Wherever you are in the world and no matter the nature of your business, our functional experts create measurable, defined values while providing innovative solutions to help you connect with your customers better, improve adaptability and boost sustainable growth. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SACComp2
