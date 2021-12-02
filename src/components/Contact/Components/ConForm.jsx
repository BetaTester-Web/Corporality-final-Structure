
import './ConForm.css'
import './ContactForm.css'
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ConForm = () => {
    
    let placeholder = document.getElementById('input');
   
    placeholder.addEventListener('focus', (el) => {
        this.removeAttribute('placeholder');
    })

    useEffect(() => {
        Aos.init();
    })


    return (
        <>
            <div className=" p-lg-0 pt-lg-2">
                <div className="m-5 px-lg-5">

                    <div className="d-lg-flex align-items-center justify-content-between ">
                        <div className="conform-info-box m-5">
                            <h2 className="conform-info-heading">LET’S TALK</h2>
                            <p className="conform-info-para">Our customer experience experts are always ready to provide you with all the answers. <br /> Call us now!</p>
                            <div data-aos="fade-right">

                                <div className="conformc-add position-relative">
                                    <div className="conformww-img">
                                        <img className="img-fluid" src="./img/Contact/Group 783.png" alt="" />
                                    </div>

                                <div className="jhvwwchv">

                                    <div className="conform-diamond">
                                        <div className="callconform">
                                            <img className="img-fluid" src="./img/Contact/Group 709.png" alt="" />
                                        </div>
                                        <p>+61 2 83794089</p>
                                        <div className="conformhollowDia"></div>
                                    </div>

                                </div>
                                </div>

                            </div>
                        </div>
                         <div data-aos="fade-left">
                            <div className="fluid">
                                <div className="conform-contactForm  p-5 m-4">
                                    <p className="conform-contactHeading text-uppercase fw-bold my-5 fs-4">Contact us</p>
                                
                                    <div className="row">
                                        <div className="col" >
                                            <input type="text" name="fname" placeholder="First Name" className="philosophy-input" id="input" />
                                            <label for="fname" className="philosophy-input-label">First Name</label>
                                        </div>
                                    
                                        <div className="col ">
                                            <input type="text" name="fname" placeholder="Last Name" className="philosophy-input" id="input" />
                                            <label for="fname" className="philosophy-input-label">Last Name</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="row my-3">
                                        <div className="col">
                                            <input type="text" name="fname" placeholder="Email" className="philosophy-input" id="input" />
                                            <label for="fname" className="philosophy-input-label">Email</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" name="fname" placeholder="Mobile" className="philosophy-input" id="input" />
                                            <label for="fname" className="philosophy-input-label">Mobile</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col my-3">
                                        <input type="text" name="fname" placeholder="Website URL" className="philosophy-input" id="input" />
                                        <label for="fname" className="philosophy-input-label">Website URL</label>
                                    </div>
                                    
                                    
                                    <div className="col my-3">
                                        <textarea className="form-control philosophy-input" placeholder="Your Message"  id="input" rows="5"></textarea>
                                        <label for="fname" className="philosophy-input-label">Your Message</label>
                                    </div>
                                    
                                    
                                    <button type="button" className="btn footer-button">
                                        <div className="footer-button-text">
                                            Send Request
                                        </div>
                                    </button>
                                    <button type="button" class="btn conformreset-btn">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConForm