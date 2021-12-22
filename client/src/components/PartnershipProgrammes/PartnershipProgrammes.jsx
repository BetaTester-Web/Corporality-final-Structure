import PPComp1 from "./Components/PPComp1/PPComp1"
import PPComp2 from "./Components/PPComp2/PPComp2"
import PPComp3 from "./Components/PPComp3/PPComp3"  
import PPComp4 from "./Components/PPComp4/PPComp4"


export default function PartnershipProgrammes() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <PPComp1 />
            <PPComp2 />
            <PPComp3 />
            <PPComp4 />
        </div>
    )
}
