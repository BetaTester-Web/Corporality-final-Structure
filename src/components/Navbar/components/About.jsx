import React from 'react'
import './About.css'
import careersImg from '../assets/careers.png';
import OutsideClickHandler from 'react-outside-click-wrapper';


const About = ({setShowAbout, showAbout, showAbout2, setShowAbout2, menuId, setMenuId, isLargeScreen}) => {

    const show1 = () => {
        setMenuId(1);
        setShowAbout2(true);
    }
    const show2 = () => {
        setMenuId(2);
        setShowAbout2(true);
    }
    const show3 = () => {
        setMenuId(3);
        setShowAbout2(true);
    }

    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={()=> setShowAbout(false)} >
        <div className={`about-container ${showAbout? "" : "hidden"}`} onMouseOver={() => {console.log("over about");if(isLargeScreen)setShowAbout(true)}} onMouseLeave={() => {if(isLargeScreen)setShowAbout(false)}} >
            <div className="about-section who-we-are">
                <div className="about-section-head" onClick={() => { if(!isLargeScreen)show1()}}>
                    <h3 className="about-section-head-text">Who we are</h3>
                    <div className="line"></div>
                </div>
                <div className="section-list">
                    <a href="#" className="section-list-items">
                        <h6>About Corporality</h6>
                        <div className="diamond-line"></div>
                    </a>
                    <a href="#" className="section-list-items">
                        <h6>How We Work with Clients</h6>
                        <div className="diamond-line"></div>
                    </a>
                    <a href="#" className="section-list-items">
                        <h6>Inclusion and Diversity</h6>
                        <div className="diamond-line"></div>
                    </a>
                    <a href="#" className="section-list-items">
                        <h6>Partner Programmes</h6>
                        <div className="diamond-line"></div>
                    </a>
                    <a href="#" className="section-list-items">
                        <h6>Sustainable Growth</h6>
                        <div className="diamond-line"></div>
                    </a>
                </div>
            </div>
            <div className="about-section how-were-organised">
                <div className="about-section-head" onClick={() => { if(!isLargeScreen)show2() }}>
                    <h3 className="about-section-head-text">How we're organised</h3>
                    <div className="line"></div>
                </div>
                <div className="section-list">
                    <a href="#" className="section-list-items">
                        <h6>Interactive Blueprint</h6>
                        <div className="diamond-line"></div>
                    </a>
                    <a href="#" className="section-list-items">
                        <h6>Strategy & Consulting</h6>
                        <div className="diamond-line"></div>
                    </a>
                </div>
            </div>
            <div className="about-section careers">
                <div className="about-section-head" onClick={() => { if(!isLargeScreen)show3() }}>
                    <h3 className="about-section-head-text">Careers</h3>
                    <div className="line"></div>
                </div>
                <div className="section-list">
                    <a href="#" className="section-list-items">
                        <h6>Careers</h6>
                        <div className="diamond-line"></div>
                    </a>
                </div>
            </div>
            <img src={careersImg} alt="" className="careers-img" />
        </div>
        </OutsideClickHandler>
    )
}

export default About
