import React from 'react'
import './About2.css'
import OutsideClickHandler from 'react-outside-click-wrapper';


const About2 = ({menuId, showAbout2, setShowAbout2}) => {
    const data = {
        1 : ["About Corporality","How We Work with Clients","Inclusion and Diversity", "Partner Programmes", "Sustainable Growth"],
        2 : ["Interactive Blueprint", "Strategy and Consulting"],
        3 : ["Careers"]
    }

    const handleGoBack = () => {
        console.log("handleGoBack", showAbout2)
        setShowAbout2(false);
    }

    return (
        <OutsideClickHandler className="" onOutsideClick={()=> setShowAbout2(false)}>
        <div className={`about-sub-menu ${showAbout2? "about-sub-menu-show" : "" }`}>
            <div className="about-sub-menu-head">
                <svg className="back-btn" onClick={handleGoBack} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                About Corporality
            </div>
            <div className="about-sub-menu-list">
                {data[menuId].map((item, index) => {
                    return (
                        <a href="#" className="about-sub-menu-list-items" key={index}>
                            <h6>{item}</h6>
                            {/* <div className="diamond-line"></div> */}
                        </a>
                    )
                })}
            </div>
        </div>
        </OutsideClickHandler>
    )
}

export default About2