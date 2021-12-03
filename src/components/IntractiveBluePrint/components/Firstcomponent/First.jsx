import React , {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import '../Firstcomponent/Firstcomponent.css'
import icon1 from '../Firstcomponent/icon1.png'
import icon2 from '../Firstcomponent/icon2.png'
import icon3 from '../Firstcomponent/icon3.png'
import icon4 from '../Firstcomponent/icon4.png'
import icon5 from '../Firstcomponent/icon5.png'
import icon6 from '../Firstcomponent/icon6.png'
import back from '../Firstcomponent/bck.png'



const First = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });
        
    }, [])
    return (
        <div>
            <div className="space"></div>
            <div className="container d-flex flex-column">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                        <p data-aos="fade-down" className='first-text-1'>100% customised for your company’s Goals and budgets </p>    
                        <p data-aos="fade-down" className='first-text-2'>Website blueprints are never alike. Corporality Global takes utmost care in preparing the profitable website blueprints that are customised for your business and meet your company’s objectives and budget goals.</p>    
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className=" col-lg-4 columns-first">
                        <div data-aos="flip-left" className="Ib_card-1">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon1} alt='' />
                            <p className='card-1-text-1' >Explore</p>
                            <p className='card-1-text-2' >Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>
                        </div>
                    </div>
                    <div data-aos="flip-right" className=" col-lg-4 columns-first">
                        <div className="Ib_card-1">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon2} alt='' />
                            <p className='card-1-text-1' >Audience</p>
                            <p className='card-2-text-2' >Creating content targeted to a relevant consumer behaviour, after performing a high-level assessment of your current audience and their stages across the marketing funnel</p>
                        </div>

                    </div>
                    <div data-aos="flip-left" className=" col-lg-4 columns-first">
                        <div className="Ib_card-1 Ib_card_3_new">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon3} alt='' />
                            <p className='card-1-text-1' >Design</p>
                            <p className='card-3-text-2' >Differentiating businesses through intentional user experiences that aligns with brand requirements using mood boards, and outlining design expectations</p>
                        </div>


                    </div>
                </div>
                <div data-aos="flip-left" className="row">
                    <div className=" col-lg-4 columns-first">
                        <div className="Ib_card-1">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon4} alt='' />
                            <p className='card-1-text-1' >Scope</p>
                            <p className='card-4-text-2' >Managing project scope and budgets while prioritising specific features and functionality</p>
                        </div>
                    </div>

                    <div data-aos="flip-right" className=" col-lg-4 columns-first">
                        <div className="Ib_card-1 Ib_card_5_new">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon5} alt='' />
                            <p className='card-1-text-1' >Conversions</p>
                            <p className='card-1-text-2' >Increasing visitors and conversions while achieving marketing objectives by creating persuasive landing pages</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className=" col-lg-4 columns-first">
                        <div className="Ib_card-1">
                            <img className='Ib_back' src={back} alt='' />
                            <img className='icon1' src={icon6} alt='' />
                            <p className='card-1-text-1' >Call to Action Analysis</p>
                            <p className='card-6-text-2' >Providing persuasive recommendations that coerce your prospects to take specific actions</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default First