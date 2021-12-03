import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AllCardsNew.css";
import joiner from "./images/joiner.png";
import line_horizontal from "./images/line_horizontal.png";
import line_vertical from "./images/line_vertical.png";
import aa from "./images/1-1.png";
import ab from "./images/1-2.png";
import ac from "./images/1-3.png";
import ad from "./images/1-4.png";
import ae from "./images/1-5.png";
import ba from "./images/2-5.png";
import bb from "./images/2-4.png";
import bc from "./images/2-3.png";
import bd from "./images/2-2.png";
import be from "./images/2-1.png";
import ca from "./images/3-1.png";
import cb from "./images/3-2.png";
import cc from "./images/3-3.png";
import cd from "./images/3-4.png";
import ce from "./images/3-5.png";
import da from "./images/4-1.png";
import db from "./images/4-2.png";
import dc from "./images/4-3.png";
import dd from "./images/4-4.png";
import ea from "./images/5-1.png";
import eb from "./images/5-2.png";
import ec from "./images/5-3.png";

function AllCardsNew() {
	useEffect(() => {
		Aos.init();
	});
	return (
		<>
			<div class="gotomarketing_all_cards_parent">
				<div className="gotomarketing_line_vertical">
					<img src={line_vertical} alt="" />
				</div>
				<div
					className="gotomarketing_cards_text_side_1 aos-init aos-animate"
					data-aos="zoom-in"
					data-aos-duration="2500"
				>
					<div className="gotomarketing_line_horizontal_1">
						<img src={line_horizontal} alt="" />
					</div>

					<div className="gotomarketing_cards_top_heading_text ">
						CUSTOMER PERSONA
					</div>
					<div className="gotomarketing_cards_top_heading_joiner">
						<img src={joiner} alt="" />
					</div>
				</div>

				<div
					className="gotomarketing_image_side_1_card1 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="500"
				>
					<div className="gotomarketing_side1_card1_image">
						<img src={aa} alt="" />
					</div>
					<div className="gotomarketing_side1_card1_text">
						Research Personas
					</div>
				</div>

				<div
					className="gotomarketing_image_side_1_card2 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side1_card2_image">
						<img src={ab} alt="" />
					</div>
					<div className="gotomarketing_side1_card2_text">Segment Personas</div>
				</div>

				<div
					className="gotomarketing_image_side_1_card3 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side1_card3_image">
						<img src={ac} alt="" />
					</div>
					<div className="gotomarketing_side1_card3_text">
						Create a name or story
					</div>
				</div>

				<div
					className="gotomarketing_image_side_1_card4 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="2000"
				>
					<div className="gotomarketing_side1_card4_image">
						<img src={ad} alt="" />
					</div>
					<div className="gotomarketing_side1_card4_text">
						Identify objectives and challenges
					</div>
				</div>

				<div
					className="gotomarketing_image_side_1_card5 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="2000"
				>
					<div className="gotomarketing_side1_card5_image">
						<img src={ae} alt="" />
					</div>
					<div className="gotomarketing_side1_card5_text">
						Customised digital marketing and sales strategies
					</div>
				</div>

				{/* ROW 2 */}

				<div
					className="gotomarketing_cards_text_side_2 aos-init aos-animate"
					data-aos="zoom-in"
					data-aos-duration="2500"
				>
					<div className="gotomarketing_line_horizontal_2">
						<img src={line_horizontal} alt="" />
					</div>
					<div className="gotomarketing_cards_top_heading_text">
						COMPETITOR ANALYSIS
					</div>
					<div className="gotomarketing_cards_top_heading_joiner">
						<img src={joiner} alt="" />
					</div>
				</div>

				<div
					className="gotomarketing_image_side_2_card1 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="500"
				>
					<div className="gotomarketing_side2_card1_image">
						<img src={ba} alt="" />
					</div>
					<div className="gotomarketing_side2_card1_text">
						Identifying objectives and competitors
					</div>
				</div>

				<div
					className="gotomarketing_image_side_2_card2 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side2_card2_image">
						<img src={bb} alt="" />
					</div>
					<div className="gotomarketing_side2_card2_text">
						Market share and SWOT Analysis
					</div>
				</div>

				<div
					className="gotomarketing_image_side_2_card3 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side2_card3_image">
						<img src={bc} alt="" />
					</div>
					<div className="gotomarketing_side2_card3_text">
						Building a competitive portfolio
					</div>
				</div>
				<div
					className="gotomarketing_image_side_2_card4 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side2_card4_image">
						<img src={bd} alt="" />
					</div>
					<div className="gotomarketing_side2_card4_text">
						Compare value propositions
					</div>
				</div>
				<div
					className="gotomarketing_image_side_2_card5 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side2_card5_image">
						<img src={be} alt="" />
					</div>
					<div className="gotomarketing_side2_card5_text">
						Execute strategies and follow-up
					</div>
				</div>

				{/* ROW 3 */}

				<div
					className="gotomarketing_cards_text_side_3 aos-init aos-animate"
					data-aos="zoom-in"
					data-aos-duration="2500"
				>
					<div className="gotomarketing_line_horizontal_3">
						<img src={line_horizontal} alt="" />
					</div>
					<div className="gotomarketing_cards_top_heading_text">
						MESSAGING STRATEGY
					</div>
					<div className="gotomarketing_cards_top_heading_joiner">
						<img src={joiner} alt="" />
					</div>
				</div>

				<div
					className="gotomarketing_image_side_3_card1 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="500"
				>
					<div className="gotomarketing_side3_card1_image">
						<img src={ca} alt="" />
					</div>
					<div className="gotomarketing_side3_card1_text">
						Perpare a guide and outline
					</div>
				</div>

				<div
					className="gotomarketing_image_side_3_card2 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side3_card2_image">
						<img src={cb} alt="" />
					</div>
					<div className="gotomarketing_side3_card2_text">
						Identify messaging channels
					</div>
				</div>

				<div
					className="gotomarketing_image_side_3_card3 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side3_card3_image">
						<img src={cc} alt="" />
					</div>
					<div className="gotomarketing_side3_card3_text">
						Draft purpose of the communication
					</div>
				</div>

				<div
					className="gotomarketing_image_side_3_card4 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="2000"
				>
					<div className="gotomarketing_side3_card4_image">
						<img src={cd} alt="" />
					</div>
					<div className="gotomarketing_side3_card4_text">
						Research Target Audience
					</div>
				</div>

				<div
					className="gotomarketing_image_side_3_card5 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="2000"
				>
					<div className="gotomarketing_side3_card5_image">
						<img src={ce} alt="" />
					</div>
					<div className="gotomarketing_side3_card5_text">
						Execute strategies and follow-up
					</div>
				</div>

				<div
					className="gotomarketing_cards_text_side_4 aos-init aos-animate"
					data-aos="zoom-in"
					data-aos-duration="2500"
				>
					<div className="gotomarketing_line_horizontal_4">
						<img src={line_horizontal} alt="" />
					</div>

					<div className="gotomarketing_cards_top_heading_text">STRATAGEM</div>
					<div className="gotomarketing_cards_top_heading_joiner">
						<img src={joiner} alt="" />
					</div>
				</div>

				<div
					className="gotomarketing_image_side_4_card1 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="500"
				>
					<div className="gotomarketing_side4_card1_image">
						<img src={da} alt="" />
					</div>
					<div className="gotomarketing_side4_card1_text">
						Collecting high-quality data to target the right people
					</div>
				</div>

				<div
					className="gotomarketing_image_side_4_card2 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side4_card2_image">
						<img src={db} alt="" />
					</div>
					<div className="gotomarketing_side4_card2_text">
						Designing offers according to customer funnels
					</div>
				</div>

				<div
					className="gotomarketing_image_side_4_card3 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1500"
				>
					<div className="gotomarketing_side4_card3_image">
						<img src={dc} alt="" />
					</div>
					<div className="gotomarketing_side4_card3_text">
						Finding competitor ranking and niches
					</div>
				</div>

				<div
					className="gotomarketing_image_side_4_card4 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="2000"
				>
					<div className="gotomarketing_side4_card4_image">
						<img src={dd} alt="" />
					</div>
					<div className="gotomarketing_side4_card4_text">
						Co-marketing initiatives and events
					</div>
				</div>

				<div
					className="gotomarketing_cards_text_side_5 aos-init aos-animate"
					data-aos="zoom-in"
					data-aos-duration="2500"
				>
					<div className="gotomarketing_line_horizontal_5">
						<img src={line_horizontal} alt="" />
					</div>

					<div className="gotomarketing_cards_top_heading_text">FEEDBACK</div>
					<div className="gotomarketing_cards_top_heading_joiner">
						<img src={joiner} alt="" />
					</div>
				</div>

				<div
					className="gotomarketing_image_side_5_card1 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="500"
				>
					<div className="gotomarketing_side5_card1_image">
						<img src={ea} alt="" />
					</div>
					<div className="gotomarketing_side5_card1_text">
						Establishing a feedback loop
					</div>
				</div>

				<div
					className="gotomarketing_image_side_5_card2 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side5_card2_image">
						<img src={eb} alt="" />
					</div>
					<div className="gotomarketing_side5_card2_text">
						Reporting progress
					</div>
				</div>
				<div
					className="gotomarketing_image_side_5_card3 aos-init aos-animate"
					data-aos="flip-left"
					data-aos-duration="2500"
					data-aos-delay="1000"
				>
					<div className="gotomarketing_side5_card3_image">
						<img src={ec} alt="" />
					</div>
					<div className="gotomarketing_side5_card3_text">
						Resolving pain points
					</div>
				</div>
			</div>
		</>
	);
}

export default AllCardsNew;