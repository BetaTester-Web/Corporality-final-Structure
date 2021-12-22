import React from 'react'
import "./NewDifferentiate.css"
import bigVector from "../img/differentiate/bigVector.png"
import main from "../img/differentiate/main.png"
import mainMan from "../img/differentiate/mainWithMan.png"
import man from "../img/differentiate/man.png"
import gears from "../img/differentiate/gears.png"
import textBox from "../img/differentiate/textBox.png"
import textBoxx from "../img/differentiate/textBox2.png"

const NewDifferentiate = () => {
    return (
        <div className='new-differentiate'>
            <div className="new-differentiate-left">
                <h3>
                    Outsourced Cxo
                </h3>
                <h1>
                    Differentiate Your Brand Experience
                </h1>
                <p>
                    Build customer loyalty through differentiated brand 
                    strategies that activate a positive relationship between 
                    the business and its customers. Leadership is highly 
                    essential in creating seamless and connected customer 
                    journeys that are critically important.
                </p>
            </div>
            <div className="new-differentiate-right">
                <img src={bigVector} alt="" />
                <img src={gears} alt="" />
                <img src={textBox} alt="" />
                <img src={mainMan} alt="" />
                <img src={textBoxx} alt="" />
                <div className="new-diff-social-icons">

                    <i class="fa fa-facebook" aria-hidden="true" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}></i>
                    
                    <i class="fa fa-twitter" aria-hidden="true" onClick={() => window.open("https://twitter.com/corporalityg/")}></i>
                    
                    <i class="fa fa-instagram" aria-hidden="true" onClick={() => window.open("https://www.instagram.com/corporalityg/")}></i>
                    
                    <i class="fa fa-linkedin" aria-hidden="true" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}></i>
                    
                    <i class="fa fa-pinterest" aria-hidden="true" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}></i>
                    
                    <i class="fa fa-youtube-play" aria-hidden="true" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}></i>
                    
                </div>
                <div className="new-diff-call">
                    <div onClick={() => window.open("tel:+61 2 83794089", "_self")}>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDifferentiate
