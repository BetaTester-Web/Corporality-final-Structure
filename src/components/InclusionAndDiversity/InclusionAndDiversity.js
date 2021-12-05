import React , {useEffect} from 'react'
import aos from 'aos'
import Inclusion from './components/Incl/Inclusion';
import OurFaith from './components/OurFaith/OurFaith';
import Responsible from './components/ResponsibleLeadership/Responsible';
import Hover from './components/HoverInclusion/Hover';
import Duty from './components/FourCards/Duty';
import Newsletter from './components/LastComponentINC/Newsletter';
import Carrer from './components/CarrerImage/Carrer';

import Leadership from './components/LeaderShip/Leadership';



const InclusionAndDiversity = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div>
            <Inclusion />
            <OurFaith />
            <Hover />
            <Duty />
            <Leadership />
            <Carrer />
            <Newsletter />
        </div>
    )
}

export default InclusionAndDiversity
