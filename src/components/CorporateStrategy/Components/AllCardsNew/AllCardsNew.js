import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AllCardsNew.css";
import position from "./images/position.png";
import budget from "./images/budget.png";
import corporateVision from "./images/corporateVision.png";
import endgoal from "./images/endgoal.png";
import future from "./images/future.png";
import implimentation from "./images/implimentation.png";
import joiner from "./images/joiner.png";
import knowledge from "./images/knowledge.png";
import line_horizontal from "./images/line_horizontal.png";
import line_vertical from "./images/line_vertical.png";
import outcome from "./images/outcome.png";
import readiness from "./images/readiness.png";
import scheduling from "./images/scheduling.png";
import scoping from "./images/scoping.png";
import segmentation from "./images/segmentation.png";
import strategizing from "./images/strategizing.png";
import systemPrep from "./images/systemPrep.png";
import taskPlan from "./images/taskPlan.png";
import techStack from "./images/techStack.png";
import timeline from "./images/timeline.png";

function AllCardsNew() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });
  return (
    <>
      <div className="container">
        <div className="cards_top_text_container">
          <div className="cards_top_heading animate two">
            <span>Intended</span>
            &nbsp;
            <span>Maturity</span>
            &nbsp;<span> –</span> &nbsp;
            <span>Modelling</span>
            &nbsp;
            <span>and</span>
            &nbsp;
            <span>Methodology</span>
          </div>
          <div className="cards_top_description">
            Designed and successfully used by Corporality to accelerate the rate
            of overall company growth, businesses focused on Human to Human
            growth (not just B2B or B2C) get the option to achieve their goals
            faster than their competitors. It expedites revenue growth by
            getting the functional marketing strategies of corporate culture,
            sales & lead generation, marketing, and solutions fully aligned to
            the management team’s visionary growth strategy for the company.
          </div>
        </div>

        <div class="all_cards_parent">
          <div className="line_vertical">
            <img src={line_vertical} alt="" />
          </div>
          <div
            className="cards_text_side_1 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_1">
              <img src={line_horizontal} alt="" />
            </div>

            <div className="cards_top_heading_text ">Audit and Diagnostic</div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_1_card1">
              <div className="side1_card1_image">
                <img src={position} alt="" />
              </div>
              <div className="side1_card1_text">Position</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_1_card2 ">
              <div className="side1_card2_image">
                <img src={readiness} alt="" />
              </div>
              <div className="side1_card2_text">Readiness</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="image_side_1_card3">
              <div className="side1_card3_image">
                <img src={timeline} alt="" />
              </div>
              <div className="side1_card3_text">Timeline</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="image_side_1_card4">
              <div className="side1_card4_image">
                <img src={segmentation} alt="" />
              </div>
              <div className="side1_card4_text">Matrix and Tracking</div>
            </div>
          </div>

          {/* ROW 2 */}

          <div
            className="cards_text_side_2 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_2">
              <img src={line_horizontal} alt="" />
            </div>
            <div className="cards_top_heading_text">Vision Remapping</div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_2_card1 ">
              <div className="side2_card1_image">
                <img src={corporateVision} alt="" />
              </div>
              <div className="side2_card1_text">Corporate Vision</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_2_card2 ">
              <div className="side2_card2_image">
                <img src={endgoal} alt="" />
              </div>
              <div className="side2_card2_text">Marketing Objective</div>
            </div>
          </div>

          <div
            className=" aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="image_side_2_card3">
              <div className="side2_card3_image">
                <img src={outcome} alt="" />
              </div>
              <div className="side2_card3_text">Outcome model</div>
            </div>
          </div>

          <div class="image_side_2_card4">demo text </div>

          {/* ROW 3 */}

          <div
            className="cards_text_side_3 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_3">
              <img src={line_horizontal} alt="" />
            </div>
            <div className="cards_top_heading_text">
              Strategizing and Planning
            </div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className=" aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_3_card1">
              <div className="side3_card1_image">
                <img src={scoping} alt="" />
              </div>
              <div className="side3_card1_text">Scoping</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_3_card2 ">
              <div className="side3_card2_image">
                <img src={budget} alt="" />
              </div>
              <div className="side3_card2_text">Budgeting</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="image_side_3_card3 ">
              <div className="side3_card3_image">
                <img src={strategizing} alt="" />
              </div>
              <div className="side3_card3_text">Steategizing</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="image_side_3_card4 ">
              <div className="side3_card4_image">
                <img src={taskPlan} alt="" />
              </div>
              <div className="side3_card4_text">Task Planning</div>
            </div>
          </div>

          <div
            className="cards_text_side_4 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_4">
              <img src={line_horizontal} alt="" />
            </div>

            <div className="cards_top_heading_text">
              Task Force and Execution
            </div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_4_card1">
              <div className="side4_card1_image">
                <img src={techStack} alt="" />
              </div>
              <div className="side4_card1_text">Tech Stack</div>
            </div>
          </div>

          <div
            className=" aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_4_card2">
              <div className="side4_card2_image">
                <img src={scheduling} alt="" />
              </div>
              <div className="side4_card2_text">Scheduling</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="image_side_4_card3 ">
              <div className="side4_card3_image">
                <img src={implimentation} alt="" />
              </div>
              <div className="side4_card3_text">Implementation</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="image_side_4_card4 ">
              <div className="side4_card4_image">
                <img src={segmentation} alt="" />
              </div>
              <div className="side4_card4_text">Segmentation and Matrix</div>
            </div>
          </div>

          <div
            className="cards_text_side_5 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_5">
              <img src={line_horizontal} alt="" />
            </div>

            <div className="cards_top_heading_text">Asset Buiding</div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className=" aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_5_card1">
              <div className="side5_card1_image">
                <img src={knowledge} alt="" />
              </div>
              <div className="side5_card1_text">Knowledge based</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_5_card2 ">
              <div className="side5_card2_image">
                <img src={systemPrep} alt="" />
              </div>
              <div className="side5_card2_text">System Preparation</div>
            </div>
          </div>

          <div class="image_side_5_card3"> demo text</div>
          <div class="image_side_5_card4"> demo text</div>

          <div
            className="cards_text_side_6 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="line_horizontal_6">
              <img src={line_horizontal} alt="" />
            </div>

            <div className="cards_top_heading_text">Plan Ahead</div>
            <div className="cards_top_heading_joiner">
              <img src={joiner} alt="" />
            </div>
          </div>

          <div
            className=" aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="image_side_6_card1">
              <div className="side6_card1_image">
                <img src={future} alt="" />
              </div>
              <div className="side6_card1_text">Future beyond 52 weeks</div>
            </div>
          </div>

          <div
            className="aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="image_side_6_card2 ">
              <div className="side6_card2_image">
                <img src={endgoal} alt="" />
              </div>
              <div className="side6_card2_text">End goal setting</div>
            </div>
          </div>

          <div class="image_side_6_card3"> demo text</div>
          <div class="image_side_6_card4"> demo text</div>
        </div>
      </div>
    </>
  );
}

export default AllCardsNew;
