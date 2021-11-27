import "../PPComp2/PPComp2.css"
import img2 from "../images/img2.png"
import rec8 from "../images/rec-8.png"
import wall from "../images/wall.png"
import img2back from "../images/img2back.png"

export default function PPComp2() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row ml-5 mr-5 ppc2RowContainer">
                    <div className="col d-flex">
                        <img className="ppc2Img2back" src={img2back} alt="" />
                        <img className="ppc2Img2" src={img2} alt="" />
                        <img className="ppc2Wall" src={wall} alt="" />
                        <img className="ppc2Rec8" src={rec8} alt="" />
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
