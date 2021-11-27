import "../PPComp4/PPComp4.css"
import partner1 from "../images/partner1.png"
import partner2 from "../images/partner2.png"
import partner3 from "../images/partner3.png"
import partner4 from "../images/partner4.png"
import partner5 from "../images/partner5.png"

export default function PPComp4() {
    return (
        <div className="ppc4Container">
            <p className="ppcHeading">STRATEGIC PARTNERSHIP</p><br />
            <p className="ppcPara">Overcome your business fears and widen your resources and expertise, with our strategic partnership programmes. There are several stories and experiences that we share with our partners as well.</p><br />
            <div className="ppc4Partners">
                <img className="ppc4PartnerItem1" src={partner1} alt="" />
                <img className="ppc4PartnerItem2" src={partner2} alt="" />
                <img className="ppc4PartnerItem3" src={partner3} alt="" />
                <img className="ppc4PartnerItem4" src={partner4} alt="" />
                <img className="ppc4PartnerItem5" src={partner5} alt="" />
            </div>
        </div>       
    )
}
