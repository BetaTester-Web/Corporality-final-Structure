import React, { createRef, useEffect } from 'react';
import "./GTMComp8.css";
import Group886 from './images/product_strategy/Group 886.png';
import Line22 from './images/product_strategy/Line 22.png';
import Line23 from './images/product_strategy/Line 23.png';
import Line26 from './images/product_strategy/Line 26.png';
import market_analysis from './images/product_strategy/market-analysis.png';
import creativity from './images/product_strategy/creativity.png';
import profit from './images/product_strategy/profits.png';
import box from './images/product_strategy/box.png';
import cooperation from './images/product_strategy/cooperation.png';
import onlineshop from './images/product_strategy/online-shop.png';
import goal from './images/product_strategy/goal.png';
import brandawareness from './images/product_strategy/brand-awareness.png';
import test1 from './images/product_strategy/test-1.png';
import received from './images/product_strategy/received.png';
import workflow from './images/product_strategy/workflow.png';
import processing from './images/product_strategy/processing.png';
import prd from './images/product_strategy/product.png';
import sales from './images/product_strategy/sales.png';
import customberservice from './images/product_strategy/customer-service.png';
import marketingstrnew from './images/product_strategy/Marketing statergy new 1.png';

const GTMComp8 = () => {
    const ref = createRef();
    const headRef = createRef();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var textWrapper = headRef.current;
                textWrapper.classList.add('two');
            }
            else {
                var textWrapper = headRef.current;
                textWrapper.classList.remove('two');
            }
        })
    })
    useEffect(()=>{
        observer.observe(ref.current);
    },[])
    return (
        <div className="gtm-comp8-container">
        <div ref={ref} className="strategy_section" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
            <div className="main_container_strategy">
                <h1 ref={headRef} className="animate"><span>P</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>t</span>&nbsp;
                    <span>S</span><span>t</span><span>r</span><span>a</span><span>t</span><span>e</span><span>g</span><span>y</span></h1>
                <div data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    <p>A product planning to launch, your strategy can make or break the product perception. Pitching your product perception to your Buyer’s Persona is critical to the success of your Idea and close to a sale in a persuasive way. More importantly scaling your client portfolio is all dependent upon perception - would you agree?</p>
                </div>
            </div>

            <div className="strategy_card_wrapper">
                <img src={Line22} className="strategy_line22" />
                <div className="strategy_card_wrapper1">
                    <img src={Line23} className="strategy_line23" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                            <h1>Product Planning</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" >
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={market_analysis}></img>
                                    <h1>Market Reasearch and Demand </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={creativity}></img>
                                    <h1>Product Vision and Demand  </h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={profit}></img>
                                    <h1>Bussiness Models and Financial</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={box}></img>
                                    <h1>Product Journey and Roadmap</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={cooperation}></img>
                                    <h1>Partner Strategy</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='2500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={onlineshop}></img>
                                    <h1>Product Design</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="strategy_card_wrapper1">
                    <img src={Line26} className="strategy_line26" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                            <h1>Product Development</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={goal}></img>
                                    <h1>Marketing Objective vs Value Proposition</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={brandawareness}></img>
                                    <h1>Brand Strategy and Marketing</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={test1}></img>
                                    <h1>User Experience Design</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={received}></img>
                                    <h1>Product Packaging</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='2500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={workflow}></img>
                                    <h1>Release Strategy and Planning</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="strategy_card_wrapper1">
                    <img src={Line26} className="strategy_line27" />
                    <div className="strategy_card_head">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                            <h1>Product Launch</h1>
                            <img src={Group886} />
                        </div>
                    </div>
                    <div className="strategy_card_wrapper_inner">
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={processing}></img>
                                    <h1>Launch Process Implementation</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={prd}></img>
                                    <h1>Product Marketing Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={sales}></img>
                                    <h1>Product sales Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='1500'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation2">
                                    <img src={customberservice}></img>
                                    <h1>Customber success Support</h1>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay='2000'>
                            <div className="strategy_card">
                                <div className="strategy_card_animation1">
                                    <img src={marketingstrnew}></img>
                                    <h1>Monitoring and Feedback</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GTMComp8
