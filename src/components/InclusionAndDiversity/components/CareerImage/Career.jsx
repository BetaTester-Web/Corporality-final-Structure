import React from 'react'
import css from '../CareerImage/Career.css'
import background from '../CareerImage/background.png'
import career from '../CareerImage/Career.png'

const Career = () => {
    return (
        <div>
            <img data-aos="flip-right" src = {career} alt='' className='carrer-fluid-card' />
            <img  src={background} alt='' className=' img-fluid image-fluid' />
            
            
        </div>
    )
}

export default Career
