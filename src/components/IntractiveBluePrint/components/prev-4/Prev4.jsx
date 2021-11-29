import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import '../prev-4/prev-4.css'
import hoverimg from '../prev-4/hoverimg.png'

const Prev4 = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div>
            <div class="bp_anm_container">

                <div class="bp_anm_container_img">
                    <img src={hoverimg} alt="" />
                </div>
                <div class="main_container">
                    <div class="bp_anm_container_text" >
                        <h1>“We create fortified,<span >i</span>nteractive blueprints that impact businesses”</h1>
                    </div>
                </div>

            </div>
            {/* <div className="container-fluid container-4">
                <div className="row">
                    <div className="col-12 text-prev-4 d-flex align-items-center justify-content-center flex-column">
                        <p data-aos="fade-down" className='prev-4-1'>“We create fortified, interactive blueprints that impact businesses”</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Prev4
