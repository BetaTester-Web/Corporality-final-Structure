import React from 'react'
import css from '../CarrerImage/Carrer.css'
import background from '../CarrerImage/background.png'
import carrer from '../CarrerImage/Carrers.png'

const Carrer = () => {
    return (
        <div>
            <img data-aos="flip-right" src = {carrer} alt='' className='carrer-fluid-card' />
            <img  src={background} alt='' className=' img-fluid image-fluid' />
            
            
        </div>
    )
}

export default Carrer
