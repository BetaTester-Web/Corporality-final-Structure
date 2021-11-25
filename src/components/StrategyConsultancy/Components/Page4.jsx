import React from 'react'
import './Page4.css'

const Page4 = () => {
    return (
    <>
        
            <div className="d-lg-flex justify-content-center page-4">
                <div className='circle-container2'>
                        <div className="center">
                            <img src="./img/StrategyConsultancy/centerCircle.png" alt="" className="" />
                        </div>
                        <div className="deg0"><img src="./img/StrategyConsultancy/polygon1.png"   className=" polygon" alt="" /></div>
                        <div className="deg90"><img src="./img/StrategyConsultancy/polygon1.png"  className=" polygon"  alt="" /></div>
                        <div className="deg180"><img src="./img/StrategyConsultancy/polygon1.png" className=" polygon"  alt="" /></div>
                        <div className="deg270"><img src="./img/StrategyConsultancy/polygon1.png" className=" polygon"  alt="" /></div>
                        {/* <img src="./img/StrategyConsultancy/Group 1188.png" className="img-fluid" alt="" /> */}

                </div>

                <div className="page-4-cont">
                    <h2 className="head">Go to Marketing Strategy</h2>
                    <p>Corporality Global offers Go To Marketing strategies that set you in the right direction. While choosing the market differentiators, we help you draw insights from your customers and your competitors to plan your strategy and tactics that will set you up for success</p>

                    <div className="main-div">
                    <img className="img-fluid" src="./img/StrategyConsultancy/explore.png" alt="" />
                    <img className="img-fluid front_arrow" src="./img/StrategyConsultancy/vector.png" alt="" />
                    <span className="explore-btn">Explore</span>
                    </div>
                    <h2 className="head head2">Customer Experience</h2>
                    <p>Even the slightest friction can affect customer experiences. CXO initiatives are the best way to regulate and monitor customer satisfaction. Corporality Global takes CXO a notch higher, offering strategies that directly impact consumer gratification and revenue growth.</p>

                    <div className="main-div">
                    <img className="img-fluid" src="./img/StrategyConsultancy/explore.png" alt="" />
                    <img className="img-fluid front_arrow" src="./img/StrategyConsultancy/vector.png" alt="" />
                    <span className="explore-btn">Explore</span>
                    </div>
                </div>

            
        </div>
    </>
    )
}

export default Page4
