import React, { createRef, useEffect, useState } from 'react'
import "./NewBanner.css"

const NewBanner = () => {
    const [indicatorId, setIndicatorId] = useState(1);
    const [showYoutube, setShowYoutube] = useState(false);
    
    useEffect(() => {
        setInterval(() => {
            setIndicatorId(i => {
                console.log(i);
                if(i < 3){
                    return i + 1;
                }else{
                    return 1;
                }});
          }, 3000);
    }, [])
    return (
        <div className="bannerContainer">
            <video className="bannerVideo" src="/img/HomePage/media/banner-vid-latest.mp4" type="video/mp4" loop autoPlay muted></video>
            <div className="leftBannerContainer">
                <div className="leftIndicators">
                    {/* <div>{indicatorId}</div> */}
                    <div className={`indicatorCircle ${indicatorId === 1? "activeIndicatorCircle" : ""}`} onClick={() => setIndicatorId(1)} ></div>
                    <div className={`indicatorCircle ${indicatorId === 2? "activeIndicatorCircle" : ""}`} onClick={() => setIndicatorId(2)}></div>
                    <div className={`indicatorCircle ${indicatorId === 3? "activeIndicatorCircle" : ""}`} onClick={() => setIndicatorId(3)}></div>
                </div>
                <div className="rightPartBanner">
                    <div className={`bannerText ${indicatorId===1? "" : "bannerTextHide"}`}>
                        <h1 className="bannerHead">global sales and marketing company</h1>
                        <p className="bannerSubtitle">
                            Identifying every opportunity to convert your potentials into ready-to-buy states.
                        </p>
                        <p className="bannerSubtitle">
                            Leading Management Consulting Firm Australia.
                        </p>
                    </div>
                    <div className={`bannerText ${indicatorId===2? "" : "bannerTextHide"}`}>
                        <h1 className="bannerHead">Reimagining your boundaries</h1>
                        <p className="bannerSubtitle">
                            Expanding your reach to provide more than just marketing solutions
                            Superior Online Marketing Company Australia
                        </p>
                    </div>
                    <div className={`bannerText ${indicatorId===3? "" : "bannerTextHide"}`}>
                        <h1 className="bannerHead">The future of businesses is right here</h1>
                        <p className="bannerSubtitle">
                            Implement the most effective digital marketing strategies for your business
                            Premier marketing company Australia
                        </p>
                    </div>
                    <div className="bannerSocialLinksContainer">
                        <h2 className="bannerSocialText">Social</h2>
                        <div className="socialIconsContainer">
                            <div className="socialIcon">
                                <i className="fa fa-facebook-f"></i>
                            </div>
                            <div className="socialIcon">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="socialIcon">
                                <i className="fa fa-instagram"></i>
                            </div>
                            <div className="socialIcon">
                                <i className="fa fa-linkedin"></i>
                            </div>
                            <div className="socialIcon">
                                <i className="fa fa-pinterest"></i>
                            </div>
                            <div className="socialIcon">
                                <i className="fa fa-youtube-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightBannerContainer">
                <img className={showYoutube ? "hidden" : ""} onClick={() => setShowYoutube(true)} src="/img/HomePage/media/bannerThumbnail.png" alt="" />
                <iframe className={showYoutube ? "" : "hidden"} width="560" height="315" src="https://www.youtube.com/embed/0g9B3ZC5Hvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="twoDiamonds">
                <div className="bigDiamond">
                    <img src="/img/HomePage/media/bigRectangle.png" alt="" />
                    <div className="callButton">
                        <img src="/img/HomePage/media/callButton.png" alt="" />
                    </div>
                    <h3 className="mobileNumber">+62 2 83794089</h3>
                </div>
                <div className="smallDiamond">
                    <img src="/img/HomePage/media/smallRectangle.png" alt="" />
                </div>
            </div>
            <img src="/img/HomePage/media/random-square.png" alt="" className="square-1" />
            <img src="/img/HomePage/media/random-square-1.png" alt="" className={`square-2 ${indicatorId===1 ? "": "square-2-diff"}`} />
        </div>
    )
}

export default NewBanner
