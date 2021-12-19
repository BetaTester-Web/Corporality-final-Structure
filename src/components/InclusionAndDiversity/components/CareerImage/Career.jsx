import React from 'react'
import '../CareerImage/Career.css'
import background from '../CareerImage/background.png'
import career from '../CareerImage/Career.png'

const Career = () => {
    return (
        <div className='zcareer-image-container'>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="1000" src = {career} alt='' className='career-fluid-card' />
            <img  src={background} alt='' className=' img-fluid image-career' />
            
            
        </div>
    )
}

export default Career
