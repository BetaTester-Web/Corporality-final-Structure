import "../PPComp2/PPComp2.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import rec6 from "../images/rec-6.png"
import rec7 from "../images/rec-7.png"
import rec8 from "../images/rec-8.png"
import rec9 from "../images/rec-9.png"
import img2back from "../images/img2back.png"

export default function PPComp2() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row ml-5 mr-5 ppc2RowContainer">
                    <div className="col">
                        <img className="ppc2Img2back" src={img2back} alt="" />
                        <img className="ppc2Img2" src={img2} alt="" />
                    </div>
                    <div className="col ppc2ColContainer">
                        <p className="ppcHeading">Conversations with more than 100 entrepreneurs across the globe</p><br />
                        <p>We have spoken to global leaders from manufacturing, to medtech, to hospitality and geospatial initiators.</p><br />
                        <a className='ppc2Button' href="#">Check out Our set of Interviews</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
