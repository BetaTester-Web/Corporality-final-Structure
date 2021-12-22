
import './MarketingAudit.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MarketingAudit = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <div className="container py-5">
            <div className="d-xl-flex">

                <div className="d-flex flex-column ddm-Scope">
            {/* <div data-aos="fade-up"> */}
                    {/* <img src="./img/DigitalMediaMarketing/ddmscope.png" alt="" className="img-fluid m-2" /> */}
                    <div data-aos="fade-down">
                    <img src="./img/DigitalMediaMarketing/scope.png" alt="" className="Scope-txt" />
                    </div>

                    <div></div>
                    <div className="ddminitReasearch"><p>Initial Research</p></div>
                    <img src="./img/DigitalMediaMarketing/scopeline.png" alt="" className=" Scope-Line" />
                    <img src="./img/DigitalMediaMarketing/scopekscope.png" alt="" className=" Scope-K-Scope" />
                {/* </div> */}
            </div>
                
                <div className="ddm-audit">
                
                <div data-aos="fade-left">

                    <div className="ddm-audi">
                    <h1>Marketing Audit and Recommendations</h1>
                    <p>Sometimes the most complex challenge requires the simplest of solutions - the trick is to possess the ability to recognise the solution.  With the rare ability to identify, recommend and simultaneously mitigate challenges using in depth analytics and operational evaluation, Corporality Global conducts audits across your marketing landscape to provide enjoinders that boost business goals and growth.</p>
                    </div>
                </div>

                    
                    <div className="ddm-audit-strategies">
                    <div data-aos="fade-up">

                        <div className="ddmaudit-strat">
                        <h3>Our strategies will :</h3>
                    </div>
                        </div>

            <div data-aos="fade-up" data-aos-delay="200">
                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Streamline your traditional and digital marketing management processes
                    </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">

                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Address inefficiencies while augmenting efficacy 
                    </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">

                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Cut down on unnecessary costs
                    </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">

                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Cut down on unnecessary costs
                    </p>
            </div>
                    </div>
            
            <div data-aos="fade-left" data-aos-delay="900">


                    <p>
                    Get a fresh perspective with the help of technology to establish the power of your brand. It is extremely crucial to substantiate your marketing spend to keep your overall business performance in check.
                    </p>
            </div>
                </div>

            </div>
            
        </div>
    </>
    )
}

export default MarketingAudit
