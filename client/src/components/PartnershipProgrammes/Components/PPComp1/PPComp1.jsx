import "../PPComp1/PPComp1.css";
import React, { useEffect } from "react";
import MainPPone from './MainPPone.png'
import BackPPone from './BackPPone.png'
import smallrectPPone from './SmallrectPPone.png'
import wallPPone from './WallPPone.png'
import rectPPone from './rectPPone.png'
import smallerrectPPone from './text-rectPPone.png'
import aos from 'aos'
import yellowbackgroundPPone from './yellowbackgroundPPone.png'

export default function PPComp1() {
// <<<<<<< HEAD
//     useEffect(() => {
//         AOS.init();
//         AOS.refresh();
//     }, []);
//     return (
//         <div>
//             <div className="p-0 container-fluid ">
//                 <div className="row d-flex flex-row ppc1RowContainer ">
//                     <div className="col p-0 d-flex flex-column justify-content-center ppc1ColWrapper ppc1ColTextWrapper">
//                         <p data-aos="fade-right" data-aos-duration="500" className="ppcHeading">Partnership Programmes</p><br />
//                         <p className="ppcText" data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">Corporality Global holds extensive strategic strength partnership programmes that extend entrepreneurial reach beyond the ordinary</p><br />
//                         <a data-aos="fade-right" data-aos-delay="600" data-aos-duration="500" className='ppc1Button' href="/#">Read More</a>
//                         <img className="ppc1Rec9" src={rec9} alt="" />
//                     </div>
//                     <div className="col p-0 d-flex flex-column justify-content-center ppc1ColWrapper">
//                         <div  data-aos="fade-left" data-aos-duration="1000" className="ppc1ImageWrapper cont">
//                             <img className="qwerty" src={diamond} />
//                             <img className="ppc1Rec6" src={rec6} alt="" />
//                             <div className="ppc1MainImg">
//                                 <img className="ppc1Img1" src={img1} alt="" />
//                             </div>
//                             <img className="ppc1Wall" src={wall} alt="" />
//                             <img className="ppc1Rec8" src={rec8} alt="" />
//                         </div>
//                     </div>
//                 </div>
// =======
  useEffect(() => {
    aos.init({ duration: 3000 });
}, [])
return (
    <div className="OrganisingPrinciple-PPone">
        <div className="navbar-PPone"></div>
        <div className="container container-1-PPone">
        <div className="yellowbackground_Op">
            <img src = {yellowbackgroundPPone} alt = '' />
        </div>
            <div className="row first-image-PPone">
                
                <div className="col-lg-6">
                    <div data-aos="fade-right" className="text-box-1-PPone">

                        <p className='container-1_text-PPone'>Partnership Programmes</p>
                        <p className='container-2_text-PPone'>Corporality holds extensive startegic strength partnership programmes extend enterpreneurial reach beyond the ordinary </p>
                        <div className="small-rect-prev-1-PPone"><img src={smallerrectPPone} alt='' className='smaller-rect-prev-1' /></div>
                        <a
              data-aos="fade-right"
             /*  data-aos-delay="600"
              data-aos-duration="500" */
              className="ppc1Button"
              href="/#"
            >
              Read More
            </a>
                    </div>
                </div>
                <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                    <div data-aos="fade-left" className="image-first-PPone">
                        <img alt='' className='rect-PPone' src={rectPPone} />
                        <img alt='' className='wall-PPone' src={wallPPone} />
                        <img alt='' className='smallrect-PPone' src={smallrectPPone} />
                        <img alt='' className='backimg-PPone' src={BackPPone} />
                        <div className="banner_right_inner-PPone" >
                            <img className='main-prev1-PPone' src={MainPPone} alt=""/>
                        </div>

                    </div>

                </div>

            </div>


        </div>


    </div>
  );
}
