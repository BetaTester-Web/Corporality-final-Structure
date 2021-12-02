import React from 'react'
import './TeamSpirit.css'
import heading_1_arrow from '../Limitless/arrow1.png'
import top_image from '../Limitless/Main.png'
import top_back from '../Limitless/Back.png'
import top_rectangle from '../Limitless/polygon1.png'
import heading_2_arrow from '../Limitless/arrow2.png'
import bottom_image from '../Limitless/main2.png'
import bottom_back from '../Limitless/back2.png'
import bottom_rectangle from '../Limitless/polygon2.png'
const TeamSpirit = () => {
    return (

        <div className="community_support_main_TeamSpirit">
            <div
                className="community_support_first_TeamSpirit aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
            >
                <div className="community_first_heading_TeamSpirit">
                    <div className="community_first_heading_text_TeamSpirit">Invigorating the Team spirit</div>
                    <div className="community_first_heading_arrow_TeamSpirit">
                        <img src={heading_1_arrow} alt="" />
                    </div>
                </div>
                <div className="community_first_description_TeamSpirit">
                Corporality Global works with true agility to make a difference across every project.
                </div>
                <div className="community_top_image_TeamSpirit">
                    <img src={top_image} alt="" className="community_top_image_image_TeamSpirit" />
                </div>
                <div className="community_top_back_image_TeamSpirit">
                    <img src={top_back} alt="" />
                </div>
                <div className="community_top_rectangle_TeamSpirit">
                    <img src={top_rectangle} alt="" />
                </div>
            </div>
            <div
                className="community_support_second_TeamSpirit  aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
            >
                <div className="community_second_heading_TeamSpirit">
                    <div className="community_second_heading_text_TeamSpirit">
                    Stepping into the Global Market
                    </div>
                    <div className="community_second_heading_arrow_TeamSpirit">
                        <img src={heading_2_arrow} alt="" />
                    </div>
                </div>
                <div className="community_second_description_TeamSpirit">
                Corporality Global has already taken baby steps to enter the North American market as we aim to grow.
                </div>
                <div className="community_bottom_image_TeamSpirit">
                    <img src={bottom_image} alt="" />
                </div>
                <div className="community_bottom_back_image_TeamSpirit">
                    <img src={bottom_back} alt="" />
                </div>
                <div className="community_bottom_rectangle_TeamSpirits">
                    <img src={bottom_rectangle} alt="" />
                </div>
            </div>
        </div>

    )
}

export default TeamSpirit
