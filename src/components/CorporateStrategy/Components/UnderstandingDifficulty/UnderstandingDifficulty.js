import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./UnderstandingDifficulty.css";
import background from "./images/background.png";

function UnderstandingDifficulty() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="understandingdifficulty_parent">
      <div className="container">
        <div className="understanding_difficulty_main_container">
          <div
            className="understanding_difficulty_first_text"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <div className="understanding_difficulty_first_text_heading">
              Understanding corporate difficulty
            </div>
            <div className="understanding_difficulty_first_text_description">
              Corporate level strategy problems are many - but how many have you
              been able to really identify? If your company is showing any one
              of these symptoms, then you must adopt a packaged customer success
              strategy solution to mitigate them.
            </div>
          </div>
          <div className="Background_in_Strategy">
            <img src={background} alt="" />
          </div>
          <div className="understanding_difficulty_middle_image"></div>
          <div
            className="understanding_difficulty_last_text"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <div className="understanding_difficulty_last_text_heading">
              Finding your path
            </div>
            <div className="understanding_difficulty_last_text_description">
              What exactly is the solution? Challenge your current perceptions,
              and break out of your frame of reference. As a market leader,
              compare yourself to other players to stay enlightened about their
              marketing strategies. Thereafter break it down to smaller versions
              and get an objective of your new perspective, which is closest to
              your vision of the corporate level strategy. Define the
              descriptors and precisely identify your business goals based on
              your new approach.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderstandingDifficulty;
