import React , {useEffect} from 'react'
import Inclusion from './components/Incl/Inclusion';
import OurFaith from './components/OurFaith/OurFaith';
import Hover from './components/HoverInclusion/Hover';
import Duty from './components/FourCards/Duty';
import Newsletter from './components/LastComponentINC/Newsletter';
import Leadership from './components/LeaderShip/Leadership';
import Career from './components/CareerImage/Career';



const InclusionAndDiversity = () => {
    return (
        <div>
            <Inclusion />
            <OurFaith />
            <Hover />
            <Duty />
            <Leadership />
            <Career />
            <Newsletter />
        </div>
    )
}

export default InclusionAndDiversity
