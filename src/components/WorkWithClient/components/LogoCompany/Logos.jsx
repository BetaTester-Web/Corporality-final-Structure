import React , {useEffect} from 'react'
import '../LogoCompany/Logos.css'
import aos from 'aos'
import logo1 from '../LogoCompany/logo1.png'
import logo2 from '../LogoCompany/logo2.png'
import logo3 from '../LogoCompany/logo3.png'
import logo4 from '../LogoCompany/logo4.png'
import logo5 from '../LogoCompany/logo5.png'
import logo6 from '../LogoCompany/logo6.png'
import logo7 from '../LogoCompany/logo7.png'

const Logos = () => {
    useEffect(() => {
        aos.init({ duration: 3000 , disable: 'mobile' });

    }, [])
    return (
        <div className=" Logos_Partner_all">
            <div className="container">
                
                <div className="row All_Icons ">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img data-aos="flip-left" data-aos-delay="500" src={logo1} alt='' className='Logo-1-Partner logo1ofpartner' />
                        <img data-aos="flip-left" data-aos-delay="1000" src={logo2} alt='' className='Logo-1-Partner logo2ofpartner' />

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img data-aos="flip-left" data-aos-delay="1500" src={logo3} alt='' className='Logo-1-Partner logo3ofpartner' />
                        <img data-aos="flip-left" data-aos-delay="2000" src={logo4} alt='' className='Logo-1-Partner logo-partner-4' />


                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <img data-aos="flip-left" data-aos-delay="2500" src={logo5} alt='' className='Logo-1-Partner logo5ofpartner' />
                        <img data-aos="flip-left" data-aos-delay="3000" src={logo6} alt='' className='Logo-1-Partner logo-partner-6' />

                    </div>
                    <div  className="col-lg-1 last-logo d-flex justify-content-center align-items-center"> 
                    <img data-aos="flip-left" data-aos-delay="3000" src={logo7} alt='' className='Logo-1-Partner logo7ofpartner  ' /></div>
                </div>
            </div>
        </div>
    )
}

export default Logos
