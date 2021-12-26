
import './ConForm.css'
// import './ContactForm.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ConForm = () => {
    
    // let placeholder = document.getElementById('input');
   
    // placeholder.addEventListener('focus', (el) => {
    //     this.removeAttribute('placeholder');
    // })

    useEffect(() => {
        Aos.init();
    })


    return (
        <>
            <div className="container p-lg-0 pt-lg-2">
                <div className=" ">

                    <div className="d-lg-flex align-items-center  ">
                        <div className="conform-info-box conmap-detail-head m-5">
                            <h2 className="conform-info-heading">LET’S TALK</h2>
                            <p className="conform-info-para">Our customer experience experts are always ready to provide you with all the answers. <br /> Call us now!</p>
                            <div data-aos="fade-right">

                                <div className="conformc-add position-relative">
                                    <div className="conformww-img">
                                        <img className="img-fluid" src="./img/Contact/Group783.png" alt="" />
                                    </div>

                                <div className="jhvwwchv">

                                    <div className="conform-diamond">
                                        <a href="tel:+61 2 83794089">
                                        <div className="callconform">
                                            <img className="img-fluid" src="./img/Contact/Group709.png" alt="" />
                                        </div>
                                        </a>
                                        <p>+61 2 83794089</p>
                                        <div className="conformhollowDia"></div>
                                    </div>

                                </div>
                                </div>

                            </div>
                        </div>
                         <div data-aos="fade-left">
                            <div className="fluid mx-md-5 px-md-4">
                                <div className="conform-contactForm  p-sm-5 m-sm-4">
                                    <p className="conform-contactHeading text-uppercase fw-bold m-3  fs-4">Contact us</p>
                                
                                    <div className="row">
                                        <div className="col mx-sm-3 con-contct-adh" >
                                            <input type="text" name="fname" placeholder="First Name" className=" philosophy-input aaathuuuuuuuu" id="input" />
                                            <label for="fname" className="philosophy-input-label">First Name</label>
                                        </div>
                                    
                                        <div className="col mx-sm-3 con-contct-aaa">
                                            <input type="text" name="fname" placeholder="Last Name" className=" philosophy-input aaathuuuuuuuu" id="input" />
                                            <label for="fname" className="philosophy-input-label">Last Name</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="row my-3">
                                        <div className="col mx-sm-3 con-contct-adh">
                                            <input type="text" name="fname" placeholder="Email" className="philosophy-input aaathuuuuuuuu" id="input" />
                                            <label for="fname" className="philosophy-input-label">Email</label>
                                        </div>
                                        <div className="col mx-sm-3 con-contct-aaa">
                                            <input type="text" name="fname" placeholder="Mobile" className="philosophy-input aaathuuuuuuuu" id="input" />
                                            <label for="fname" className="philosophy-input-label">Mobile</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col my-3 ">
                                        <input type="text" name="fname" placeholder="Website URL" className="philosophy-input" id="input" />
                                        <label for="fname" className="philosophy-input-label">Website URL</label>
                                    </div>
                                    
                                    
                                    <div className="col my-3">
                                        <textarea className=" philosophy-input" placeholder="Your Message"  id="input" rows="5"></textarea>
                                        <label for="fname" className="philosophy-input-label">Your Message</label>
                                    </div>
                                    
                                    
                                    <button type="button" className="btn footer-button m-3">
                                    <a href="mailto:someone@example.com">

                                        <div className="footer-button-text">
                                            Send Request      
                                        </div>
                                    </a>
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