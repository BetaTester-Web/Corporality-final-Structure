import React from 'react'
import '../LogoCompany/Logos.css'
import logo1 from '../LogoCompany/logo1.png'
import logo2 from '../LogoCompany/logo2.png'
import logo3 from '../LogoCompany/logo3.png'
import logo4 from '../LogoCompany/logo4.png'
import logo5 from '../LogoCompany/logo5.png'
import logo6 from '../LogoCompany/logo6.png'
import logo7 from '../LogoCompany/logo7.png'

const Logos = () => {
    return (
        <div className=" Logos_Partner_all">
            <div className="container">
                
                <div className="row All_Icons ">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img src={logo1} alt='' className='Logo-1-Partner' />
                        <img src={logo2} alt='' className='Logo-1-Partner' />

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img src={logo3} alt='' className='Logo-1-Partner' />
                        <img src={logo4} alt='' className='Logo-1-Partner logo-partner-4' />


                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <img src={logo5} alt='' className='Logo-1-Partner' />
                        <img src={logo6} alt='' className='Logo-1-Partner logo-partner-6' />

                    </div>
                    <div className="col-lg-1 last-logo d-flex justify-content-center align-items-center"> <img src={logo7} alt='' className='Logo-1-Partner' /></div>
                </div>
            </div>
        </div>
    )
}

export default Logos
