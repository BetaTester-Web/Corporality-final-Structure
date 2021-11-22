// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from './assets/logo.png';
// import About from './components/About';
// import Services from './components/Services';
// import Industries from './components/Industries';
// import About2 from './components/About2';
// import { useMediaQuery } from 'react-responsive';
// import OutsideClickHandler from 'react-outside-click-wrapper';

// const Navbar = () => {
//     const isLargeScreen = useMediaQuery({ query: '(min-width: 1200px)' })
//     console.log(isLargeScreen)
//     const [showAbout, setShowAbout] = useState(false)
//     const [showServices, setShowServices] = useState(false);
//     const [showIndustries, setShowIndustries] = useState(false);
//     const [navClicked, setNavClicked] = useState(false);
//     const [showAbout2, setShowAbout2] = useState(false);
//     const [menuId, setMenuId] = useState(1);

//     return (
//         <>
//         <OutsideClickHandler onOutsideClick={() => setNavClicked(false)}>
//             <div className="navbar-wrapper">
//                 {/* nav hamburger */}
//                 <div className="nav-icon" onClick={()=>setNavClicked(!navClicked)} >
//                     <span className={`nav-icon-line ${navClicked? "nav-icon-clicked" : ""}`}></span>
//                     <span className={`nav-icon-line ${navClicked? "nav-icon-clicked" : ""}`}></span>
//                     <span className={`nav-icon-line ${navClicked? "nav-icon-clicked" : ""}`}></span>
//                 </div>
//                 <div className="navbar-container">
//                     <img src={logo} className="corporality-logo" alt="logo" />
//                     <About2 showAbout2={showAbout2} setShowAbout2={setShowAbout2} menuId={menuId} />
//                     <div className={`nav-items ${navClicked? "nav-items-hidden" : ""}`} >
//                         <div className={`nav-item about ${(showAbout && isLargeScreen)? "nav-item-hover" : ""}`} onClick={()=>{setShowAbout(!showAbout)}} onMouseOver={() => {if(isLargeScreen)setShowAbout(true)}} onMouseLeave={()=>{if(isLargeScreen)setShowAbout(false)}} >
//                             <div className="about-a" >ABOUT</div>
//                         </div>
//                             <About setShowAbout={setShowAbout} showAbout={showAbout} isLargeScreen={isLargeScreen} setShowAbout2={setShowAbout2} showAbout2={showAbout2} menuId={menuId} setMenuId={setMenuId} />
//                         <div className={`nav-item services ${(showServices && isLargeScreen)? "nav-item-hover" : ""}`} onClick={()=> {setShowServices(!showServices)}} onMouseOver={() => {if(isLargeScreen)setShowServices(true)}} onMouseLeave={() => {if(isLargeScreen)setShowServices(false)}}>
//                             <div className="services-a">SERVICES</div>
//                         </div>
//                             <Services setShowServices={setShowServices} isLargeScreen={isLargeScreen} showServices={showServices} />
//                         <div className="nav-item insights">
//                             <div className="insights-a">INSIGHTS</div>
//                         </div>
//                         <div className={`nav-item industries ${(showIndustries && isLargeScreen)? "nav-item-hover" : ""}`} onClick={()=> {console.log("set industries");setShowIndustries(!showIndustries)}} onMouseOver={()=> {if(isLargeScreen)setShowIndustries(true)}} onMouseLeave={()=> {if(isLargeScreen)setShowIndustries(false)}}>
//                             <div className="industries-a">INDUSTRIES</div>
//                         </div>
//                             <Industries setShowIndustries={setShowIndustries} isLargeScreen={isLargeScreen} showIndustries={showIndustries} />
//                         <div className="nav-item contact">
//                             <div className="contact-a">CONTACT</div>
//                         </div>
//                         <div className="nav-item contact-no">
//                             <div className="contact-no-a">+61 2 83794089</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </OutsideClickHandler>
//         </>
//     )
// }

// export default Navbar;
