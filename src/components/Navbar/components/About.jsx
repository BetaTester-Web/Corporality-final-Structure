import React, { useContext } from 'react'
import './About.css'
import careersImg from '../assets/careers.png';
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
// import {withRouter} from 'react-router';


const About = () => {
    const {setShowAbout, showAbout, setShowAbout2, setMenuId, isLargeScreen} = useContext(NavbarContext);

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
                    <Link to="/about-corporality" onClick={() => setShowAbout(false)} className="section-list-items">
                        <h6>About Corporality</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/work-with-clients" onClick={() => setShowAbout(false)}  className="section-list-items">
                        <h6>How We Work with Clients</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/inclusion-and-diversity" onClick={() => setShowAbout(false)}  className="section-list-items">
                        <h6>Inclusion and Diversity</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/partnership-programmes" onClick={() => setShowAbout(false)} className="section-list-items">
                        <h6>Partner Programmes</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/sustainable-growth" onClick={() => setShowAbout(false)}  className="section-list-items">
                        <h6>Sustainable Growth</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
            </div>
            <div className="about-section how-were-organised">
                <div className="about-section-head" onClick={() => { if(!isLargeScreen)show2() }}>
                    <h3 className="about-section-head-text">How we're organised</h3>
                    <div className="line"></div>
                </div>
                <div className="section-list">
                    <Link to="/interactive-blueprint" onClick={() => setShowAbout(false)} className="section-list-items">
                        <h6>Interactive Blueprint</h6>
                        <div className="diamond-line"></div>
                    </Link>
                    <Link to="/strategy-and-consulting" onClick={() => setShowAbout(false)} className="section-list-items">
                        <h6>Strategy & Consulting</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
            </div>
            <div className="about-section careers">
                <div className="about-section-head" onClick={() => { if(!isLargeScreen)show3() }}>
                    <h3 className="about-section-head-text">Careers</h3>
                    <div className="line"></div>
                </div>
                <div className="section-list">
                    <Link to="/careers" onClick={() => setShowAbout(false)} className="section-list-items">
                        <h6>Careers</h6>
                        <div className="diamond-line"></div>
                    </Link>
                </div>
            </div>
            <img src={careersImg} alt="" className="careers-img" />
        </div>
        </OutsideClickHandler>
    )
}

export default About
// export default withRouter(About)
