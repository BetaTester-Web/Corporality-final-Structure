import React from 'react'
import "./Blueprint.css"

export default function Blueprint() {
	return (
		<>
			<div className="DDMBlueprint mx-5 px-5">
				<div className="DDMBlueprintText d-flex">
					<h1>THE WEBSITE BLUEPRINT MASTER PLAN</h1>
					<p>
						The Corporality Website blueprint Masterplan is a strategic process to construct your virtual office. Our website design, development experts and dedicated team will work closely with you and start with hands-on brainstorming sessions to achieve your marketing objective through this website blueprint. It’s an intense, multi-layer process, but the final outcome is priceless. Initiate your best customer experience with the Corporality Website MasterPlan, and you will have a customer-centric conversion-based website that will sell for you.
					</p>
				</div>
				<section className="blueprint-area">
					<div className="main-blueprint">
						<div className="main-container"> 
						{/* {/main container div/} */}
							{/* <h4 class="blueprint-h4">THE WEBSITE BLUEPRINT MASTER PLAN</h4> */}
							{/* <h4 className="ml10-blueprint">
								<span className="text-wrapper-blueprint">
									<span className="letters-blueprint">THE WEBSITE BLUEPRINT MASTER PLAN</span>
								</span>
							</h4> */}
							{/* <p className="blueprint-p" data-aos="fade-down" data-aos-easing="ease" data-aos-duration={2500}><span style={{ color: '#757575' }}>The Corporality Website blueprint Masterplan is a strategic process to construct your virtual office. Our website design, development experts and dedicated team will work closely with you and start with</span>
								<span style={{ color: '#a06db0' }}>hands-on brainstorming sessions to achieve your marketing objective through this website blueprint. It’s an intense, multi-layer process, but the final outcome is priceless.</span>
								<span style={{ color: '#757575' }}>Initiate your best customer experience with the Corporality Website MasterPlan, and you will have a customer-centric conversion-based website that will sell for you.</span></p> */}
							{/* <img src="./img/DigitalMediaMarketing/blueprint/website blueprint.jpg" className=" blueprint-img" /> */}

							<div className="blueprint-group-img text-center">
								<div className='sfbp-heading'>
									{/* <img src="./img/DigitalMediaMarketing/blueprint/Steps-for-brand-positioning.png" className=" blueprint-heading" /> */}
									Steps for brand positioning
								</div>
								<div className="blueprint-center ">
									<img src="./img/DigitalMediaMarketing/blueprint/blueprint-center.png" className="" data-aos="zoom-in" data-aos-duration="500" />
								</div>
								<img src="./img/DigitalMediaMarketing/blueprint/circle.png" className="blueprint-img" data-aos="zoom-in" data-aos-duration="1500" />
								<div className="blueprint-cards">
									<img src="./img/DigitalMediaMarketing/blueprint/blueprint-cards.png" data-aos="zoom-in" data-aos-duration="3000" />
								</div>
							</div>
						</div>
						{/* {/container div/} */}
					</div>
				</section>
			</div>
		</>
	)
}
