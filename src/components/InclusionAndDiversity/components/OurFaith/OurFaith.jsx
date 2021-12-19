import React , {useEffect} from 'react'
import aos from "aos"
import './OurFaith.css'
import wall2 from '../OurFaith/wall.png'
import side2 from '../OurFaith/group.png'
import small2 from '../OurFaith/rect.png'
import main2 from '../OurFaith/main.png'



const OurFaith = () => {
    useEffect(() => {
        aos.init();
    }, [])
    return (
        <div className='OurFaith container-second-ourfaith'>
            <img className='side2-container-Faith' src={side2} alt='' />
            <div className="container ">
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 imaging-2-Faith d-flex justify-content-center align-items-center flex-column">
                            <div className="images-2-Faith">
                                <img className='wall2-container-Faith' src={wall2} alt='' />

                                <img className='small2-container-Faith' src={small2} alt='' />
                                <div className="img-container-Faith">
                                    <div className="hoverinit-Faith Inc_Div_our-faith-main-img-Faith">
                                        <div alt="" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="1000">
                                            <img className='main2-Faith ' src={main2} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-6 texting-2-Faith">
                            <p  data-aos="fade-left" data-aos-duration="2000" className='prev-2-text-1-Faith'>Our Faith</p>
                            <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000" className='prev-2-text-2-Faith'>Corporality Global sets high standards in ethics and integrity. As a leading digital marketing consulting firm in Sydney, we are committed to inclusion and diversity and believe in equal opportunities. We are regulated by our deep-rooted value-based principles, which also enable us to exceed our clients’ expectations. Our employee policies and programmes reinforce the need for inclusion, thus unleashing a spate of innovation driven by ethnicity, culture and backgrounds. Diversity is extremely powerful and the more the multiplicity, the better the creativity. Our human resources programmes have helped us gather a plethora of skills, knowledge and experiences that have a huge impact on business and expansion, in the long run. Corporality Global gives everyone a chance to win thus encouraging constructive communication, brainstorming and teambuilding, leading to the development of new ideas and in turn, happier employees
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFaith
