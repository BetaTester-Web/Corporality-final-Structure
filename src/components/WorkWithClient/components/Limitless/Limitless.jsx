import React from 'react'
import '../Limitless/Limitless.css'
import hoverimage from '../Limitless/Limitless_background.jpg'

const Limitless = () => {
    return (
        <div>
            <div class="In_Div_anm_container-Limitless">

                <div class="In_Div_anm_container_img-Limitless">
                    <img src={hoverimage} alt="" />
                </div>
                <div class="In_Div_anm_container_text-Limitless">
                    <div class="In_Div_anm_upper_box-Limitless">

                    </div>
                    <div class="In_Div_anm_middle_box-Limitless" >
                        <h1 class="In_Div_anm_container_text-h1-Limitless">Creativity and Innovat<span class="In_Div_anm_zoom-in-Limitless">i</span>on are Limitless
                        </h1>
                    </div>
                    <div class="In_Div_anm_lower_box-Limitless">
                        <h3 className="anm-h3-Limitless">Priya Mishra</h3>
                        <p>CEO, Corporality Global</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Limitless
