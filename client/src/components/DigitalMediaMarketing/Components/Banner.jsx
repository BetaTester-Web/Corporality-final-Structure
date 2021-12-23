import React from 'react'
// import './Banner.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./BannerSajal.css";

export default function Banner() {
	return (
		<>
			<div className="DDMBanner container">
				<div className="row">
					<div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
						<div className="DDMBannerText mx-sm-0 mx-3">
							<h1 className="heading animate two mb-3">
								<span>Effective</span>
								&nbsp;
								<span>Digital</span>
								&nbsp;
								<span>MEdia</span>
								&nbsp;
								<span>Marketing</span>
								&nbsp;
								<span>Strategy</span>
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
							<p className="DMMBannerText" data-aos="fade-right" data-aos-delay="400">Head to toe strategy focused Digital Media Marketing</p>
							<div data-aos="fade-right" data-aos-delay="800">
								<button className="DDMBannerDiscoveryButton px-3 py-2">Book Your Discovery Session</button>
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
						
					</div>
					<div className="col-lg-6 col-12 DMMImgWrapper">
							<div className="DDMBannerImage d-flex justify-content-end ">
								<img src="./img/DigitalMediaMarketing/img/Banner/DDMBannerImage.png" className="DMMImgBanner" />
							</div>
							<div className="DDMBannerRectangleBlue">
								<img src="./img/DigitalMediaMarketing/img/Banner/RectangleBlue.png" className="blueRectangle" />
							</div>
							<div className="DDMBannerRectangleYellow">
								<img src="./img/DigitalMediaMarketing/img/Banner/RectangleYellow.png" className="yellowRectangle" />
							</div>
						</div>
				</div>
			</div>
		</>
	);
}

