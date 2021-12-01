
import './ConForm.css'
import './ContactForm.css'
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ConForm = () => {
    

    useEffect(() => {
        Aos.init();
    })


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")


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
                        <div className="philosophyContainer">
                        <div className="philosophyBody">
                {/* <img src="/img/HomePage/media/amico.png" alt="" /> */}
                <div className="philosophyFormWrapper">
                    <div className="philosophyForm">
                        <h3>Request a callback</h3>
                        <div className="customInput">
                            <label htmlFor="philosophyFirstName" className={firstName && "labelToTop"}>First Name</label>
                            <input id="philosophyFirstName" className={firstName && "activeInput"} value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyLastName" className={lastName && "labelToTop"} >Last Name</label>
                            <input id="philosophyLastName" className={lastName && "activeInput"} value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyEmail" className={email && "labelToTop"}>Email Id</label>
                            <input id="philosophyEmail" className={email && "activeInput"} onClick={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="" />
                        </div>
                        <div className="customInput">
                            <label htmlFor="philosophyMobile" className={mobile && "labelToTop"}>Mobile</label>
                            <input id="philosophyMobile" className={mobile && "activeInput"} onClick={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="" />
                        </div>
                        <button type="button" class="philosophySubmitButton">
                            Submit
                        </button>
                    </div>
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