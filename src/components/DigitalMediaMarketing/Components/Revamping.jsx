import React from 'react'
import "./Revamping.css"

export default function Revamping() {
	return (
		<>
			<div className="DDMRevamping d-sm-flex">

				<div className="DDMRevampingText d-flex flex-column">
					<h1>Thinking of creating a website
						or revamping yours?</h1>
					<p>Have you considered planning before executing? Our Website Masterplan will take you to a profitable Website blueprint journey that will drive sales to your business by enhancing your website’s most potent weapon: great customer experience (CX).</p>
				<div className="DDMRevampingTalkingButton">
					<button>Talk To Us</button>
				</div>
				</div>
				<div className="DDMRevampimgBulb">
					<img src="./img/DigitalMediaMarketing/img/Banner/DDMBulb.png" />
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
