import React from 'react'
import './MarketingAudit.css'

const MarketingAudit = () => {
    return (
        <>
            <div className="container py-5">
            <div className="d-xl-flex">
                
                <div className="d-flex flex-column ddm-Scope">
                    {/* <img src="./img/DigitalMediaMarketing/ddmscope.png" alt="" className="img-fluid m-2" /> */}
                    <img src="./img/DigitalMediaMarketing/scope.png" alt="" className="img-fluid Scope-txt" />
                    <div className="ddminitReasearch"></div>
                    <img src="./img/DigitalMediaMarketing/scopeline.png" alt="" className=" Scope-Line" />
                    <img src="./img/DigitalMediaMarketing/scopekscope.png" alt="" className=" Scope-K-Scope" />
                </div>
                
                <div className="ddm-audit">
                    <h1>Marketing Audit and Recommendations</h1>
                    <p>Sometimes the most complex challenge requires the simplest of solutions - the trick is to possess the ability to recognise the solution.  With the rare ability to identify, recommend and simultaneously mitigate challenges using in depth analytics and operational evaluation, Corporality Global conducts audits across your marketing landscape to provide enjoinders that boost business goals and growth.</p>

                    
                    <div className="ddm-audit-strategies">
                    <h3>Our strategies will :</h3>
                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Streamline your traditional and digital marketing management processes
                    </p>
                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Address inefficiencies while augmenting efficacy 
                    </p>
                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Cut down on unnecessary costs
                    </p>
                    <p>
                        <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="" className=" mx-2" />
                        Cut down on unnecessary costs
                    </p>
                    </div>

                    <p>
                    Get a fresh perspective with the help of technology to establish the power of your brand. It is extremely crucial to substantiate your marketing spend to keep your overall business performance in check.
                    </p>
                </div>

            </div>
            
        </div>
    </>
    )
}

export default MarketingAudit
