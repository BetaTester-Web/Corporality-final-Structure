import React from 'react'
import "./Revamping.css"

export default function Revamping() {
	return (
		<>
			<div className="container DDMRevamping d-sm-flex px-2">

				<div className="DDMRevampingText">
					<h1 data-aos="fade-right" data-aos-duration="800">Thinking of creating a website
						or revamping yours?</h1>
					<p data-aos="fade-right" data-aos-delay="300"  data-aos-duration="800">Have you considered planning before executing? Our Website Masterplan will take you to a profitable Website blueprint journey that will drive sales to your business by enhancing your website’s most potent weapon: great customer experience (CX).</p>
				<div className="DDMRevampingTalkingButton">
					<button data-aos="fade-right" data-aos-delay="600"  data-aos-duration="800">Talk To Us</button>
				</div>
				</div>
				<div className="DDMRevampimgBulb">
					<img src="./img/DigitalMediaMarketing/img/Banner/DesignThinking1.gif" />
				</div>
				{/* <div className="DDMRevampingLine">
					<img src="./img/DigitalMediaMarketing/img/Banner/DDMRevampingLine.png" />
				</div> */}

			</div>
				<div className="DDMRevampingArrow">
					<img src="./img/DigitalMediaMarketing/img/Banner/DDMArrow.png" />
				</div>
		</>
	)
}
