import React from 'react'
import "./GTMComp7.css"
import img1 from "./images/comp7-2.png"

const GTMComp7 = () => {
    return (
        <div className="gtm-comp7-container">
            <div data-aos="fade-right" data-aos-duration="2000" className="comp7-left">
                <h2>Improved Marketing Mix</h2>
                <p>Corporality’s innovative digital marketing audit
                     strategies help create visually evident changes
                      in your current processes to bring about a fresh
                       and impactful perspective to further augment
                        the presence of your brand.
                </p>
                <div>
                    Explore
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="comp7-right">
                <div>
                    <div className="moving-blue-bar"></div>
                    <div className="gtm-comp7-img-wrapper">
                        <img src={img1} alt="" />
                    </div>
                    <div className="random-comp7-div"></div>
                </div>
            </div>
        </div>
    )
}

export default GTMComp7
