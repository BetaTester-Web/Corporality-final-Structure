import React from 'react'
import "./Portfolio.css"

const NewPortfolio = () => {
    return (
        <div className="portfolioContainer">
            <div className="portfolioHead">
                <h2 data-aos="fade-down">Our Portfolio</h2>
                <hr className="opacity-100" />
            </div>
            <div className="portfolioBody">
                <div data-aos="flip-left" className="portfolioSection">
                    <img src="/img/HomePage/media/divine-intercession.png" alt="" className="portfolioSectionImg" />
                    <div className="portfolioFloatingDiv">
                        <h4>Divine Intercession</h4>
                        <p>Creating high-quality solutions
                        for large enterprises with complex workflows.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>
                <div data-aos="flip-right" className="portfolioSection">
                    <img src="/img/HomePage/media/build-q.png" alt="" className="portfolioSectionImg" />
                    <div className="portfolioFloatingDiv">
                        <h4>Build Q</h4>
                        <p>Prospective plans to give back
                            to society making a green environment a reality.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>
                <div data-aos="flip-left" className="portfolioSection">
                    <img src="/img/HomePage/media/liqmet.png" alt="" className="portfolioSectionImg" />
                    <div className="portfolioFloatingDiv">
                        <h4>Liqmet</h4>
                        <p>Utilising agile in its true form to provide timely,
                            transparent and reliable outcomes.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPortfolio
