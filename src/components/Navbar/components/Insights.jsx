import React, { useContext, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { useNavigate } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import "./Insights.css"


const Insights = () => {
    const navigate = useNavigate();
    const {setShowInsights, showInsights, isLargeScreen, setNavClicked} = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowInsights(false);
        setNavClicked(false);
    }
    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowInsights(false)}>
            <div className={`insights-container ${showInsights? "" : "hidden"}`} onMouseOver={() => {if(isLargeScreen) setShowInsights(true)}} onMouseLeave={() => {if(isLargeScreen) setShowInsights(false)}}>
                <div className="insights-container-body">
                    <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/blogs")}}>
                        <h6>Blogs</h6>
                        <div className="diamond-line"></div>
                    </div>
                    <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                        <h6>Industrial Resources</h6>
                        <div className="diamond-line"></div>
                    </div>
                    <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                        <h6>Video Library</h6>
                        <div className="diamond-line"></div>
                    </div>
                    <div className="insights-container-body-section" onClick={() => {closeOnLink();navigate("/")}}>
                        <h6>Download Resources</h6>
                        <div className="diamond-line"></div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default Insights
