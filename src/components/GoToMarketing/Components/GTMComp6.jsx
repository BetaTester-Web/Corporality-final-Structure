import React, {useEffect} from 'react'
import "./GTMComp6.css"
import main from "./images/comp-6-main.png"
import sub from "./images/comp-6-sub.png"
import a from "./images/comp-6-1.png"
import b from "./images/comp-6-2.png"
import c from "./images/comp-6-3.png"
import d from "./images/comp-6-4.png"
import e from "./images/comp-6-5.png"
import f from "./images/comp-6-6.png"
import g from "./images/comp-6-7.png"


const GTMComp6 = () => {
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = document.querySelector('.gtm-comp-6-head h1');
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = document.querySelector('.gtm-comp-6-head h1');
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(() => {
        observer1.observe(document.querySelector(".gtm-comp-6-head"));
    },[])
    return (
        <div className="gtm-comp-6">
            <div className="gtm-comp-6-head">
                <h1 className='animate'><span>CORPORALITY</span>&nbsp;<span>HAS</span>&nbsp;<span>WHAT</span>&nbsp;<span>IT</span>&nbsp;<span>TAKES</span></h1>
                {/* <h2 data-aos="fade-down" data-aos-duration="1600">Corporality has what it takes</h2> */}
                <p data-aos="fade-down" data-aos-duration="1600">
                Our structured and proven methodology emanates
                 powerful Go To Marketing strategies that meet 
                 the critical needs of your product’s positioning. 
                 We differentiate your product in a competitive environment 
                 and tailor a model that best suits the targeted segment. 
                 With us, GTM is a metamorphosis that ensures complete 
                 engagement while mapping all needs, impacts and 
                 opportunities for ultimate success.
                </p>
            </div>
            <div className="gtm-comp-6-body">
                <div data-aos="zoom-in-down" data-aos-duration="1000" className="center-comp-6">
                    <img data-aos="zoom-in" data-aos-duration="1600" src={main} className="comp-6-main-img" alt="" />
                    {/* <img src={sub} className="comp-6-main-img" alt="" /> */}
                </div>
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={a} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={b} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={c} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={d} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={e} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={f} alt="" />
                <img data-aos="fade-zoom-in" className="comp-6-sub-img" src={g} alt="" />
            </div>
        </div>
    )
}

export default GTMComp6
