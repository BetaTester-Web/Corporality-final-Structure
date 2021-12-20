import React from 'react';
import "./NewCharge.css";
import priya from "../img/charge/lady.png"
import vid from "../img/charge/Rectangle 213.png"

const NewCharge = () => {
    return (
        <div className='new-charge'>
            <div className='new-charge-left' >
                <img data-aos="fade-right" data-aos-duration="1200" src={priya} alt="" />
            </div>
            <div className='new-charge-middle' data-aos="zoom-in-up" data-aos-duration="1500">
            </div>
            <div className='new-charge-bottom'>
                    <h1 data-aos="fade-left" data-aos-duration="1500" >Bring a CXO who can lead the charge</h1>
            </div>
            <div className='new-charge-right'>
                <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop id="myVideo">
                    <source src="./img/CxoStrategy/img/charge/website.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default NewCharge
