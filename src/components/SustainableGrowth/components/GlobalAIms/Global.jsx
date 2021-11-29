import React from 'react'
import '../GlobalAIms/Global.css'
import circle from '../GlobalAIms/circle1.png'
import twitter from '../GlobalAIms/twitter.png'
import arrow from '../GlobalAIms/arrow.png'
import linkedin from '../GlobalAIms/linkedin.png'

const Global = () => {
    return (
        <div>
            <div className="container container-Global d-flex justify-content-center flex-column align-items-center">
                <div className="row"><p className='Global-text-1'>"By 2025, Corporality Global aims to become an epitome of sustainability, worldwide."</p></div>
                <div className="row"><p className='Global-text-2'>Priya Mishra</p></div>
                <div className="row"><p className='Global-text-3'>CEO, Corporality Global</p></div>
                {/* <div className="row">
                    <div className="icons_Global_main">
                        <div className="icons_global-twitter">
                            <img src={circle} alt='' className='Global-circle' />
                            <img src={twitter} alt='' className='Global-twitter' />
                            <img src={arrow} alt='' className='Global-arrow-twitter' />
                            <p className='twitter-global'>twitter</p>
                        </div>
                        <div className="icons_global-linkedin">
                            <img src={circle} alt='' className='Global-circle-linkedin' />
                            <img src={linkedin} alt='' className='Global-linkedin' />
                            <img src={arrow} alt='' className='Global-arrow-linkedin' />
                            <p className='linkedin-global'>linkedin</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Global
