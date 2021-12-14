import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ContactMap.css'

const ContactMap = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <div className="py-5 d-lg-flex">

            <div data-aos="fade-right">

                <div className="conMap">
                    {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>     */}
                    <div className="google-map-code">
                        <div class="d-flex justify-content-start contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.995019646924!2d151.20904221506777!3d-33.86401922624178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae6a1fa4f413%3A0xc20e25be8bd53228!2sCouriers%20To%20India%20-%20Sydney!5e0!3m2!1sen!2sin!4v1637267826696!5m2!1sen!2sin" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="d-flex flex-column">
        <div data-aos="fade-up">

                <div className="conmap-bookOurCalendar m-3">
                    <div className="d-flex flex-wrap">
                        <div className="conmap-detail-head p-2 my-4">
                            <h2 className="my-3">Book Our Calendar</h2>
                            <p className="my-3">Chat with us now <br /> We are active Morning 9:AM – 6:00PM <br /> Monday to Friday Sydney time</p>
                            <button type="button" className="btn know_button ">Speaker</button>
                        </div>

                        <img className="img-fluid m-5 bookcal-Image" src="./img/Contact/connnn.png" alt="" />
                    </div>
                </div>
        </div>
        <div data-aos="fade-up">

                <div className="conmap-partners mx-2">
                    <div className="conmap-detail-head">
                    <h2 className="m-3">Partner With Us</h2>
                    <p className="m-3">Corporality Global is always on the look out for enterprising partners who can build the business and grow along with us. Our parternship journeys are designed to enable, strengthen and grow your business using high-level performance plans and strategies.</p>
                    <button type="button" className="btn know_button">Know More</button>
                    <button type="button" className="btn footer-button">
                        <div className="footer-button-text p-1">

                        Call Us
                        </div>
                        </button>
                    </div>
                </div>
                </div>
            </div>


            </div>

        </>
    )
}

export default ContactMap