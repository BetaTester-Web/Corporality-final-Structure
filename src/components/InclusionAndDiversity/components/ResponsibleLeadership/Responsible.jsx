import React from 'react'
import '../ResponsibleLeadership/Responsible.css'
import top_image from '../ResponsibleLeadership/Main1.png'
import top_back from '../ResponsibleLeadership/Back1.png'
import bottom_image from '../ResponsibleLeadership/Main2.png'
import bottom_back from '../ResponsibleLeadership/Back2.png'
import top_rectangle from '../ResponsibleLeadership/polgon1.png'
import bottom_rectangle from '../ResponsibleLeadership/polygon2.png'

const Responsible = () => {
    return (
        <div className="Responsible_leadership_main">
      <div
        className="Responsible_leadership_first aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className="Responsible-first-heading">
          <div className="Responsible-first-heading_text">Inclusion and diversity across our partnerships</div>
          {/* <div className="Responsible-first-heading_arrow">
            <img src={heading_1_arrow} alt="" />
          </div> */}
        </div>
        <div className="Responsible-first-description">
        Every partner shares a commitment and ideas only get better when discussed openly. A mix of people is the best way to get decisions going.
        </div>
        <div className="Responsible_top_image"  >
          <img src={top_image} alt="" />
        </div>
        <div className="Responsible_top_back_image">
          <img src={top_back} alt="" />
        </div>
        <div className="Responsible_top_rectangle">
          <img src={top_rectangle} alt="" />
        </div>
      </div>
      <div
        className="Responsible_leadership_second  aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className="Responsible_second_heading">
          <div className="Responsible_second_heading_text">
          Responsible leadership
          </div>
          {/* <div className="Responsible_second_heading_arrow">
            <img src={heading_2_arrow} alt="" />
          </div> */}
        </div>
        <div className="Responsible_second_description">
        Corporality Global’s leadership is constantly discussing diversity, inclusion and responsibility across the workplace. It ensures high employee contentment levels.
        </div>
        <div className="community_bottom_image">
          <img src={bottom_image} alt="" />
        </div>
        <div className="community_bottom_back_image">
          <img src={bottom_back} alt="" />
        </div>
        <div className="community_bottom_rectangle">
          <img src={bottom_rectangle} alt="" />
        </div>
      </div>
    </div>
    )
}

export default Responsible
