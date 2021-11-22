import React from 'react'
import './Services.css'
import servicesImage from '../assets/services-strategies.jpg'
import OutsideClickHandler from 'react-outside-click-wrapper';


const Services = ({setShowServices, showServices, isLargeScreen}) => {

    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowServices(false)}>
        <div className={`services-container ${showServices? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowServices(true)}} onMouseLeave={() => {if(isLargeScreen)setShowServices(false)}}>
            <div className="services-section">
                <a href="#" className="services-section-items">
                    <h6>Go to Marketing Strategy</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="services-section-items">
                    <h6>Brand Positioning</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="services-section-items">
                    <h6>Corporate Strategy</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <div className="services-section">
                <a href="#" className="services-section-items">
                    <h6>Digital Media Marketing</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="services-section-items">
                    <h6>Interactive Blueprint</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <div className="services-section">
                <a href="#" className="services-section-items">
                    <h6>Strategic Consultancy</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="services-section-items">
                    <h6>Outsourced CXO</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <img src={servicesImage} alt="strategies-consultancy" className="strategic-consultancy" />
        </div>
        </OutsideClickHandler>
    )
}

export default Services
