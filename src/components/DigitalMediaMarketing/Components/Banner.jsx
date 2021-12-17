import React from 'react'
import './Banner.css'

export default function Banner() {
	return (
		<>
			<div className="DDMBanner d-xl-flex  justify-content-between">
				
				<div className="DDMBannerText">
					{/* <h1>Effective Digital Media
						Marketing Strategy for Small and Large Business</h1>
					<p>Head to toe strategy focused Digital Media Marketing</p> */}
					<h1 className="heading animate two">
									<span>Effective</span>
									&nbsp;
									<span>Digital</span>
									&nbsp;
									<span>MEdia</span>
									&nbsp;
									<span>Marketing</span>
									&nbsp;
									<span>for</span>
									&nbsp;
									<span>Small</span>
									&nbsp;
									<span>and</span>
									&nbsp;
									<span>Large</span>
									&nbsp;
									<span>Business</span>
								</h1>
					<p data-aos="fade-right" data-aos-delay="400">Head to toe strategy focused Digital Media Marketing</p>
				
				<div className="DDMBannerDiscoveryButton" data-aos="fade-right" data-aos-delay="800">
					<button>Book Your Discovery Session</button>
				</div>
				<div className="DDMBannerSocialIcons">
					<a href='https://www.facebook.com/CorporalityG'>
						<img src='./img/CxoStrategy/img/differentiate/facebook.png' />
					</a>
					<a href='https://twitter.com/corporalityg'>
						<img src='./img/CxoStrategy/img/differentiate/twitter.png' />
					</a>
					<a href='https://www.instagram.com/corporalityg/'>
						<img src='./img/CxoStrategy/img/differentiate/instagram.png' />
					</a>
					<a href='https://www.linkedin.com/company/corporality/'>
						<img src='./img/CxoStrategy/img/differentiate/linkedin.png' />
					</a>
					<a href='https://in.pinterest.com/CorporalityG/'>
						<img src='./img/CxoStrategy/img/differentiate/pinterest.png' />
					</a>
					<a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg'>
						<img src='./img/CxoStrategy/img/differentiate/youtube.png' />
					</a>
				</div>
				</div>
				<div className="DDMBannerImage d-flex justify-content-end ">
					<img src="./img/DigitalMediaMarketing/img/Banner/DDMBannerImage.png" />
				</div>
				<div className="DDMBannerRectangleBlue">
					<img src="./img/DigitalMediaMarketing/img/Banner/RectangleBlue.png" />
				</div>
				<div className="DDMBannerRectangleYellow">
					<img src="./img/DigitalMediaMarketing/img/Banner/RectangleYellow.png" />
				</div>

			</div>
		</>
	);
}

