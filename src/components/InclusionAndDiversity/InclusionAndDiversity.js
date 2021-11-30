import React , {useEffect} from 'react'
import aos from 'aos'
import Inclusion from './components/Incl/Inclusion';
import OurFaith from './components/OurFaith/OurFaith';
import Responsible from './components/ResponsibleLeadership/Responsible';
import Hover from './components/HoverInclusion/Hover';
import Duty from './components/FourCards/Duty';



const InclusionAndDiversity = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div>
            <Inclusion />
            <OurFaith />
           {/*  <Hover /> */}
            <Duty />
            <Responsible />
        </div>
    )
}

export default InclusionAndDiversity
