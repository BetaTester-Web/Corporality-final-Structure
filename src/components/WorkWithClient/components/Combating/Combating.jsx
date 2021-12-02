import React from 'react'
import '../Combating/Combating.css'
import main from './main.png'
import back from './back.png'
import group from './Group.png'
import textrect from './text-rect.png'

const Combating = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="Combating_images_column">
                            <img src={group} alt='' className='Combating_group' />
                            <div className="MainAndBack_Combating">
                                <div className="Combating_main">
                                    <div className="Combating_main_on_div">
                                        <img src={main} alt='' />
                                    </div>
                                </div>
                                <img src={back} alt='' className='Combating_back' />
                            </div>
                           <div className="Texting_in_image_Combating">
                               <p className='Image_texting_1'>Strategic Consulting Methodologies</p>
                               <p className='Image_texting_2'>A combination of expertise, skill, knowledge and proven programmes.</p>
                               <img src={textrect} alt ='' className='Image_rect' />
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className='Combating_texting_coloumn'>
                            <p className='Combating_texting_column-1'>Combating change with technology</p>
                            <p className='Combating_texting_column-2'>A multi-talented team with a winning streak</p>
                            <p className='Combating_texting_column-3'>Making strides across the industry, we work as a team towards a single goal- a happy customer</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Combating
