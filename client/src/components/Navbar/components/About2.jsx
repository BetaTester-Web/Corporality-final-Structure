import React, { useContext } from 'react'
import './About2.css'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from '../../../CommonHandler/TopHandler';


const About2 = () => {
    const {menuId, showAbout2, setShowAbout2, setNavClicked} = useContext(NavbarContext);
    const data = {
        1 : [{name : "About Corporality", route : "/about-corporality"},{name : "How We Work with Clients", route : "/work-with-clients"},{name :"Inclusion and Diversity", route : "/inclusion-and-diversity"}, {name : "Partner Programmes", route : "/partnership-programmes"}, {name : "Sustainable Growth", route : "/sustainable-growth"}],
        2 : [{name : "Interactive Blueprint", route : "/interactive-blueprint"}, {name : "Strategy and Consulting", route : "/strategy-and-consulting"}],
        3 : [{name : "Careers", route : "/careers"}]
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
                        <Link to={item.route} onClick={()=>{setShowAbout2(false);setNavClicked(false);topHandler()}} className="about-sub-menu-list-items" key={index}>
                            <h6>{item.name}</h6>
                            {/* <div className="diamond-line"></div> */}
                        </Link>
                    )
                })}
            </div>
        </div>
        </OutsideClickHandler>
    )
}

export default About2