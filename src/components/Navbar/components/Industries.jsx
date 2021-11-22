import React from 'react'
import "./Industries.css"
import OutsideClickHandler from 'react-outside-click-wrapper';


const Industries = ({showIndustries, setShowIndustries, isLargeScreen}) => {

    return (
        <OutsideClickHandler className="outside-handler"  onOutsideClick={() => setShowIndustries(false)}>
        <div className={`industries-container ${showIndustries? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowIndustries(true)}} onMouseLeave={() => {if(isLargeScreen)setShowIndustries(false)}}>
            <div className="industries-section"> 
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Medtech</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Fintech - Credit Union</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Geospatial</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Biotech / Bio chemical / Chemical Engineering</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <div className="industries-section">
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Nanotech</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Age Care and retirement</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Cruise and Tourism</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Industrial Equipment</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <div className="industries-section">
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Metal Industry</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Construction</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Manufacturing</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Information Technology</h6>
                    <div className="diamond-line"></div>
                </a>
            </div>
            <div className="industries-section">
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">High Tech</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Agriculture</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Health Care</h6>
                    <div className="diamond-line"></div>
                </a>
                <a href="#" className="industries-item">
                    <h6 className="industries-item-content">Utilities and Energy - Solar energy / Renewable</h6>
                    <div className="diamond-line"></div>
                </a>

            </div>
            
        </div>
        </OutsideClickHandler>
    )
}

export default Industries
