
import './Page3.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Page3 = () => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <>

            <div className="">
                <div className="d-md-flex justify-content-center Consultancypage-3">
                <div data-aos="fade-right" data-aos-duration="1200">

                </div>
                    <div className="model-para">
                        <h2 className="">Business Model vs Value Design</h2>
                        <p className="">Do your clients truly understand how you charge them? There are various models that you can apply to generate revenue. The objective is to evaluate and present an understandable paradigm that can be used across segments. Then, create a shift in the revenue model and connect it with the strategic business growth strategy to maximise profitability.</p>
                    </div>



                    <div class='circle-container-consultancy'>
                        <div className="centeeeer"><div className="Consultancypage-3-diamond centereeeee Consultancydia Consultancyc"><p>Growth Segmentation</p></div></div>
                        <div className="deg45"><div className="Consultancypage-3-diamond Consultancydia"> <p>Account Segmentation</p></div></div>
                        <div className="deg225"><div className="Consultancypage-3-diamond Consultancydia"><p>Market Segmentation</p></div></div>
                        <div className="deg135"><div className="Consultancypage-3-diamond Consultancydia"><p>Routes To Marketing</p></div></div>
                        <div className="deg315"><div className="Consultancypage-3-diamond Consultancydia"><p>Buyer Segmentation </p></div></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page3
