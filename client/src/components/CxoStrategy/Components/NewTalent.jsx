import React, { useState } from 'react'
import "./NewTalent.css"
import arrow from "../img/talent/arrow-talent.png"
import arrowy from "../img/talent/arrow-y.png"
import arrowp from "../img/talent/arrow-p.png"
import { useMediaQuery } from 'react-responsive'

const NewTalent = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' })
    const planning = ["Definig the strategy", "Resource Allocation", "Extending Control Mechanisms", "Identify Objectives and challenges", "Setting Final Goals"];
    const strategy = ["Identify the means", "Strategic Planning", "Sythesise Information", "Refine Company vision and mission", "Execute strategies and Follow-up"];
    const implementation = ["Integrating functional areas", "Designing offers according to customer funnels", "Rising above the noise"];
    const outcomes = ["Resolving pain points", "Establishing a feedback loop", "Assessing the experience"];

    const [List, setList] = useState({name : "planning", list : planning, img : arrow});

    return (
        <div className='new-talent-container'>
            <div className="new-talent-container-head">
                <h1 data-aos="fade-down" data-aos-duration="1000">Top Executive Talent that delivers</h1>
                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Our leadership team comes with years of experience,
                expertise, and success in resolving customer issues. 
                Our contributors define business goals, marketing
                 strategies, and pre-plan outcomes to deliver measurable
                 results.</p>
            </div>
            <div className="new-talent-container-btns" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">
                <button className={List.name==="planning" && "talent-btn-active"} onClick={() => {setList({name:"planning", list: planning, img: arrow})}}>Planning</button>
                <button className={List.name==="strategy" && "talent-btn-active"} onClick={() => {setList({name : "strategy", list: strategy, img: arrowy})}}>Strategy</button>
                <button className={List.name==="implementation" && "talent-btn-active"} onClick={() => {setList({name: "implementation", list: implementation, img: arrowp})}}>Implementation</button>
                <button className={List.name==="outcomes" && "talent-btn-active"} onClick={() => {setList({name : "outcomes", list: outcomes, img: arrow})}}>Outcomes</button>
            </div>
            <div className="new-talent-container-diamonds">
                {   
                    List.list.map((item, index) => {
                        return(
                            <div key={index}  data-aos={ isSmallScreen? "fade-down" : "fade-right"} data-aos-duration="1000" data-aos-delay={index*200} className={`${List.name}-talent`}>
                                <div className="diamond-content-wrapper">
                                    <h4>{item}</h4>
                                </div>
                                {(index < List.list.length-1) && <img src={List.img} alt="arrow" />}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewTalent
