import React, { useContext } from 'react'
import "./Industries.css"
import OutsideClickHandler from 'react-outside-click-wrapper';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from '../../../CommonHandler/TopHandler';


const Industries = () => {
    const {showIndustries, setShowIndustries, isLargeScreen, setNavClicked} = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowIndustries(false);
        setNavClicked(false);
        topHandler();
    }
    return (
        <OutsideClickHandler className="outside-handler"  onOutsideClick={() => setShowIndustries(false)}>
        <div className={`industries-container ${showIndustries? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen)setShowIndustries(true)}} onMouseLeave={() => {if(isLargeScreen)setShowIndustries(false)}}>
            <div className="industries-section"> 
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Medtech</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Fintech - Credit Union</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Geospatial</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Biotech / Bio chemical / Chemical Engineering</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <div className="industries-section">
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Nanotech</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Age Care and retirement</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Cruise and Tourism</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Industrial Equipment</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <div className="industries-section">
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Metal Industry</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Construction</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Manufacturing</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Information Technology</h6>
                    <div className="diamond-line"></div>
                </Link>
            </div>
            <div className="industries-section">
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">High Tech</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Agriculture</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Health Care</h6>
                    <div className="diamond-line"></div>
                </Link>
                <Link to="/" onClick={closeOnLink} className="industries-item">
                    <h6 className="industries-item-content">Utilities and Energy - Solar energy / Renewable</h6>
                    <div className="diamond-line"></div>
                </Link>

            </div>
            
        </div>
        </OutsideClickHandler>
    )
}

export default Industries
