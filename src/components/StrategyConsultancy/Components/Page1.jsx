import React from 'react'
import './Page1.css'

const Page1 = () => {
    return (
        <>
            <div className="page1" >
                <div className="container">
                    <div className="d-md-flex align-items-center justify-content-between pageContent">
                        <div className="page1-content">
                            <h3>STRATEGIC GROWTH CONSULTING DRIVEN BY EXPERTISE, ANALYTICS AND EXPERIENCE</h3>
                            <p>Corporality Global is committed to delivering enterprise value in the form of revenue growth and operations that don't just meet expectations but exceed them.</p>

                                <div className="page1-img d-sm-flex p-4">
                                    <img src="./img/StrategyConsultancy/Rectangle 203.png" alt="" className="img-fluid img2" />

                                    <div className="youtubebox text-center">
                                        <p className="">Subscribe Our YouTube Channel</p>
                                        <button type="button" className="btn footer-button">
                                    <div className="footer-button-text">

                                    Subscribe
                                    </div>
                                    </button>
                                    </div>
                                </div>
                        </div>
                        <div className="img3">
                        <img className="img-fluid" src="./img/StrategyConsultancy/Group 1160.png" alt="" />
                        </div>
                    </div>

                    <div className="grad-1">
                        <img src="./img/StrategyConsultancy/Rectangle 68.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            

        </>
    )
}

export default Page1
