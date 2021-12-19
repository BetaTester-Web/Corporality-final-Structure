import React , {useEffect} from "react";
import "../FourCards/Duty.css";
import aos from 'aos'
import polygon1 from "../FourCards/polygon1.png";
import polygon2 from "../FourCards/polygon2.png";
import polygon3 from "../FourCards/polygon3.png";
import polygon4 from "../FourCards/polygon4.png";

const Duty = () => {
  useEffect(() => {
    aos.init( {disable:"mobile"});
}, [])
  return (
    <div className="Duty_Four">
      <div className="container d-flex flex-column ">
        <div className="row Row1_Duty_text_box d-flex flex-column">
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="Duty-row1-text-1">A duty without boundaries</p>
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="1000" className="Duty-row1-text-2">
            Diversity is extremely powerful and at Corporality Global, our
            employees thrive in their roles and responsibilities. Here is how we
            view diversity in its glory
          </p>
        </div>
        <div className="row Duty-row-cards">
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="1000" className="col-xl-6 justify-content-center align-items-center">
            <div  className="Duty_images_card Duty_image_card_1_top">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={polygon1} alt="" />
                </div>
              </div>
              <div className="Duty_card_text Duty_card_text_1">
                <p className="Duty_card_text_1_heading">Gender inclusive</p>
                <p className="Duty_card_text_2_Description">
                  A gender balanced workplace empowers people while removing
                  barriers to equal participation. All employees get to access
                  rewards, resources and opportunities.{" "}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="1500" className="col-xl-6 2-Card-whole-column justify-content-center align-items-center">
            <div  className="Duty_images_card Duty-images-card-2">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={polygon2} alt="" />
                </div>
              </div>
              <div className="Duty_card_text_2">
                <p className="Duty_card_text_1_heading">Ethnic diversity</p>
                <p className="Duty_card_text_2_Description">
                  Underrepresented communities must be embraced in the
                  workplace. It fosters improved accessibility to newer markets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Duty_space"></div>
        <div className="row second_row_incl">
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="2000" className="col-xl-6 justify-content-center align-items-center">
            <div  className="Duty_images_card Duty-images-card-3">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={polygon4} alt="" />
                </div>
              </div>
              <div className="Duty_card_text_3 ">
                <p className="Duty_card_text_1_heading dutyText-3-card-heading">
                  Persons with disabilities
                </p>
                <p className="Duty_card_text_2_Description">
                  An equal contribution by everyone is crucial for business and
                  organisational sustainability. Persons with disabilities can
                  be highly productive individuals.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            data-aos-delay="2000" className="col-xl-6 justify-content-center align-items-center">
            <div  className="Duty_images_card Duty-images-card-4">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={polygon3} alt="" />
                </div>
              </div>
              <div className="Duty_card_text_4 ">
                <p className="Duty_card_text_1_heading">
                  Mental health priorities
                </p>
                <p className="Duty_card_text_2_Description">
                  A team that is mentally healthy can thrive and move forward.
                  Businesses hiring high-performing employees must prioritize
                  mental health, which is also crucial for the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duty;
