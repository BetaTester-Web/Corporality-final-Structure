import React, { useContext } from 'react'
import './Services.css'
import servicesImage from '../assets/services-strategies.jpg'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';

const Services = () => {
    const {setShowServices, showServices, isLargeScreen, setNavClicked} = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowServices(false);
        setNavClicked(false);
    }
    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowServices(false)}>
        <div className={`services-container ${showServices? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowServices(true)}} onMouseLeave={() => {if(isLargeScreen)setShowServices(false)}}>
            <div className="services-section">
                <Link to="/" onClick={closeOnLink} className="services-section-items">
                    <h6>Go to Marketing Strategy</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/BrandPositioning" onClick={closeOnLink} className="services-section-items">
                    <h6>Brand Positioning</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/CorporateStrategy" onClick={closeOnLink} className="services-section-items">
                    <h6>Corporate Strategy</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <div className="services-section">
                <Link to="/" onClick={closeOnLink} className="services-section-items">
                    <h6>Digital Media Marketing</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/InteractiveBluePrint" onClick={closeOnLink} className="services-section-items">
                    <h6>Interactive Blueprint</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <div className="services-section">
                <Link to="/StrategyConsultancy" onClick={closeOnLink} className="services-section-items">
                    <h6>Strategic Consultancy</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/CxoStrategy" onClick={closeOnLink} className="services-section-items">
                    <h6>Outsourced CXO</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <img src={servicesImage} alt="strategies-consultancy" className="strategic-consultancy" />
        </div>
        </OutsideClickHandler>
    )
}

export default Services
